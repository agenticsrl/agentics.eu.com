import { useEffect, useState } from 'react';

/**
 * Segue una media query e si aggiorna quando cambia.
 *
 * Serve dove una differenza fra telefono e scrivania non si può esprimere in
 * CSS perché riguarda il comportamento e non l'aspetto: lì la classe `lg:` non
 * arriva, e il componente deve sapere davvero su che schermo sta.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches);
    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}
