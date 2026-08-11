import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Section from './layout/Section';
import SectionHeader from './layout/SectionHeader';

const tiers = [
  { value: '180%', label: 'fiscal.tier1' as const },
  { value: '100%', label: 'fiscal.tier2' as const },
  { value: '50%', label: 'fiscal.tier3' as const },
];

const solutions = [
  'fiscal.solution1',
  'fiscal.solution2',
  'fiscal.solution3',
  'fiscal.solution4',
  'fiscal.solution5',
] as const;

/** Sezione dedicata alle agevolazioni fiscali italiane: mostrata solo in italiano. */
const FiscalIncentives: React.FC = () => {
  const { language, t } = useLanguage();

  if (language !== 'it') return null;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section labelledBy="fiscal-title">
      <SectionHeader
        label={t('fiscal.badge')}
        title={t('fiscal.title')}
        titleId="fiscal-title"
        lead={t('fiscal.intro')}
      />

      {/* Aliquote e loro spiegazione in un unico blocco incorniciato.
          L'aliquota viene prima ed è grande: è il dato che conta. Prima
          l'etichetta da 11px occupava due righe sopra un numero più piccolo
          di lei, e la scala risultava rovesciata. */}
      <div className="border border-line mb-xl">
        <dl className="grid grid-cols-1 sm:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={tier.value}
              className={`p-lg ${index > 0 ? 'border-t sm:border-t-0 sm:border-l border-line' : ''}`}
            >
              <dd className="font-display font-semibold text-h1 lg:text-h1-lg text-ink tabular-nums leading-none">
                {tier.value}
              </dd>
              <dt className="label mt-sm">{t(tier.label)}</dt>
            </div>
          ))}
        </dl>
        {/* L'esempio numerico spiega le aliquote qui sopra: sta nella stessa
            cornice invece che in un pannello separato a 48px di distanza.
            Il filetto sta sul contenitore, non sul paragrafo: la misura di
            lettura limitata al testo lasciava la riga interrotta a metà. */}
        <div className="border-t border-line p-lg">
          <p className="text-body-muted max-w-[86ch]">{t('fiscal.example')}</p>
        </div>
      </div>

      <h3 className="title-block mb-md">{t('fiscal.solutionsTitle')}</h3>
      {/* Due colonne su schermo largo: cinque righe a tutta larghezza
          lasciavano metà riga vuota e allungavano la sezione senza motivo.
          Le colonne sono divise da un filetto verticale invece che da uno
          spazio: così i filetti orizzontali si toccano al centro. */}
      <ul className="grid grid-cols-1 md:grid-cols-2 border-t border-line mb-xl">
        {solutions.map((key, index) => (
          <li
            key={key}
            className={`text-body-muted py-sm border-b border-line ${
              index % 2 === 0 ? 'md:pr-lg' : 'md:border-l md:pl-lg'
            }`}
          >
            {t(key)}
          </li>
        ))}
        {/* Voci dispari: senza cella di riempimento l'ultima riga resterebbe
            aperta sulla colonna destra. */}
        {solutions.length % 2 === 1 && (
          <li aria-hidden className="hidden md:block border-b border-l border-line" />
        )}
      </ul>

      {/* Chiusura compatta: nota, riferimento di legge e invito all'azione
          affiancati, invece di quattro blocchi in colonna a 48px l'uno
          dall'altro. */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-lg lg:gap-xl lg:items-start">
        <div className="space-y-sm max-w-[68ch]">
          <p className="text-meta text-inkMuted border-l-2 border-line pl-md">
            {t('fiscal.solutionsFooter')}
          </p>
          <p className="text-meta text-inkFaint pl-md">{t('fiscal.reference')}</p>
        </div>
        <button
          type="button"
          onClick={scrollToContact}
          className="btn-primary justify-self-start lg:justify-self-end"
        >
          {t('fiscal.ctaBottom')}
        </button>
      </div>
    </Section>
  );
};

export default FiscalIncentives;
