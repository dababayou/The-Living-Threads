import { forwardRef } from 'react';

export const HeroVisual = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="w-full aspect-[4/5] lg:aspect-[3/4] bg-surface rounded-md border border-border flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-surface to-border opacity-30" />
      <span className="text-text-muted font-body text-sm tracking-widest uppercase z-10 relative">
        Visual Placeholder
      </span>
    </div>
  );
});

HeroVisual.displayName = 'HeroVisual';
