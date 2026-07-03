import { forwardRef } from 'react';
import { Container } from '../../components/layout';
import { Text } from '../../components/typography';

export const MeaningLookAgain = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <Container className="pb-48 lg:pb-72">
        
        {/* 
          Removing web rhythm: 
          Abandoned strict grid-columns. The layout now flows organically 
          like an editorial spread. The eye cannot predict where the next block will land.
        */}
        <div className="meaning-look-block w-full max-w-4xl mx-auto mb-48 lg:mb-72">
          <div className="meaning-look-visual w-full aspect-[16/9] bg-gradient-to-bl from-[#dcd9d2] to-surface shadow-sm rounded-sm opacity-85 mb-24 lg:mb-32"></div>
          <div className="meaning-look-text max-w-md lg:ml-auto lg:mr-24 lg:text-right">
            <Text variant="body" className="text-xl leading-loose text-text-muted">
              Every thread carries the intention of the hands that shaped it. To wear it is to wear time, memory, and the land itself.
            </Text>
          </div>
        </div>
        
        <div className="meaning-look-block w-full max-w-5xl mx-auto flex flex-col items-start lg:ml-32">
          <div className="meaning-look-text max-w-md mb-24 lg:mb-32">
            <Text variant="body" className="text-xl leading-loose text-text-muted">
              It is not simply an object of beauty. It is a vessel for relationships that exist long before the loom is strung.
            </Text>
          </div>
          <div className="meaning-look-visual w-full max-w-sm aspect-[3/4] bg-gradient-to-tr from-surface to-[#d3cdc2] shadow-sm rounded-sm opacity-85 lg:ml-32"></div>
        </div>

      </Container>
    </div>
  );
});

MeaningLookAgain.displayName = 'MeaningLookAgain';
