import { forwardRef } from 'react';
import { Container } from '../../components/layout';
import { Text } from '../../components/typography';
import presence from '../../assets/images/presence.jpg';

export const LivingHeritagePresence = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <Container className="pt-32 lg:pt-48 pb-32 lg:pb-48">
        <div className="flex flex-col items-start lg:items-center">
          {/* 
            Presence: Medium-scale environmental portrait.
            Eye-level. Posture implies unseen presence.
          */}
          <div className="living-presence-visual w-full max-w-xl aspect-[4/5] shadow-sm rounded-sm mb-24 lg:mb-32 overflow-hidden">
            <img loading="lazy" src={presence} alt="Tradition continues to be lived" className="w-full h-full object-cover cursor-pointer" />
          </div>
          
          <div className="living-presence-text max-w-lg lg:ml-24">
            <Text variant="body" className="text-xl lg:text-2xl leading-loose text-text-muted">
              Tradition does not survive because it is preserved in a museum. It survives because it continues to be lived by those who carry it.
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
});

LivingHeritagePresence.displayName = 'LivingHeritagePresence';
