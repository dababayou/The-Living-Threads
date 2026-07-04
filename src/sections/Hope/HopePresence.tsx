import { forwardRef } from 'react';
import { Container } from '../../components/layout';
import { Text } from '../../components/typography';

export const HopePresence = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <Container className="pt-32 lg:pt-64 pb-32 lg:pb-56">
        <div className="flex flex-col items-center">
          
          {/* 
            Presence
            Human presence remains, but no longer dominates.
            Generous negative space surrounding both visuals.
            No overlapping. Typography separated vertically.
          */}
          
          <div className="hope-presence-visual-primary w-full max-w-lg aspect-[3/4] bg-gradient-to-br from-[#dcd9d2] to-surface shadow-sm opacity-85 mb-24 lg:mb-40"></div>
          
          <div className="hope-presence-visual-secondary w-full max-w-3xl aspect-[16/9] bg-gradient-to-t from-surface to-[#d3cdc2] shadow-sm opacity-80 mb-32 lg:mb-48"></div>

          <div className="hope-presence-text max-w-2xl text-center mx-auto">
            <Text variant="body" className="text-xl lg:text-2xl leading-loose font-light opacity-90">
              The hands will eventually rest. The threads will fade. But the meaning we weave together outlasts us all.
            </Text>
          </div>

        </div>
      </Container>
    </div>
  );
});

HopePresence.displayName = 'HopePresence';
