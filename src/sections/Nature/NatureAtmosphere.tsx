import { forwardRef } from 'react';

export const NatureAtmosphere = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="w-full min-h-[70vh] lg:min-h-[100vh] flex flex-col justify-end items-center p-8 lg:p-16 mb-0 overflow-hidden relative">
      {/* Absolute background element for parallax scaling */}
      <div className="nature-atmosphere-bg absolute inset-0 bg-gradient-to-b from-transparent via-surface to-surface origin-bottom" />
      
      {/* 
        Full-bleed atmospheric canvas.
        Gradually solidifies from transparent (Hero blending) into a dense surface.
      */}
      <span className="nature-atmosphere-text text-text-muted font-body text-xs tracking-widest uppercase opacity-70 mb-8 lg:mb-24 relative z-10">
        Atmospheric Environment
      </span>
    </div>
  );
});

NatureAtmosphere.displayName = 'NatureAtmosphere';
