import React from 'react';

export interface SpecItem {
  term: string;
  description: string;
  /**
   * Voce di approfondimento: resta nel documento ma non viene mostrata sotto
   * il breakpoint desktop. Onorata da SpecGrid; SpecList la ignora.
   */
  desktopOnly?: boolean;
}

interface SpecListProps {
  items: readonly SpecItem[];
  /** Numerazione progressiva, in stile scheda tecnica. */
  numbered?: boolean;
}

/**
 * Elenco descrittivo a righe separate da filetto: la tipologia usata per
 * capacità, servizi e caratteristiche. Sostituisce le card con icona,
 * così i contenuti di questo tipo hanno tutti la stessa impaginazione.
 */
const SpecList: React.FC<SpecListProps> = ({ items, numbered = true }) => (
  <dl className="border-t border-line">
    {items.map((item, index) => (
      <div
        key={item.term}
        className="grid grid-cols-1 md:grid-cols-[19rem_1fr] gap-xs md:gap-md py-md border-b border-line"
      >
        <dt className="title-block flex items-baseline gap-md">
          {numbered && (
            <span className="label tabular-nums shrink-0">
              {String(index + 1).padStart(2, '0')}
            </span>
          )}
          <span>{item.term}</span>
        </dt>
        <dd className="text-body-muted">{item.description}</dd>
      </div>
    ))}
  </dl>
);

export default SpecList;
