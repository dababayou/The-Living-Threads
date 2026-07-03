import { forwardRef } from 'react';
import { Container } from '../../components/layout';
import { Heading, Text } from '../../components/typography';

export const CraftIntro = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <Container className="mb-32 lg:mb-48 mt-16 lg:mt-32 text-center lg:text-left flex flex-col lg:flex-row items-center lg:items-end gap-16 lg:gap-24">
      <div className="craft-intro-visual w-full lg:w-1/2 aspect-square lg:aspect-[4/5] bg-gradient-to-tr from-[#dcd9d2] to-surface border border-border shadow-sm flex items-start p-8 relative overflow-hidden">
        <span className="craft-intro-caption text-text-muted font-body text-xs tracking-widest uppercase relative z-10 opacity-70">
          The First Human Touch
        </span>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-surface rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="w-full lg:w-1/2 lg:pb-16 lg:pr-8">
        <Heading variant="display" level={2} className="craft-intro-text mb-10 lg:max-w-md">
          The quiet intelligence of the hand.
        </Heading>
        <Text variant="body" className="craft-intro-text text-text-muted text-lg lg:text-xl leading-relaxed lg:max-w-md">
          Materials lie dormant until touched by intention. Knowledge is not spoken, it is held. Through patience and deliberate action, nature is shaped into thread.
        </Text>
      </div>
    </Container>
  </div>
  );
});

CraftIntro.displayName = 'CraftIntro';
