import { forwardRef } from 'react';
import { Container } from '../../components/layout';
import { Heading, Text } from '../../components/typography';

export const CraftTransition = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <Container className="max-w-[var(--reading-width)] mx-auto flex flex-col items-center text-center">
        <div className="craft-transition-line w-px h-32 bg-border mb-16 relative">
          <div className="craft-transition-crosshair absolute bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-px bg-border/50"></div>
        </div>
        
        <div className="craft-transition-threshold w-full max-w-xs lg:max-w-sm aspect-[3/4] relative mb-24 mx-auto">
          <div className="craft-transition-stack-back absolute inset-0 bg-surface border border-border shadow-sm transform -rotate-3 transition-transform"></div>
          <div className="craft-transition-stack-mid absolute inset-0 bg-[#e3dfd7] border border-[#d3cdc2] shadow-sm transform rotate-2 transition-transform"></div>
          <div className="craft-transition-stack-front absolute inset-0 bg-surface border border-border flex items-center justify-center pt-3 pb-3 shadow-md transition-transform relative z-10">
            <span className="text-text-muted font-body text-xs uppercase tracking-widest opacity-80">
              Prepared Material
            </span>
          </div>
        </div>
        
        <div className="craft-transition-text">
          <Text variant="caption" className="uppercase tracking-widest text-text-muted mb-6">
            The Technique Complete
          </Text>
          <Heading variant="display" level={3}>
            Threads await meaning.
          </Heading>
        </div>
      </Container>
    </div>
  );
});

CraftTransition.displayName = 'CraftTransition';
