import { forwardRef } from 'react';
import { Container } from '../../components/layout';
import { Text } from '../../components/typography';
import seratImg from '../../assets/images/serat.webp';
import putarImg from '../../assets/images/putar.jpg';

export const CraftGesture = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <Container className="mb-32 lg:mb-48">
        <div className="flex flex-col gap-32 lg:gap-56">
          
          {/* Gesture 1: Pulling */}
          <div className="craft-gesture-block grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
            <div className="lg:col-span-8 lg:col-start-1 relative z-10 order-1">
              <img src={seratImg} alt="Pulling the raw fiber" className="craft-gesture-visual w-full aspect-[4/3] object-cover rounded-sm shadow-sm" />
              <Text variant="caption" className="craft-gesture-caption absolute -bottom-6 left-0 lg:left-12 text-text-muted italic">
                Pulling the raw fiber.
              </Text>
            </div>
            <div className="craft-gesture-text lg:col-span-5 lg:col-start-7 lg:-mt-32 relative z-20 order-2">
              <div className="bg-background/95 backdrop-blur-md p-8 lg:p-12 border border-border shadow-sm">
                <Text variant="body" className="text-lg leading-relaxed">
                  Resistance is met with steady force. The hands do not rush; they negotiate with the material, sensing its tension and yielding when necessary.
                </Text>
              </div>
            </div>
          </div>

          {/* Gesture 2: Twisting */}
          <div className="craft-gesture-block grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
            <div className="craft-gesture-text lg:col-span-5 lg:col-start-2 relative z-20 lg:-mb-32 order-2 lg:order-1">
              <div className="bg-background/95 backdrop-blur-md p-8 lg:p-12 border border-border shadow-sm lg:text-right">
                <Text variant="body" className="text-lg leading-relaxed">
                  A deliberate twist introduces strength. Hundreds of identical motions accumulate to transform fragility into resilience.
                </Text>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 relative z-10 order-1 lg:order-2">
              <img src={putarImg} alt="Twisting motion between thumb and index" className="craft-gesture-visual w-full aspect-[4/5] lg:aspect-[3/4] object-cover rounded-sm shadow-sm" />
              <Text variant="caption" className="craft-gesture-caption absolute -bottom-8 right-0 lg:right-12 text-text-muted italic">
                Twisting motion between thumb and index.
              </Text>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
});

CraftGesture.displayName = 'CraftGesture';
