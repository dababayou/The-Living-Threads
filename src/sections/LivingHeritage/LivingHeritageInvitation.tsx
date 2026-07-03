import { forwardRef } from 'react';
import { Container } from '../../components/layout';
import { Text } from '../../components/typography';

export const LivingHeritageInvitation = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <Container className="pb-32 lg:pb-64">
        {/* 
          Invitation: Leave emotional space. The story never ended. 
          Generous negative space.
        */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32 w-full max-w-5xl mx-auto">
          
          <div className="living-invitation-text max-w-sm order-2 lg:order-1 text-center lg:text-left lg:mr-auto">
            <Text variant="body" className="text-xl lg:text-2xl leading-loose text-text-muted">
              The threads we weave today are the stories our children will wear tomorrow.
            </Text>
          </div>
          
          <div className="living-invitation-visual w-full max-w-sm lg:w-1/2 aspect-[2/3] bg-gradient-to-b from-[#e3dfd7] to-surface shadow-sm rounded-sm order-1 lg:order-2"></div>
          
        </div>
      </Container>
    </div>
  );
});

LivingHeritageInvitation.displayName = 'LivingHeritageInvitation';
