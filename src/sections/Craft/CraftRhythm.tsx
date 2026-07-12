import { forwardRef } from 'react';
import { Container } from '../../components/layout';
import { Text } from '../../components/typography';
import makingSumbaImg from '../../assets/images/makingsumba.jpg';

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
             <img loading="lazy" src={makingSumbaImg} alt="Repetitive tension applied to the loom" className="craft-rhythm-visual w-full aspect-video lg:aspect-[24/9] object-cover rounded-sm shadow-sm" />
             <Text variant="caption" className="craft-rhythm-caption absolute -bottom-8 right-0 lg:right-16 text-text-muted italic">Repetitive tension applied to the loom.</Text>
          </div>
        </div>
      </Container>
    </div>
  );
});

CraftRhythm.displayName = 'CraftRhythm';
