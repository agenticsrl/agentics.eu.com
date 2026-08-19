import React, { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useLightTracking, type LightTrackingMode } from '../hooks/useLightTracking';
import RotatingFoldText from './ui/RotatingFoldText';
import Section from './layout/Section';

const VIDEO_SRC = '/hero-jet.mp4';
const POSTER_SRC = '/hero-jet-poster.jpg';
const VIDEO_WIDTH = 1920;
const VIDEO_HEIGHT = 1082;

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

/**
 * Intestazione della home: il filmato occupa tutto lo schermo e porta solo il
 * logotipo con la parola che ruota. Titolo, testo e pulsanti stanno nella
 * sezione sotto, così il filmato non è coperto da altro testo.
 *
 * A tutto schermo il quadro 16:9 viene per forza ritagliato, in verticale
 * parecchio: il ritaglio non è fisso ma insegue il baricentro della luce,
 * misurato in anticipo sul filmato, così il velivolo resta sempre inquadrato
 * anche quando la ripresa cambia.
 */
const Hero: React.FC = () => {
  const { t } = useLanguage();
  const prefersReducedMotion = usePrefersReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  /* L'inseguimento serve dove il quadro 16:9 viene ritagliato stretto, cioè
     sul telefono: lì senza di esso il velivolo esce di campo a ogni stacco.
     Da `lg` in su il filmato ci sta quasi intero, lo spostamento continuo del
     ritaglio si nota come un vagare e non porta nulla: lì non si tocca
     `object-position`, e l'inquadratura resta quella predefinita. */
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const trackingMode: LightTrackingMode = isDesktop
    ? 'off'
    : prefersReducedMotion
      ? 'static'
      : 'track';

  useLightTracking(videoRef, trackingMode);

  return (
    <>
      {/* svh e non vh: con l'unità classica la barra del browser che compare e
          scompare cambierebbe l'altezza e farebbe sobbalzare la pagina. */}
      <section className="relative h-[100svh] min-h-[480px] overflow-hidden bg-black md:h-auto md:min-h-[620px] lg:min-h-[700px]">
        <div className="absolute inset-0" aria-hidden="true">
          {prefersReducedMotion ? (
            <img
              src={POSTER_SRC}
              alt=""
              width={VIDEO_WIDTH}
              height={VIDEO_HEIGHT}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src={VIDEO_SRC}
              poster={POSTER_SRC}
              width={VIDEO_WIDTH}
              height={VIDEO_HEIGHT}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              disablePictureInPicture
            />
          )}
          {/* Velatura: più marcata al centro, dove sta la scritta */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.38)_45%,rgba(0,0,0,0.2)_100%)]" />
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
