import { forwardRef } from 'react';
import { Container } from '../../components/layout';
import { Text } from '../../components/typography';
import release1 from '../../assets/images/rele1.webp';
import release2 from '../../assets/images/release2.jpg';

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
            
            <div className="hope-release-visual-wide w-full aspect-[21/9] shadow-sm mb-32 lg:mb-56 overflow-hidden">
              <img loading="lazy" src={release1} alt="Release landscape" className="w-full h-full object-cover" />
            </div>
            
            <div className="hope-release-visual-small w-full max-w-sm aspect-square shadow-sm lg:ml-auto lg:mr-24 overflow-hidden">
              <img loading="lazy" src={release2} alt="Release detail" className="w-full h-full object-cover" />
            </div>
            
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
