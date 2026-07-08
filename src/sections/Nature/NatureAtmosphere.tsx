import { forwardRef } from 'react';
import wairindingImg from '../../assets/images/bukit-wairinding.webp';

export const NatureAtmosphere = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="w-full min-h-[70vh] lg:min-h-[100vh] flex flex-col justify-end items-center p-8 lg:p-16 mb-0 overflow-hidden relative">
      <img 
        src={wairindingImg} 
        alt="Bukit Wairinding Landscape" 
        className="nature-atmosphere-bg absolute inset-0 w-full h-full object-cover origin-bottom" 
      />
      
      {/* Gradient overlay to blend into the next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-surface pointer-events-none" />
    </div>
  );
});

NatureAtmosphere.displayName = 'NatureAtmosphere';
