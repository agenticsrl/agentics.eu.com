import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { COMPANY_BRAIN_GRAPH, type NodeKind } from './companyBrainGraph.data';
import { useForceSimulation, type SimLink, type SimNode } from './useForceSimulation';
import './company-brain.css';

/**
 * Raggio, carica, richiamo al centro e lunghezza di riposo delle molle, per
 * tipo di nodo. Le cariche stanno attorno a 1: sono moltiplicatori, non forze.
 */
const NODE_STYLE: Record<
  NodeKind,
  { radius: number; charge: number; link: number; anchor: number }
> = {
  core: { radius: 13, charge: 3.2, link: 104, anchor: 26 },
  hub: { radius: 7.5, charge: 2.1, link: 70, anchor: 2.2 },
  leaf: { radius: 4.5, charge: 1.4, link: 44, anchor: 1 },
  dot: { radius: 2.2, charge: 1, link: 28, anchor: 1 },
};

/**
 * Etichette sempre a schermo solo per nucleo e hub. Mostrarle tutte e ventisette
 * insieme le faceva accavallare fino a essere illeggibili: quelle delle voci
 * compaiono al passaggio sul nodo, insieme a quelle dei suoi vicini.
 */
const ALWAYS_LABELLED: readonly NodeKind[] = ['core', 'hub'];

