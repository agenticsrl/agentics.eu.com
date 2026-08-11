import { useCallback, useEffect, useRef } from 'react';

export interface SimNode {
  /** Raggio del pallino: entra nel contenimento ai bordi. */
  radius: number;
  /**
   * Carica di repulsione, normalizzata attorno a 1: i nodi grandi spingono via
   * più forte. Valori assoluti alti saturerebbero il limite di velocità e la
   * simulazione diventerebbe caotica invece che ordinata.
   */
  charge: number;
  /** Moltiplicatore del richiamo al centro. Alto sul nucleo, che deve stare in mezzo. */
  anchor?: number;
}

export interface SimLink {
  a: number;
  b: number;
  /** Lunghezza a riposo della molla. */
  length: number;
}

interface Options {
  nodes: readonly SimNode[];
  links: readonly SimLink[];
  /** Chiamata a ogni fotogramma con le posizioni aggiornate. */
  onFrame: (x: Float64Array, y: Float64Array) => void;
  /** Ferma la simulazione e disegna un solo assetto stabile. */
  still?: boolean;
}

/* Parametri della fisica. Le forze sono normalizzate sulla spaziatura
   caratteristica k = sqrt(area / numero di nodi): così il grafo riempie lo
   spazio che ha, invece di accartocciarsi al centro sulle tele larghe. */
/* Con smorzamento 0.86 una forza costante f porta a velocità f/(1-0.86) ≈ 7f:
   le forze vanno tenute sui centesimi, o il limite di velocità satura e il
   grafo si disperde invece di organizzarsi. */
const DAMPING = 0.86;
const REPULSION = 0.032;
const SPRING = 0.0045;
/* Richiamo al centro espresso sullo scostamento *relativo* alla metà della
   tela, non in pixel: così la nuvola all'equilibrio prende le proporzioni del
   riquadro. Con un richiamo in pixel formava sempre un disco, e su una tela
   larga restavano due fasce vuote ai lati. */
const CENTER_PULL = 0.13;
const WANDER = 0.012;
const MAX_SPEED = 0.9;
/* Oltre tre volte la spaziatura la repulsione è trascurabile: risparmia coppie. */
const CUTOFF_IN_K = 3;
/* Spaziatura per cui sono state tarate le lunghezze di riposo dei collegamenti. */
const REFERENCE_K = 62;
const WARMUP_STEPS = 420;
const EDGE_PADDING = 6;

/** Generatore pseudo-casuale deterministico: l'assetto iniziale è sempre lo stesso. */
const makeRandom = (seed: number) => {
  let state = seed;
  return () => {
    state = (state * 1103515245 + 12345) & 0x7fffffff;
    return state / 0x7fffffff;
  };
};

/**
 * Simulazione a forze in stile grafo di Obsidian: repulsione fra tutti i nodi,
 * molle sui collegamenti, richiamo al centro e una deriva minima che impedisce
 * al sistema di congelarsi.
 *
 * Le posizioni vivono in Float64Array mutabili e non nello stato di React:
 * a 60 fotogrammi al secondo un re-render per fotogramma sarebbe insostenibile.
 * Il disegno avviene scrivendo gli attributi direttamente sugli elementi SVG.
 */
