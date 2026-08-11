import React from 'react';

interface SectionHeaderProps {
  /** Micro-etichetta sopra il titolo (occhiello). */
  label?: string;
  title: string;
  /** Id del titolo, per collegarlo alla sezione via aria-labelledby. */
  titleId?: string;
  /** Testo introduttivo su colonna stretta. */
  lead?: string;
  /** `h1` sulla prima intestazione della pagina, `h2` altrove. */
  as?: 'h1' | 'h2';
}

/**
 * Intestazione di sezione: occhiello, titolo, testo introduttivo.
 * Sempre allineata a sinistra e con la stessa spaziatura, in modo che
 * tutte le sezioni aprano nello stesso modo.
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  titleId,
  lead,
  as = 'h2',
}) => {
  const Heading = as;

  return (
    <header className="mb-xl">
      {label && <p className="label mb-md">{label}</p>}
      <Heading id={titleId} className={as === 'h1' ? 'title-page' : 'title-section'}>
        {title}
      </Heading>
      {lead && <p className="text-lead mt-md max-w-[62ch]">{lead}</p>}
    </header>
  );
};

export default SectionHeader;
