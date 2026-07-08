import { forwardRef } from 'react';
import heroImg from '../../assets/images/hero1.jpg';

export const HeroVisual = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="w-full aspect-[4/5] lg:aspect-[3/4] bg-surface rounded-md border border-border flex items-center justify-center overflow-hidden relative">
      <img src={heroImg} alt="Sumba Weaving Hero" className="w-full h-full object-cover absolute inset-0" />
    </div>
  );
});

HeroVisual.displayName = 'HeroVisual';
