import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import RotatingFoldText from './ui/RotatingFoldText';
import Section from './layout/Section';

const VIDEO_SRC = '/hero-jet.mp4';
const POSTER_SRC = '/hero-jet-poster.jpg';
const POSTER_WIDTH = 1920;
const POSTER_HEIGHT = 1082;

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

  return (
    <>
      <section className="relative overflow-hidden bg-black pt-header md:pt-0 md:min-h-[620px] lg:min-h-[700px]">
        {/* Su telefono il filmato sta nel flusso al suo rapporto naturale, così
            si vede per intero: a 375px di larghezza un riquadro alto 560px
            ritagliava quasi due terzi del fotogramma. Lo spazio in alto è
            esattamente l'altezza dell'header, che lo copre per intero.
            Da md in su c'è larghezza a sufficienza e il video torna a riempire
            la sezione. */}
        <div
          className="relative aspect-[1920/1082] md:aspect-auto md:absolute md:inset-0"
          aria-hidden="true"
        >
          {prefersReducedMotion ? (
            <img
              src={POSTER_SRC}
              alt=""
              width={POSTER_WIDTH}
              height={POSTER_HEIGHT}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              className="w-full h-full object-cover"
              src={VIDEO_SRC}
              poster={POSTER_SRC}
              width={POSTER_WIDTH}
              height={POSTER_HEIGHT}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              disablePictureInPicture
            />
          )}
          {/* Velatura: più marcata al centro, dove sta la scritta */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.68)_0%,rgba(0,0,0,0.4)_45%,rgba(0,0,0,0.22)_100%)]" />
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
