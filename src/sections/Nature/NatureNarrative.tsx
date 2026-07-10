import { forwardRef } from 'react';
import { Container } from '../../components/layout';
import { Heading, Prose, Text } from '../../components/typography';
import { useLanguage } from '../../contexts/LanguageContext';

export const NatureNarrative = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useLanguage();

  return (
    <div ref={ref} className="relative z-10">
      <Container className="max-w-[var(--reading-width)] mx-auto text-center lg:text-left mb-32 lg:mb-48 -mt-16 lg:-mt-32">
        {/* 
          Moved upward into the Atmosphere block.
          The environmental canvas directly hands the user's eye to this text.
        */}
        <div className="flex flex-col gap-10 lg:pl-12 border-l-0 lg:border-l border-border py-4">
          <div className="nature-narrative-text">
            <Heading variant="display" level={2}>
              Before the thread, there is the earth.
            </Heading>
          </div>
          
          <div className="nature-narrative-text">
            <Prose className="lg:max-w-md lg:ml-auto text-text-muted">
              <p>
                {t('Nature is the silent collaborator. The colors, the fibers, and the time required to grow them exist long before human hands begin their work. Everything is born from the soil.')}
              </p>
            </Prose>
          </div>
        </div>
      </Container>
    </div>
  );
});

NatureNarrative.displayName = 'NatureNarrative';
