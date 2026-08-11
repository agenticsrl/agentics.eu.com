import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useMediaQuery } from '../hooks/useMediaQuery';
import RotatingFoldText from './ui/RotatingFoldText';
import Section from './layout/Section';

/** Girato originale in orizzontale: il velivolo è ripreso di profilo e occupa
 *  il 93% della larghezza del quadro. */
const LANDSCAPE = {
  video: '/hero-jet.mp4',
  poster: '/hero-jet-poster.jpg',
  width: 1920,
  height: 1082,
} as const;

/** Montaggio per il telefono, ricavato dalla sola inquadratura frontale e
 *  ritagliato stretto sul velivolo. È il massimo ottenibile tenendo l'aereo
 *  intero: in tutte e tre le inquadrature del girato l'apertura alare copre
 *  l'89-93% del quadro, quindi oltre il +13% si taglierebbero le ali.
 *  Andata e ritorno, così l'anello non ha stacco. */
const PORTRAIT = {
  video: '/hero-jet-mobile.mp4',
  poster: '/hero-jet-mobile-poster.jpg',
  width: 720,
  height: 452,
} as const;

/** Stesso valore del breakpoint md di Tailwind. */
const LANDSCAPE_QUERY = '(min-width: 768px)';

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

/**
 * Intestazione della home: sul video resta solo il logotipo con la parola
 * che ruota; titolo, testo e pulsanti stanno nella sezione sotto, così il
 * filmato non è coperto da altro testo.
 *
 * Altezza dichiarata in pixel e non in unità di viewport: evita il salto
 * di layout causato dalla barra del browser su mobile.
 */
const Hero: React.FC = () => {
  const { t } = useLanguage();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isLandscapeViewport = useMediaQuery(LANDSCAPE_QUERY);
  const source = isLandscapeViewport ? LANDSCAPE : PORTRAIT;

  return (
    <>
      <section className="relative overflow-hidden bg-black pt-header md:pt-0 md:min-h-[620px] lg:min-h-[700px]">
        {/* Su telefono il filmato sta nel flusso al rapporto del suo ritaglio,
            così si vede per intero. Lo spazio in alto è esattamente l'altezza
            dell'header, che lo copre. Da md in su il filmato orizzontale torna
            a riempire la sezione. */}
        <div
          className="relative w-full aspect-[720/452] md:aspect-auto md:absolute md:inset-0"
          aria-hidden="true"
        >
          {prefersReducedMotion ? (
            <img
              src={source.poster}
              alt=""
              width={source.width}
              height={source.height}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              /* La chiave rimonta l'elemento al cambio di sorgente: senza,
                 il browser tiene il filmato già caricato. */
              key={source.video}
              className="w-full h-full object-cover"
              src={source.video}
              poster={source.poster}
              width={source.width}
              height={source.height}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              disablePictureInPicture
            />
          )}
          {/* Velatura per la scritta. Sul quadro verticale è più leggera: lì il
              filmato è già scurito ai bordi e una velatura piena spegnerebbe
              il velivolo. */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.24)_45%,rgba(0,0,0,0.1)_100%)] md:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.68)_0%,rgba(0,0,0,0.4)_45%,rgba(0,0,0,0.22)_100%)]" />
        </div>

        {/* Unica scritta sul video: parte fissa e competenza che ruota.
            Due righe, ognuna intera: nessuna delle due va a capo a nessuna
            larghezza, e la parola che cambia resta sempre integra. */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-xs px-sm pt-header text-center">
          <p className="font-display font-semibold uppercase tracking-[0.06em] leading-none text-inkMuted whitespace-nowrap text-[clamp(0.8rem,3vw,1.5rem)]">
            {t('hero.speedOf')}
          </p>
          <p className="font-display font-semibold uppercase tracking-[0.02em] leading-none text-ink whitespace-nowrap text-[clamp(1.6rem,8.4vw,4.5rem)]">
            <RotatingFoldText />
          </p>
        </div>
      </section>

      {/* Tipologia: testo su colonna singola */}
      <Section labelledBy="hero-title" divided={false}>
        <h1 id="hero-title" className="title-page">
          {t('hero.title')}
        </h1>
        <p className="text-lead mt-md max-w-[62ch]">{t('hero.description')}</p>
        <div className="mt-xl flex flex-col xs:flex-row gap-sm">
          <button type="button" onClick={() => scrollToId('contact')} className="btn-primary">
            {t('hero.cta')}
          </button>
          <button type="button" onClick={() => scrollToId('solutions')} className="btn-secondary">
            {t('hero.ctaSecondary')}
          </button>
        </div>
      </Section>
    </>
  );
};

export default Hero;
