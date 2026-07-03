import { forwardRef } from 'react';
import { Container } from '../../components/layout';
import { Text } from '../../components/typography';

export const LivingHeritageContinuation = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <Container className="pb-32 lg:pb-64">
        <div className="flex flex-col items-center">
          {/* 
            Continuation: Fragments of interaction. Shared attention. 
            Highest emotional density.
          */}
          <div className="flex flex-col lg:flex-row items-end justify-center gap-12 lg:gap-16 w-full max-w-5xl mb-24 lg:mb-32">
            <div className="living-continuation-visual w-full max-w-sm lg:w-2/5 aspect-[3/4] bg-gradient-to-t from-[#dcd9d2] to-surface shadow-sm rounded-sm"></div>
            <div className="living-continuation-visual-wide w-full lg:w-3/5 aspect-[16/9] bg-gradient-to-l from-surface to-[#c8c4bc] shadow-sm rounded-sm lg:mb-16"></div>
          </div>
          
          <div className="living-continuation-text text-center max-w-md mx-auto">
            <Text variant="body" className="text-xl lg:text-2xl leading-relaxed text-text-muted">
              Together. Always together.
            </Text>
          </div>
          
        </div>
      </Container>
    </div>
  );
});

LivingHeritageContinuation.displayName = 'LivingHeritageContinuation';
