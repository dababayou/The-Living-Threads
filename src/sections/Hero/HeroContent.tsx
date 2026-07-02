import { forwardRef } from 'react';
import { Heading, Prose, Text } from '../../components/typography';

export const HeroContent = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="flex flex-col gap-6 lg:gap-8">
      <div className="hero-text-node">
        <Heading variant="eyebrow" level={2}>
          The Living Threads
        </Heading>
      </div>
      
      <div className="hero-text-node">
        <Heading variant="display" level={1}>
          Woven Time and Sacred Craft
        </Heading>
      </div>
      
      <div className="hero-text-node">
        <Prose>
          <p>
            Discover the ancestral art of Sumba Ikat. Every thread holds a story, 
            every pattern speaks of the cosmos, and every textile is a bridge 
            between the living and the divine.
          </p>
        </Prose>
      </div>
      
      <div className="hero-text-node pt-4">
        <Text 
          as="button" 
          variant="body" 
          className="border-b border-text pb-1 hover:text-text-muted transition-colors uppercase tracking-wider text-sm"
        >
          Begin the Journey
        </Text>
      </div>
    </div>
  );
});

HeroContent.displayName = 'HeroContent';
