import { forwardRef } from 'react';
import { Container } from '../../components/layout';
import { Text } from '../../components/typography';

export const MeaningArrival = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <Container className="pt-32 lg:pt-48 pb-32 lg:pb-64 flex flex-col items-center text-center">
        {/* 
          Dissolving the boundary: 
          Inherits the vertical momentum from Craft's final stacked bundle.
          No harsh min-h-screen wrapper. Just an open continuation into a serene landscape.
        */}
        <div className="meaning-arrival-visual w-full max-w-2xl aspect-[21/9] lg:aspect-[24/9] bg-gradient-to-t from-surface to-border mb-32 lg:mb-48 shadow-sm rounded-sm opacity-80"></div>
        <div className="meaning-arrival-text max-w-2xl mx-auto">
          <Text variant="body" className="text-xl lg:text-2xl leading-relaxed text-text-muted">
            The work is finished. The hands rest. But the cloth is only the beginning.
          </Text>
        </div>
      </Container>
    </div>
  );
});

MeaningArrival.displayName = 'MeaningArrival';
