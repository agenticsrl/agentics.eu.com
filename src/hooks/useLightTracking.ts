import { useEffect, type RefObject } from 'react';
import { LIGHT_TRACK, LIGHT_TRACK_STEP } from '../lib/heroLightTrack';

/**
 * - `track`: il ritaglio insegue la luce, fotogramma per fotogramma.
 * - `static`: fermo sul soggetto della prima ripresa, per chi ha chiesto di
 *   ridurre il movimento ma ha comunque un quadro ritagliato stretto.
 * - `off`: nessun intervento, il ritaglio resta quello predefinito del
 *   browser. È il caso della scrivania, dove il filmato ci sta quasi intero.
 */
export type LightTrackingMode = 'track' | 'static' | 'off';

/** Salto fra due campioni oltre il quale c'è uno stacco di montaggio: lì il
 *  quadro va cambiato di colpo, non attraversato con una panoramica. */
const CUT_JUMP = 10;

/** Sotto questa differenza non vale la pena riverniciare. */
const MIN_DELTA = 0.05;

const clampIndex = (i: number) => Math.min(Math.max(i, 0), LIGHT_TRACK.length - 1);

/** Baricentro della luce a un dato istante, interpolato fra i campioni. */
function lightAt(time: number): readonly [number, number] {
  const position = time / LIGHT_TRACK_STEP;
  const index = Math.floor(position);
  const from = LIGHT_TRACK[clampIndex(index)];
  const to = LIGHT_TRACK[clampIndex(index + 1)];

  // Attraverso uno stacco non si interpola: si taglia.
  if (Math.abs(to[0] - from[0]) > CUT_JUMP || Math.abs(to[1] - from[1]) > CUT_JUMP) {
    return from;
  }

  const fraction = position - index;
  return [from[0] + (to[0] - from[0]) * fraction, from[1] + (to[1] - from[1]) * fraction];
}

/**
 * Tiene inquadrato il soggetto illuminato mentre il filmato scorre.
 *
 * Su telefono il quadro 16:9 viene ritagliato stretto, e con `object-position`
 * fisso il velivolo esce di campo appena la ripresa cambia. Qui la posizione
 * insegue il baricentro della luce, misurato in anticipo sul filmato: il
 * ritaglio si sposta da solo su dov'è il soggetto.
 *
 * Si ferma da sé quando il filmato è in pausa, la scheda è in secondo piano o
 * l'intestazione è uscita dallo schermo: nessun ciclo di disegno sprecato.
 */
export function useLightTracking(
  ref: RefObject<HTMLVideoElement | null>,
  mode: LightTrackingMode
): void {
  useEffect(() => {
    const video = ref.current;
    if (!video) return undefined;

    if (mode !== 'track') {
      if (mode === 'static') {
        const [x, y] = LIGHT_TRACK[0];
        video.style.objectPosition = `${x}% ${y}%`;
      } else {
        // Si rimuove invece di scriverci un valore: passando da telefono a
        // scrivania ridimensionando, un residuo in linea terrebbe il ritaglio
        // spostato invece di tornare al centro.
        video.style.removeProperty('object-position');
      }
      return undefined;
    }

    let frame = 0;
    let onScreen = true;
    let lastX = -1;
    let lastY = -1;

    const apply = () => {
      const [x, y] = lightAt(video.currentTime);
      if (Math.abs(x - lastX) > MIN_DELTA || Math.abs(y - lastY) > MIN_DELTA) {
        video.style.objectPosition = `${x.toFixed(2)}% ${y.toFixed(2)}%`;
        lastX = x;
        lastY = y;
      }
    };

    const draw = () => {
      apply();
      frame = requestAnimationFrame(draw);
    };

    const run = () => {
      if (frame || !onScreen || video.paused || document.hidden) return;
      frame = requestAnimationFrame(draw);
    };

    const halt = () => {
      if (!frame) return;
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen) run();
        else halt();
      },
      { threshold: 0 }
    );
    observer.observe(video);

    const onVisibility = () => (document.hidden ? halt() : run());

    video.addEventListener('play', run);
    video.addEventListener('pause', halt);
    // Se l'autoplay è bloccato — iOS in risparmio energetico — il filmato
    // resta fermo sul poster: senza questo il ritaglio rimarrebbe al centro.
    video.addEventListener('seeked', apply);
    document.addEventListener('visibilitychange', onVisibility);
    apply();
    run();

    return () => {
      halt();
      observer.disconnect();
      video.removeEventListener('play', run);
      video.removeEventListener('pause', halt);
      video.removeEventListener('seeked', apply);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [ref, mode]);
}
