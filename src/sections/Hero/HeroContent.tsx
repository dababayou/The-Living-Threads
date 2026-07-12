import { forwardRef } from 'react';
import { Heading, Prose, Text } from '../../components/typography';
import { useLanguage } from '../../contexts/LanguageContext';

export const HeroContent = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useLanguage();

  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-6 lg:gap-8 max-w-2xl mx-auto">
      <div className="hero-text-node">
        <Text variant="caption" className="uppercase tracking-widest text-text-muted drop-shadow-lg">
          A Digital Initiative for Living Heritage
        </Text>
      </div>
      
      <div className="hero-text-node">
        <Heading variant="display" level={1}>
          The Living Threads
        </Heading>
      </div>
      
      <div className="hero-text-node">
        <Prose>
          <p className="text-text-muted text-lg lg:text-xl drop-shadow-lg">
            {t('A digital cultural initiative dedicated to preserving and celebrating the living heritage of Sumba Ikat.')}
          </p>
        </Prose>
      </div>
      
      <div className="hero-text-node pt-4">
        <Text 
          variant="body" 
          className="uppercase tracking-wider text-sm opacity-80"
        >
          The Journey Begins.
        </Text>
      </div>
    </div>
  );
});

HeroContent.displayName = 'HeroContent';

export const HeroNarrative = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useLanguage();

  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-6 lg:gap-8 max-w-2xl mx-auto">
      <div className="hero-narrative-node">
        <Heading variant="display" level={2}>
          Woven Time and Sacred Craft
        </Heading>
      </div>
      
      <div className="hero-narrative-node">
        <Prose>
          <p>
            {t('Discover the ancestral art of Sumba Ikat. Every thread holds a story, every pattern speaks of the cosmos, and every textile is a bridge between the living and the divine.')}
          </p>
        </Prose>
      </div>
    </div>
  );
});

HeroNarrative.displayName = 'HeroNarrative';
