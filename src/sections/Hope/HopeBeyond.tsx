import { forwardRef } from 'react';
import { Container } from '../../components/layout';
import { Text } from '../../components/typography';

export const HopeBeyond = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <Container className="pb-[30vh] lg:pb-[50vh]">
        <div className="flex flex-col items-center">
          
          {/* 
            Beyond
            Single expansive landscape. Minimal typography.
            Vast surrounding whitespace. No visual competition.
          */}
          <div className="hope-beyond-visual w-full max-w-6xl aspect-[24/9] lg:aspect-[28/9] bg-gradient-to-t from-surface to-[#dcd9d2] opacity-50 mb-64 lg:mb-96"></div>

          <div className="hope-beyond-text max-w-lg text-center mx-auto">
            <Text variant="body" className="text-lg lg:text-xl leading-loose font-light opacity-60">
              The horizon is not a destination. It is an invitation to continue.
            </Text>
          </div>

        </div>
      </Container>
    </div>
  );
});

HopeBeyond.displayName = 'HopeBeyond';
