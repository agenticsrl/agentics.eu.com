import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  /** Collega la sezione al suo titolo per i lettori di schermo. */
  labelledBy?: string;
  /** Filetto di separazione in testa alla sezione. Attivo per default: è ciò che rende leggibile il ritmo. */
  divided?: boolean;
  /** Ritmo verticale ridotto, per una sezione da leggere insieme alla precedente. */
  tight?: boolean;
  /**
   * Livello grafico a tutta larghezza dietro il contenuto: immagine di fondo,
   * velatura. Sta qui e non nei figli perché deve uscire dal contenitore di
   * testo e arrivare ai bordi della pagina.
   */
  background?: React.ReactNode;
}

/**
 * Involucro unico di ogni sezione del sito: impone la stessa larghezza di
 * contenuto e lo stesso ritmo verticale. Nessuna sezione deve definire
 * container o padding propri, così l'impianto non può divergere.
 */
const Section: React.FC<SectionProps> = ({
  children,
  id,
  labelledBy,
  divided = true,
  tight = false,
  background,
}) => (
  <section
    id={id}
    aria-labelledby={labelledBy}
    className={`${tight ? 'section-tight' : 'section'} ${divided ? 'section-divided' : ''} ${
      background ? 'relative overflow-hidden' : ''
    }`}
  >
    {background}
    <div className={`container-content ${background ? 'relative' : ''}`}>{children}</div>
  </section>
);

export default Section;
