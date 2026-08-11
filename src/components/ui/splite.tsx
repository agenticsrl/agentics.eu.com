import React, { Suspense, lazy, useCallback } from 'react';
import type { Application } from '@splinetool/runtime';

/**
 * Il runtime Spline pesa alcuni MB: viene caricato solo quando la scena
 * entra davvero in pagina, così la home non lo scarica.
 */
const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
  /**
   * Sovrascrive il fondo salvato nella scena Spline: il canvas è opaco,
   * quindi il colore del contenitore da solo non basta.
   */
  backgroundColor?: string;
}

export function SplineScene({ scene, className = '', backgroundColor }: SplineSceneProps) {
  const handleLoad = useCallback(
    (app: Application) => {
      if (backgroundColor) {
        app.setBackgroundColor(backgroundColor);
      }
    },
    [backgroundColor]
  );

  return (
    <Suspense
      fallback={
        <div className={`flex items-center justify-center ${className}`}>
          <span className="label text-inkFaint">3D</span>
        </div>
      }
    >
      <Spline scene={scene} className={className} onLoad={handleLoad} />
    </Suspense>
  );
}
