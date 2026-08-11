import React, { useEffect, useState } from 'react';
import FoldText from './FoldText';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

/**
 * Tempo di permanenza di ogni parola. L'apertura dura circa un secondo:
 * un intervallo più lungo tiene la parola leggibile per la maggior parte
 * del ciclo, invece di farla lampeggiare.
 */
const WORD_INTERVAL_MS = 3800;

/**
 * Parole sempre in inglese, in entrambe le lingue del sito: sono termini
 * di marca e non vanno tradotti.
 */
export const ROTATING_WORDS = ['Software', 'Solutions', 'Operations', 'Consulting'] as const;

interface RotatingFoldTextProps {
  words?: readonly string[];
  intervalMs?: number;
}

/**
 * Parola che cambia a rotazione con l'effetto di apertura a pannelli.
 * Tutte le parole sono impilate nella stessa cella di griglia: la cella prende
 * la larghezza della più larga, così il cambio non sposta il testo e la riga
 * non va mai a capo.
 */
const RotatingFoldText: React.FC<RotatingFoldTextProps> = ({
  words = ROTATING_WORDS,
  intervalMs = WORD_INTERVAL_MS,
}) => {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || words.length < 2) return undefined;

    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % words.length),
      intervalMs
    );
    return () => window.clearInterval(timer);
  }, [words.length, intervalMs, prefersReducedMotion]);

  const activeWord = words[index] ?? words[0];

  return (
    <span className="relative inline-grid align-baseline" aria-hidden="true">
      {/* Sagome invisibili: riservano la larghezza della parola più larga.
          Contate tutte, non solo quella con più lettere, e con le lettere
          spezzate in inline-block come le rende FoldText: il testo normale
          misurerebbe qualche pixel in meno e la larghezza riservata
          cambierebbe a ogni parola. */}
      {words.map((word) => (
        <span key={word} className="col-start-1 row-start-1 invisible whitespace-nowrap">
          {Array.from(word).map((char, charIndex) => (
            <span key={`${word}-${charIndex}`} className="inline-block">
              {char}
            </span>
          ))}
        </span>
      ))}
      <span className="col-start-1 row-start-1 whitespace-nowrap">
        <FoldText
          key={activeWord}
          text={activeWord}
          splitBy="char"
          hinge="top"
          trigger="mount"
          duration={0.55}
          stagger={0.035}
          ease="power3.out"
          perspective={700}
          creaseShading={0.5}
          fontSize="inherit"
          fontWeight="inherit"
          color="currentColor"
        />
      </span>
    </span>
  );
};

export default RotatingFoldText;
