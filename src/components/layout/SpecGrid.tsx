import React from 'react';
import { type SpecItem } from './SpecList';

interface SpecGridProps {
  items: readonly SpecItem[];
  /** Numerazione progressiva, in stile scheda tecnica. */
  numbered?: boolean;
}

/**
 * Variante a celle dell'elenco descrittivo: stessi contenuti di SpecList, ma
 * disposti su due colonne in una griglia di filetti.
 *
 * Serve a rompere la ripetizione: quando due elenchi si susseguono, il secondo
 * a righe piene a tutta larghezza dà l'impressione di rileggere il primo, e
 * lascia mezza riga vuota per ogni voce breve.
 */
const SpecGrid: React.FC<SpecGridProps> = ({ items, numbered = true }) => {
  /* Con una parte delle voci nascosta su telefono la numerazione resterebbe
     monca — un «04» solo, senza il 01 che lo precede. Dove questo accade il
     numero compare solo da desktop, dove la serie è di nuovo completa. */
  const hasHiddenItems = items.some((item) => item.desktopOnly);

  return (
    <dl className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-line">
      {items.map((item, index) => (
        <div
          key={item.term}
          className={`border-r border-b border-line p-lg ${
            item.desktopOnly ? 'hidden lg:block' : ''
          }`}
        >
          <dt className="title-block flex items-baseline gap-md">
            {numbered && (
              <span
                className={`label tabular-nums shrink-0 ${
                  hasHiddenItems ? 'hidden lg:inline' : ''
                }`}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            )}
            <span>{item.term}</span>
          </dt>
          <dd className="text-body-muted mt-sm">{item.description}</dd>
        </div>
      ))}
    </dl>
  );
};

export default SpecGrid;
