import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface ScrollableXProps {
  children: React.ReactNode;
  /** Nome della regione per chi naviga con lettore di schermo. */
  label: string;
  className?: string;
  /**
   * Colore da cui parte la sfumatura sul bordo destro: deve essere il fondo
   * del contenuto, non quello della pagina. Il cruscotto d'esempio è bianco,
   * e una sfumatura scura sopra il bianco sembrerebbe una macchia.
   */
  fadeFrom?: string;
}

/**
 * Contenitore per contenuti più larghi dello schermo: tabelle dei testi legali,
 * cruscotto d'esempio. Su telefono buona parte del contenuto resta fuori vista
 * e senza un segnale non si capisce che si può scorrere.
 *
 * Fa tre cose che un semplice `overflow-x-auto` non fa:
 * - mostra la nota "scorri" solo quando il contenuto sporge davvero, e la
 *   ritira al primo scorrimento;
 * - sfuma il bordo destro finché c'è altro da vedere;
 * - rende la regione raggiungibile da tastiera (tabIndex), altrimenti chi non
 *   usa il puntatore non può scorrerla.
 */
const ScrollableX: React.FC<ScrollableXProps> = ({
  children,
  label,
  className = '',
  fadeFrom = 'from-canvas',
}) => {
  const { language } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [overflows, setOverflows] = useState(false);
  const [atEnd, setAtEnd] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const slack = el.scrollWidth - el.clientWidth;
    setOverflows(slack > 1);
    setAtEnd(slack > 1 && el.scrollLeft >= slack - 1);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    // Il contenuto può cambiare larghezza dopo il caricamento di font o loghi.
    Array.from(el.children).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [measure]);

  const handleScroll = () => {
    setHasScrolled(true);
    measure();
  };

  const showHint = overflows && !hasScrolled;

  return (
    <div>
      {/* La nota sta sopra il contenuto: sotto un blocco alto come il cruscotto
          la si leggerebbe solo dopo averlo scorso tutto, quando non serve più.
          Sta fuori da `className`, così la cornice di chi ci chiama racchiude
          il contenuto e non anche l'avviso. */}
      {showHint && (
        <p className="label mb-xs lg:hidden" aria-hidden="true">
          {language === 'it' ? 'Scorri per vedere tutto →' : 'Scroll to see all →'}
        </p>
      )}

      <div className={`relative ${className}`}>
        <div
          ref={ref}
          onScroll={handleScroll}
          role="region"
          aria-label={label}
          tabIndex={0}
          className="overflow-x-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink"
        >
          {children}
        </div>

        {/* Sfumatura sul bordo: si ritira quando non c'è più niente a destra.
            aria-hidden perché è puro segnale visivo. */}
        {overflows && !atEnd && (
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l ${fadeFrom} to-transparent`}
          />
        )}
      </div>
    </div>
  );
};

export default ScrollableX;
