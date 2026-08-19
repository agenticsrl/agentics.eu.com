import React, { Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useMediaQuery } from '../hooks/useMediaQuery';
import Section from './layout/Section';
import SectionHeader from './layout/SectionHeader';
import SpecList, { type SpecItem } from './layout/SpecList';
import SpecGrid from './layout/SpecGrid';

/* La simulazione a forze e il suo foglio di stile stanno in un modulo a parte,
   caricato quando la sezione entra in pagina. */
const CompanyBrainGraph = lazy(() => import('./company-brain/CompanyBrainGraph'));

/* Sagoma dell'edificio: PNG trasparente convertito in WebP (1,6 MB -> 126 KB).
   Due tagli dello stesso file: il browser sceglie in base alla larghezza
   effettiva e alla densita' dello schermo, cosi' su retina la facciata non
   viene ingrandita oltre la sua misura e resta pulita. */
const TOWER_IMAGE_SRC = '/tower.webp';
const TOWER_IMAGE_SRCSET = '/tower.webp 760w, /tower-1216.webp 1216w';
const TOWER_WIDTH = 760;
const TOWER_HEIGHT = 1140;
/* Coincide con il breakpoint lg di Tailwind: sopra c'è la colonna, sotto lo sfondo. */
const TOWER_DESKTOP_QUERY = '(min-width: 1024px)';

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

const Company: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  /* Le due collocazioni della torre sono alternative, e la scelta va fatta qui e
     non con `lg:hidden`: due <img> con srcset diversi si portano a casa due file
     invece di uno. In pagina ne esiste sempre una sola. */
  const isDesktopTower = useMediaQuery(TOWER_DESKTOP_QUERY);

  const offerings: readonly SpecItem[] = [
    { term: t('company.offering1.title'), description: t('company.offering1.description') },
    { term: t('company.offering3.title'), description: t('company.offering3.description') },
    { term: t('company.offering5.title'), description: t('company.offering5.description') },
  ];

  /* Su telefono resta la sola voce sui sistemi AI e LLM, che è quella che
     regge il blocco Company brain qui sotto: le altre tre sono approfondimento
     da scrivania e allungavano la sezione senza aggiungere il punto. */
  const capabilities: readonly SpecItem[] = [
    {
      term: t('hero.capability1'),
      description: t('company.capability1.description'),
      desktopOnly: true,
    },
    {
      term: t('hero.capability2'),
      description: t('company.capability2.description'),
      desktopOnly: true,
    },
    {
      term: t('hero.capability3'),
      description: t('company.capability3.description'),
      desktopOnly: true,
    },
    { term: t('hero.capability4'), description: t('company.capability4.description') },
  ];

  const goToSoftwarePage = () => {
    navigate('/services/software-personalizzato');
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      {/* Tipologia: blocco di testo con l'edificio accanto.
          Due trattamenti, uno per famiglia di schermi. Fino a tablet la
          sagoma sta sul fianco destro, dietro il testo; da lg torna in colonna
          propria, piena e senza velatura sopra — lì la larghezza c'è, e il
          grattacielo si deve vedere per quello che è. */}
      <Section
        labelledBy="company-title"
        background={
          isDesktopTower ? undefined : (
            <div className="absolute inset-0" aria-hidden="true">
              {/* Ancorata a destra e alta quanto la sezione, con la larghezza che
                  segue le proporzioni: a tutta pagina il file veniva ingrandito
                  due o tre volte e la facciata si sgranava. Così resta dentro la
                  sua misura, più piccolo e nitido. */}
              <img
                src={TOWER_IMAGE_SRC}
                srcSet={TOWER_IMAGE_SRCSET}
                sizes="(min-width: 640px) 42vw, 46vw"
                alt=""
                width={TOWER_WIDTH}
                height={TOWER_HEIGHT}
                loading="lazy"
                decoding="async"
                className="fade-bottom absolute inset-y-0 right-0 h-full w-auto max-w-[46%] sm:max-w-[54%] object-cover object-[62%_30%] grayscale brightness-[0.26]"
              />
              {/* Scrim orizzontale: pieno sotto la colonna di testo, si apre solo
                  sul fianco dove sta l'edificio. Fino a lg il testo occupa
                  tutta la riga e passa sopra la sagoma, quindi la velatura resta
                  chiusa e l'edificio sta sotto, a fondale: la leggibilità del
                  paragrafo viene prima della vetrata. */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A0A0A_0%,#0A0A0A_48%,rgba(10,10,10,0.94)_68%,rgba(10,10,10,0.8)_88%,rgba(10,10,10,0.66)_100%)]" />
            </div>
          )
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-lg lg:gap-xl lg:items-center">
          <div>
            <SectionHeader
              label={t('company.label')}
              title={t('company.heroTitle')}
              titleId="company-title"
            />
            <div className="max-w-[62ch] space-y-md">
              <p className="text-body-muted">{t('company.heroText1')}</p>
              <p className="text-body-muted">{t('company.heroText2')}</p>
            </div>
            <div className="mt-xl">
              <button type="button" onClick={scrollToContact} className="btn-primary">
                {t('company.cta')}
              </button>
            </div>
          </div>

          {/* Solo da lg: sotto quel breakpoint l'edificio sta già nello sfondo
              della sezione. */}
          {isDesktopTower && (
            <img
              src={TOWER_IMAGE_SRC}
              srcSet={TOWER_IMAGE_SRCSET}
              sizes="(min-width: 1216px) 400px, 37vw"
              alt=""
              width={TOWER_WIDTH}
              height={TOWER_HEIGHT}
              loading="lazy"
              decoding="async"
              className="fade-bottom w-full h-auto grayscale"
            />
          )}
        </div>
      </Section>

      {/* Tipologia: elenco descrittivo. Ritmo ridotto come la griglia che
          segue: i due blocchi si leggono in sequenza e a ritmo pieno fra i
          due restavano 224px di vuoto. */}
      <Section id="solutions" labelledBy="solutions-title" tight divided={false}>
        <SectionHeader title={t('company.solutionsTitle')} titleId="solutions-title" />
        <SpecList items={offerings} />
      </Section>

      {/* Tipologia: griglia descrittiva a celle. Deliberatamente diversa
          dall'elenco a righe della sezione precedente: due elenchi identici
          di fila si leggevano come una ripetizione. Ritmo ridotto, perché i
          due blocchi vanno letti insieme. */}
      <Section labelledBy="capabilities-title" tight divided={false}>
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
            label={t('company.softwareLabel')}
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
