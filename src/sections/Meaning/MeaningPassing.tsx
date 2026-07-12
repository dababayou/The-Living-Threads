import { forwardRef } from 'react';
import { Container } from '../../components/layout';
import { Text } from '../../components/typography';
import passing from '../../assets/images/passing.jpg';

export const MeaningPassing = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <Container className="pt-32 lg:pt-48 pb-48 lg:pb-72">
        {/* 
          Passing into Living Heritage.
          Offset to the bottom right, the portrait frame leads the eye naturally 
          into the next section. Feels discovered rather than introduced.
        */}
        <div className="flex flex-col lg:flex-row items-end justify-end gap-12 lg:gap-24 max-w-5xl mx-auto">
          
          <div className="meaning-passing-text max-w-sm text-right lg:pb-24">
            <Text variant="body" className="text-xl lg:text-2xl text-text-muted italic leading-relaxed">
              Who continues to carry these invisible threads today?
            </Text>
          </div>
          
          <div className="meaning-passing-visual w-full max-w-sm aspect-[2/3] shadow-sm rounded-sm opacity-95 overflow-hidden">
            <img loading="lazy" src={passing} alt="Carrying the threads today" className="w-full h-full object-cover" />
          </div>
          
        </div>
      </Container>
    </div>
  );
});

MeaningPassing.displayName = 'MeaningPassing';
