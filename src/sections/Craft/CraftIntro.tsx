import { forwardRef } from 'react';
import { Container } from '../../components/layout';
import { Heading, Text } from '../../components/typography';
import sentuhImg from '../../assets/images/sentuh.jpg';

export const CraftIntro = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <Container className="mb-32 lg:mb-48 mt-16 lg:mt-32 text-center lg:text-left flex flex-col lg:flex-row items-center lg:items-end gap-16 lg:gap-24">
      <div className="craft-intro-visual w-full lg:w-1/2 aspect-square lg:aspect-[4/5] border border-border shadow-sm relative overflow-hidden rounded-sm">
        <img src={sentuhImg} alt="The First Human Touch" className="absolute inset-0 w-full h-full object-cover" />
        <span className="craft-intro-caption absolute top-8 left-8 text-text-muted bg-background/95 backdrop-blur-sm px-4 py-2 border-l-2 border-text font-body text-xs tracking-widest uppercase z-10">
          The First Human Touch
        </span>
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
