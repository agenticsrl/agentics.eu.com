import React, { Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Section from './layout/Section';
import SectionHeader from './layout/SectionHeader';
import SpecList, { type SpecItem } from './layout/SpecList';
import SpecGrid from './layout/SpecGrid';

/* La simulazione a forze e il suo foglio di stile stanno in un modulo a parte,
   caricato quando la sezione entra in pagina. */
const CompanyBrainGraph = lazy(() => import('./company-brain/CompanyBrainGraph'));

/* Sagoma dell'edificio: PNG trasparente convertito in WebP (1,6 MB -> 126 KB). */
const TOWER_IMAGE_SRC = '/tower.webp';
const TOWER_WIDTH = 760;
const TOWER_HEIGHT = 1140;

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

const Company: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const offerings: readonly SpecItem[] = [
    { term: t('company.offering1.title'), description: t('company.offering1.description') },
    { term: t('company.offering3.title'), description: t('company.offering3.description') },
    { term: t('company.offering5.title'), description: t('company.offering5.description') },
  ];

  const capabilities: readonly SpecItem[] = [
    { term: t('hero.capability1'), description: t('company.capability1.description') },
    { term: t('hero.capability2'), description: t('company.capability2.description') },
    { term: t('hero.capability3'), description: t('company.capability3.description') },
    { term: t('hero.capability4'), description: t('company.capability4.description') },
  ];

  const goToSoftwarePage = () => {
    navigate('/services/software-personalizzato');
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      {/* Tipologia: blocco a due colonne con elemento grafico */}
      <Section labelledBy="company-title">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-lg lg:gap-xl lg:items-center">
          <div>
            <SectionHeader
              label={t('company.label')}
              title={t('company.heroTitle')}
              titleId="company-title"
            />
            <div className="max-w-[68ch] space-y-md">
              <p className="text-body-muted">{t('company.heroText1')}</p>
              <p className="text-body-muted">{t('company.heroText2')}</p>
            </div>
            <div className="mt-xl">
              <button type="button" onClick={scrollToContact} className="btn-primary">
                {t('company.cta')}
              </button>
            </div>
          </div>

          {/* Sagoma ritagliata su fondo trasparente, resa in scala di grigi
              per stare nella palette. Dimensioni dichiarate: nessuno
              spostamento di layout al caricamento. */}
          <img
            src={TOWER_IMAGE_SRC}
            alt=""
            width={TOWER_WIDTH}
            height={TOWER_HEIGHT}
            loading="lazy"
            decoding="async"
            className="w-full max-w-[200px] lg:max-w-none h-auto mx-auto grayscale"
          />
        </div>
      </Section>

      {/* Tipologia: elenco descrittivo. Ritmo ridotto come la griglia che
          segue: i due blocchi si leggono in sequenza e a ritmo pieno fra i
          due restavano 224px di vuoto. */}
      <Section id="solutions" labelledBy="solutions-title" tight>
        <SectionHeader title={t('company.solutionsTitle')} titleId="solutions-title" />
        <SpecList items={offerings} />
      </Section>

      {/* Tipologia: griglia descrittiva a celle. Deliberatamente diversa
          dall'elenco a righe della sezione precedente: due elenchi identici
          di fila si leggevano come una ripetizione. Ritmo ridotto, perché i
          due blocchi vanno letti insieme. */}
      <Section labelledBy="capabilities-title" tight>
        <SectionHeader
          label={t('company.capabilitiesLabel')}
          title={t('company.capabilitiesTitle')}
          titleId="capabilities-title"
        />
        <SpecGrid items={capabilities} />

        {/* Grafo dei sistemi aziendali: rende visibile l'idea di un unico
            giacimento di dati collegato, che le voci qui sopra descrivono
            a parole. Caricato su richiesta: la simulazione non serve a chi
            non arriva fin qui. */}
        {/* Due colonne: il grafo vuole una tela quasi quadrata, e la larghezza
            che resta la prende il testo invece di restare vuota. */}
        <div className="mt-xl border-t border-line pt-lg grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-lg lg:gap-xl lg:items-center">
          <div>
            <p className="label mb-xs">{t('company.brainLabel')}</p>
            <p className="text-body-muted max-w-[46ch]">{t('company.brainText')}</p>
          </div>
          <Suspense fallback={<div className="aspect-[1/0.85]" />}>
            <CompanyBrainGraph />
          </Suspense>
        </div>
      </Section>

      {/* Tipologia: blocco a due colonne */}
      <Section labelledBy="custom-software-title">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-lg lg:gap-xl">
          <SectionHeader
            label={t('company.label')}
            title={t('features.customGPTs.title')}
            titleId="custom-software-title"
          />
          <div className="space-y-md">
            <p className="text-body-muted">{t('features.customGPTs.extendedDesc1')}</p>
            <p className="text-body-muted">{t('features.customGPTs.extendedDesc2')}</p>
            <p className="text-body-muted">{t('features.customGPTs.extendedDesc3')}</p>
            {/* Pieno e non contornato: il bordo #333 su fondo #0A0A0A dava un
                contrasto di 1,6:1 e il tasto passava inosservato. */}
            <div className="pt-sm">
              <button type="button" onClick={goToSoftwarePage} className="btn-primary">
                {t('company.learnMore')}
              </button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Company;
