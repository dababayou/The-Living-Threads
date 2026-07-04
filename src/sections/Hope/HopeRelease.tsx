import { forwardRef } from 'react';
import { Container } from '../../components/layout';
import { Text } from '../../components/typography';

export const HopeRelease = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <Container className="pb-48 lg:pb-72">
        <div className="flex flex-col">
          
          {/* 
            Release
            Editorial structure dissolves. Asymmetrical composition.
            Wider landscape imagery, smaller supporting visual.
            Large uninterrupted margins.
          */}
          <div className="w-full max-w-5xl mx-auto flex flex-col items-start lg:pl-16 mb-40 lg:mb-64">
            
            <div className="hope-release-visual-wide w-full aspect-[21/9] bg-gradient-to-r from-surface to-[#dcd9d2] opacity-75 mb-32 lg:mb-56"></div>
            
            <div className="hope-release-visual-small w-full max-w-sm aspect-square bg-gradient-to-b from-[#e3dfd7] to-surface opacity-70 lg:ml-auto lg:mr-24"></div>
            
          </div>

          <div className="hope-release-text max-w-lg mx-auto text-center lg:text-left lg:mr-auto lg:ml-32">
            <Text variant="body" className="text-lg lg:text-xl leading-loose font-light text-text-muted opacity-75">
              We do not hold onto the past to remember what was. We carry it to understand what can be.
            </Text>
          </div>

        </div>
      </Container>
    </div>
  );
});

HopeRelease.displayName = 'HopeRelease';
