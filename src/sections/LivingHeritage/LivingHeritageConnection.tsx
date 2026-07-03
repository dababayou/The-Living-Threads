import { forwardRef } from 'react';
import { Container } from '../../components/layout';
import { Text } from '../../components/typography';

export const LivingHeritageConnection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <Container className="pb-32 lg:pb-56">
        {/* 
          Connection: Two or more people. Shared space. 
          Asymmetrical, distance is meaningful. 
        */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-32 w-full max-w-6xl mx-auto">
          
          <div className="living-connection-visual w-full lg:w-1/2 aspect-[4/5] bg-gradient-to-br from-surface to-[#d3cdc2] shadow-sm rounded-sm order-1"></div>
          
          <div className="living-connection-content w-full lg:w-1/2 flex flex-col items-start order-2 lg:pt-48">
            <div className="living-connection-visual-small w-full max-w-sm aspect-[4/3] bg-gradient-to-bl from-[#c8c4bc] to-surface shadow-sm rounded-sm mb-16 lg:mb-24 lg:-ml-16"></div>
            <div className="living-connection-text max-w-sm">
              <Text variant="body" className="text-lg lg:text-xl leading-loose text-text-muted">
                Knowledge is not simply handed down. It is renewed daily through quiet observation and mutual trust.
              </Text>
            </div>
          </div>
          
        </div>
      </Container>
    </div>
  );
});

LivingHeritageConnection.displayName = 'LivingHeritageConnection';
