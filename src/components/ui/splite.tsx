import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className = '' }: SplineSceneProps) {
  return (
    <Suspense fallback={
      <div className={`flex items-center justify-center ${className}`}>
        <div className="animate-pulse text-neutral-400">Loading 3D scene...</div>
      </div>
    }>
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  );
}
