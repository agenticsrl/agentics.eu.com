import { useEffect, useState } from 'react';

/**
 * Segnala se una media query è soddisfatta, e resta allineata ai cambi di
 * larghezza. Serve a scegliere quale sorgente video montare: due elementi
 * nascosti a vicenda con il CSS li farebbero scaricare entrambi.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches);

    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}