export const useForceSimulation = ({ nodes, links, onFrame, still = false }: Options) => {
  const x = useRef(new Float64Array(nodes.length));
  const y = useRef(new Float64Array(nodes.length));
  const vx = useRef(new Float64Array(nodes.length));
  const vy = useRef(new Float64Array(nodes.length));
  const size = useRef({ w: 0, h: 0 });
  /** Spaziatura caratteristica e fattore di scala delle molle. */
  const metrics = useRef({ k: REFERENCE_K, linkScale: 1 });
  const frame = useRef<number>(0);
  const running = useRef(false);
  const onFrameRef = useRef(onFrame);
  onFrameRef.current = onFrame;

  /** Un passo di integrazione. Muta gli array: è il punto caldo del ciclo. */
  const step = useCallback(() => {
    const n = nodes.length;
    const px = x.current;
    const py = y.current;
    const pvx = vx.current;
    const pvy = vy.current;
    const { w, h } = size.current;
    const { k, linkScale } = metrics.current;
    const cx = w / 2;
    const cy = h / 2;
    const cutoff2 = (k * CUTOFF_IN_K) ** 2;

    // Repulsione fra coppie, con taglio oltre la distanza in cui è trascurabile.
    // La forza vale REPULSION alla distanza k e cresce col quadrato avvicinandosi.
    for (let i = 0; i < n; i += 1) {
      for (let j = i + 1; j < n; j += 1) {
        const dx = px[j] - px[i];
        const dy = py[j] - py[i];
        const d2 = dx * dx + dy * dy;
        if (d2 > cutoff2) continue;
        const d = Math.sqrt(d2) || 0.5;
        const ratio = k / d;
        const force = REPULSION * ratio * ratio * nodes[i].charge * nodes[j].charge;
        const fx = (dx / d) * force;
        const fy = (dy / d) * force;
        pvx[i] -= fx;
        pvy[i] -= fy;
        pvx[j] += fx;
        pvy[j] += fy;
      }
    }

    // Molle sui collegamenti, con lunghezza di riposo scalata sulla tela.
    for (let l = 0; l < links.length; l += 1) {
      const { a, b, length } = links[l];
      const dx = px[b] - px[a];
      const dy = py[b] - py[a];
      const d = Math.hypot(dx, dy) || 0.5;
      const pull = (d - length * linkScale) * SPRING;
      const fx = (dx / d) * pull;
      const fy = (dy / d) * pull;
      pvx[a] += fx;
      pvy[a] += fy;
      pvx[b] -= fx;
      pvy[b] -= fy;
    }

    for (let i = 0; i < n; i += 1) {
      // Richiamo al centro: tiene insieme il grafo. Il nucleo lo sente molto
      // più forte, così resta al centro invece di finire in un angolo.
      const pull = CENTER_PULL * (nodes[i].anchor ?? 1);
      pvx[i] += ((cx - px[i]) / cx) * pull;
      pvy[i] += ((cy - py[i]) / cy) * pull;

      // Deriva: senza, lo smorzamento porterebbe tutto all'immobilità.
      pvx[i] += (Math.random() - 0.5) * WANDER;
      pvy[i] += (Math.random() - 0.5) * WANDER;

      pvx[i] *= DAMPING;
      pvy[i] *= DAMPING;

      const speed = Math.hypot(pvx[i], pvy[i]);
      if (speed > MAX_SPEED) {
        pvx[i] = (pvx[i] / speed) * MAX_SPEED;
        pvy[i] = (pvy[i] / speed) * MAX_SPEED;
      }

      px[i] += pvx[i];
      py[i] += pvy[i];

      // Contenimento morbido ai bordi: il pallino non esce dal riquadro.
      const margin = nodes[i].radius + EDGE_PADDING;
      if (px[i] < margin) {
        px[i] = margin;
        pvx[i] = Math.abs(pvx[i]) * 0.4;
      } else if (px[i] > w - margin) {
        px[i] = w - margin;
        pvx[i] = -Math.abs(pvx[i]) * 0.4;
      }
      if (py[i] < margin) {
        py[i] = margin;
        pvy[i] = Math.abs(pvy[i]) * 0.4;
      } else if (py[i] > h - margin) {
        py[i] = h - margin;
        pvy[i] = -Math.abs(pvy[i]) * 0.4;
      }
    }
  }, [nodes, links]);

  /** Dispone i nodi e li fa assestare prima del primo disegno. */
  const reset = useCallback(
    (w: number, h: number) => {
      size.current = { w, h };
      const n = nodes.length;
      // Spaziatura caratteristica: la distanza media disponibile per nodo.
      const k = Math.sqrt((w * h) / n);
      metrics.current = { k, linkScale: k / REFERENCE_K };

      const random = makeRandom(20260811);
      const spread = Math.min(w, h) * 0.42;

      for (let i = 0; i < n; i += 1) {
        // Partenza su un disco attorno al centro: evita l'effetto "esplosione".
        const angle = random() * Math.PI * 2;
        const radius = Math.sqrt(random()) * spread;
        x.current[i] = w / 2 + Math.cos(angle) * radius;
        y.current[i] = h / 2 + Math.sin(angle) * radius;
        vx.current[i] = 0;
        vy.current[i] = 0;
      }

      // Assestamento a monte: il grafo appare già ordinato, non in formazione.
      for (let s = 0; s < WARMUP_STEPS; s += 1) step();
      onFrameRef.current(x.current, y.current);
    },
    [nodes.length, step]
  );

  const start = useCallback(() => {
    if (running.current || still) return;
    running.current = true;
    const loop = () => {
      if (!running.current) return;
      step();
      onFrameRef.current(x.current, y.current);
      frame.current = window.requestAnimationFrame(loop);
    };
    frame.current = window.requestAnimationFrame(loop);
  }, [step, still]);

  const stop = useCallback(() => {
    running.current = false;
    window.cancelAnimationFrame(frame.current);
  }, []);

  useEffect(() => stop, [stop]);

  return { reset, start, stop };
};
