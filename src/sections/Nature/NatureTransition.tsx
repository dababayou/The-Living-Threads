import { forwardRef } from 'react';
import { Container } from '../../components/layout';
import { Heading, Text } from '../../components/typography';

export const NatureTransition = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <Container className="max-w-[var(--reading-width)] mx-auto flex flex-col items-center text-center">
        {/* 
          The Handoff. 
          Ends with dense visual richness, preparing for the structure of human craft.
        */}
        <div className="nature-transition-line w-px h-32 bg-border mb-12 relative">
          {/* Subtle structural crosshair implying exactness/craft */}
          <div className="nature-transition-crosshair absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-px bg-text"></div>
        </div>
        
        <div className="nature-transition-text">
          <Text variant="caption" className="uppercase tracking-widest text-text-muted mb-8">
            The Gathering Complete
          </Text>
        </div>
        
        <div className="nature-transition-text">
          <Heading variant="display" level={3}>
            Nature provides. <br />
            Humans respond.
          </Heading>
        </div>
        
        {/* Dense, structural threshold leading to Craft */}
        <div className="nature-transition-threshold mt-24 w-full aspect-[16/10] bg-[#e3dfd7] relative flex flex-col justify-end p-8 border border-[#d3cdc2]">
           <div className="absolute inset-4 border border-[#d3cdc2]/50" />
           <span className="text-text-muted font-body text-xs uppercase tracking-widest relative z-10 mx-auto">
              Threshold of Craft
           </span>
        </div>
      </Container>
    </div>
  );
});

NatureTransition.displayName = 'NatureTransition';
