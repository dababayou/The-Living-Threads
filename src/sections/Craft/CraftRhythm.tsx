import { forwardRef } from 'react';
import { Container } from '../../components/layout';
import { Text } from '../../components/typography';

export const CraftRhythm = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <Container className="mb-32 lg:mb-56 relative">
        <div className="craft-rhythm-intro">
          <Text variant="caption" className="uppercase tracking-widest text-text-muted mb-24 block text-center lg:absolute lg:top-0 lg:left-8 lg:writing-vertical-rl lg:rotate-0">
            The Cadence of Making
          </Text>
        </div>
        
        <div className="flex flex-col items-center lg:ml-24">
          
          {/* Cinematic Wide */}
          <div className="craft-rhythm-block w-full max-w-6xl mb-24 lg:mb-32 relative">
             <div className="craft-rhythm-visual w-full aspect-video lg:aspect-[24/9] bg-gradient-to-bl from-surface to-[#dcd9d2] rounded-sm opacity-95 shadow-sm" />
             <Text variant="caption" className="craft-rhythm-caption absolute -bottom-8 right-0 lg:right-16 text-text-muted italic">Repetitive tension applied to the loom.</Text>
          </div>
          
          <div className="flex flex-col lg:flex-row w-full max-w-5xl gap-16 lg:gap-32 items-end mb-24 lg:mb-32">
            {/* Ultra Portrait */}
            <div className="craft-rhythm-block w-full lg:w-1/3 relative">
               <div className="craft-rhythm-visual w-full aspect-[2/5] bg-gradient-to-t from-[#c8c4bc] to-surface rounded-sm opacity-95 shadow-sm" />
               <div className="craft-rhythm-caption absolute top-8 lg:top-32 -right-4 lg:-right-32 bg-background/90 px-4 py-3 border-l border-border shadow-sm max-w-[200px] z-10">
                 <Text variant="caption" className="italic text-text-muted">The sudden, deliberate pause in motion.</Text>
               </div>
            </div>
            
            {/* Tight Square */}
            <div className="craft-rhythm-block w-full lg:w-2/3 relative">
               <div className="craft-rhythm-visual w-full aspect-square bg-gradient-to-tr from-surface to-[#dcd9d2] rounded-sm opacity-95 shadow-sm" />
               <Text variant="caption" className="craft-rhythm-caption absolute -bottom-8 left-0 lg:left-8 text-text-muted italic">The swift passage of the shuttle.</Text>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
});

CraftRhythm.displayName = 'CraftRhythm';
