import { forwardRef } from 'react';
import { Container } from '../../components/layout';
import { Heading, Text } from '../../components/typography';
import { useLanguage } from '../../contexts/LanguageContext';
import ntrtrs from '../../assets/images/ntrtrs.jpg';

export const CraftTransition = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useLanguage();

  return (
    <div ref={ref}>
      <Container className="max-w-[var(--reading-width)] mx-auto flex flex-col items-center text-center">
        <div className="craft-transition-line w-px h-32 bg-border mb-16 relative">
          <div className="craft-transition-crosshair absolute bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-px bg-border/50"></div>
        </div>
        
        <div className="craft-transition-threshold w-full max-w-xs lg:max-w-sm aspect-[3/4] relative mb-24 mx-auto group cursor-pointer">
          <div className="craft-transition-stack-back absolute inset-0 bg-white border border-border shadow-sm transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 p-2 sm:p-3">
            <img src={ntrtrs} alt="" className="w-full h-full object-cover opacity-80 grayscale-[30%]" />
          </div>
          <div className="craft-transition-stack-mid absolute inset-0 bg-white border border-[#d3cdc2] shadow-sm transform rotate-2 group-hover:rotate-6 transition-transform duration-500 p-2 sm:p-3">
            <img src={ntrtrs} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="craft-transition-stack-front absolute inset-0 bg-[#f9f7f3] border border-border flex items-start justify-center pt-3 pb-3 shadow-md transition-transform relative z-10">
            <span className="text-text-muted font-body text-xs uppercase tracking-widest opacity-80 mt-2">
              {t('Prepared Material')}
            </span>
          </div>
        </div>
        
        <div className="craft-transition-text">
          <Text variant="caption" className="uppercase tracking-widest text-text-muted mb-6">
            The Technique Complete
          </Text>
          <Heading variant="display" level={3}>
            Threads await meaning.
          </Heading>
        </div>
      </Container>
    </div>
  );
});

CraftTransition.displayName = 'CraftTransition';