const CompanyBrainGraph: React.FC = () => {
  const { language } = useLanguage();
  const prefersReducedMotion = usePrefersReducedMotion();

  const wrapRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(SVGGElement | null)[]>([]);
  const linkRefs = useRef<(SVGLineElement | null)[]>([]);
  const [width, setWidth] = useState(0);
  const [active, setActive] = useState<number | null>(null);

  const { nodes, links } = COMPANY_BRAIN_GRAPH;

  /** Indice per id: la topologia arriva per nome, la fisica lavora per posizione. */
  const indexOf = useMemo(() => {
    const map = new Map<string, number>();
    nodes.forEach((node, i) => map.set(node.id, i));
    return map;
  }, [nodes]);

  const simNodes: readonly SimNode[] = useMemo(
    () => nodes.map((node) => ({
      radius: NODE_STYLE[node.kind].radius,
      charge: NODE_STYLE[node.kind].charge,
      anchor: NODE_STYLE[node.kind].anchor,
    })),
    [nodes]
  );

  const simLinks: readonly SimLink[] = useMemo(
    () =>
      links.map((link) => {
        const a = indexOf.get(link.source) as number;
        const b = indexOf.get(link.target) as number;
        // La molla prende la lunghezza del nodo più periferico dei due.
        const length = Math.min(NODE_STYLE[nodes[a].kind].link, NODE_STYLE[nodes[b].kind].link);
        return { a, b, length };
      }),
    [links, nodes, indexOf]
  );

  /** Vicini di ogni nodo: serve a illuminare il contorno al passaggio del mouse. */
  const neighbours = useMemo(() => {
    const sets = nodes.map(() => new Set<number>());
    simLinks.forEach(({ a, b }) => {
      sets[a].add(b);
      sets[b].add(a);
    });
    return sets;
  }, [nodes, simLinks]);

  /* Disegno: scrive gli attributi sugli elementi SVG senza passare da React,
     altrimenti sarebbe un re-render per fotogramma. */
  const draw = useCallback(
    (x: Float64Array, y: Float64Array) => {
      for (let i = 0; i < linkRefs.current.length; i += 1) {
        const line = linkRefs.current[i];
        if (!line) continue;
        const { a, b } = simLinks[i];
        line.setAttribute('x1', x[a].toFixed(1));
        line.setAttribute('y1', y[a].toFixed(1));
        line.setAttribute('x2', x[b].toFixed(1));
        line.setAttribute('y2', y[b].toFixed(1));
      }
      for (let i = 0; i < nodeRefs.current.length; i += 1) {
        const group = nodeRefs.current[i];
        if (!group) continue;
        group.setAttribute('transform', `translate(${x[i].toFixed(1)} ${y[i].toFixed(1)})`);
      }
    },
    [simLinks]
  );

  const { reset, start, stop } = useForceSimulation({
    nodes: simNodes,
    links: simLinks,
    onFrame: draw,
    still: prefersReducedMotion,
  });

  /* Tela quasi quadrata di proposito. Una simulazione a forze si dispone in un
     disco, il cui diametro è limitato dal lato corto: su un riquadro largo il
     doppio dell'altezza restano per forza due fasce vuote ai lati. */
  const height = width === 0 ? 0 : Math.round(Math.min(Math.max(width * 0.85, 280), 560));

  /* Il viewBox segue i pixel reali del contenitore invece di scalare: con un
     viewBox fisso, a 320px di larghezza le etichette scenderebbero sotto i
     5px. Così restano della stessa dimensione a ogni larghezza. */
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;

    const observer = new ResizeObserver(([entry]) => {
      setWidth(Math.round(entry.contentRect.width));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (width === 0 || height === 0) return;
    reset(width, height);
  }, [width, height, reset]);

  /* La simulazione gira solo quando il grafo è in vista: fuori schermo
     sarebbe consumo di batteria a fondo perduto. */
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || width === 0 || prefersReducedMotion) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    observer.observe(el);

    const onVisibility = () => (document.hidden ? stop() : undefined);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      stop();
    };
  }, [width, prefersReducedMotion, start, stop]);

  const labelFor = (index: number) => {
    const node = nodes[index];
    return language === 'it' ? node.it : node.en;
  };

  const isDimmed = (index: number) =>
    active !== null && active !== index && !neighbours[active].has(index);

  const named = nodes
    .map((node, index) => ({ node, index }))
    .filter(({ node }) => node.kind !== 'dot');

  return (
    <div ref={wrapRef} className="company-brain">
      {width > 0 && (
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          role="img"
          aria-labelledby="brain-graph-title"
          className="company-brain__svg"
          data-active={active !== null}
        >
          <title id="brain-graph-title">
            {language === 'it'
              ? 'Grafo dei sistemi e dei dati aziendali collegati fra loro attorno a un nucleo comune'
              : 'Graph of company systems and data connected around a shared core'}
          </title>

          <g className="company-brain__links">
            {simLinks.map((link, i) => (
              <line
                key={`${link.a}-${link.b}`}
                ref={(el) => {
                  linkRefs.current[i] = el;
                }}
                className={
                  active !== null && (link.a === active || link.b === active)
                    ? 'is-active'
                    : isDimmed(link.a) || isDimmed(link.b)
                      ? 'is-dimmed'
                      : ''
                }
              />
            ))}
          </g>

          <g className="company-brain__nodes">
            {nodes.map((node, i) => {
              const style = NODE_STYLE[node.kind];
              const label = labelFor(i);
              const isNear = active !== null && (active === i || neighbours[active].has(i));
              const showLabel = Boolean(label) && (ALWAYS_LABELLED.includes(node.kind) || isNear);

              return (
                <g
                  key={node.id}
                  ref={(el) => {
                    nodeRefs.current[i] = el;
                  }}
                  className={`company-brain__node is-${node.kind} ${isDimmed(i) ? 'is-dimmed' : ''} ${active === i ? 'is-active' : ''}`}
                  onPointerEnter={() => setActive(i)}
                  onPointerLeave={() => setActive(null)}
                >
                  {/* Bersaglio invisibile più largo del pallino: i punti da 2px
                      sarebbero impossibili da centrare, sul touch soprattutto. */}
                  <circle r={Math.max(style.radius + 9, 16)} className="company-brain__hit" />
                  <circle r={style.radius} className="company-brain__dot" />
                  {showLabel && (
                    <text
                      className="company-brain__label"
                      x={style.radius + 6}
                      y={3.5}
                    >
                      {label}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        </svg>
      )}

      {/* Lo stesso contenuto in testo: il grafo è un'immagine, e chi usa un
          lettore di schermo deve poter leggere cosa contiene. */}
      <ul className="company-brain__sr">
        {named.map(({ node, index }) => (
          <li key={node.id}>{labelFor(index)}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyBrainGraph;
