import { forwardRef } from 'react';
import { Container } from '../../components/layout';
import { Text } from '../../components/typography';

export const CraftTools = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <Container className="mb-32 lg:mb-48">
        <div className="craft-tool-block grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="craft-tool-visual w-full aspect-[4/5] bg-gradient-to-tr from-[#b5b0a7] to-surface rounded-sm opacity-90 shadow-sm" />
            <div className="craft-tool-caption absolute top-8 -left-4 lg:-left-8 bg-background/95 backdrop-blur-sm px-4 py-3 border-l border-border shadow-sm max-w-[220px]">
              <Text variant="caption" className="text-sm italic text-text-muted">
                The wooden spindle resting in the palm.
              </Text>
            </div>
          </div>
          
          <div className="craft-tool-text lg:col-span-6 lg:col-start-7 lg:pb-12">
            <Text variant="body" className="text-xl leading-relaxed">
              The tool is never independent. It is a silent partner, worn smooth by decades of identical friction. It knows the weight of the hand as well as the hand knows the tool.
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
});

CraftTools.displayName = 'CraftTools';
