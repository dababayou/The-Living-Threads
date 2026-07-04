import { useRef } from 'react';
import gsap from 'gsap';
import { Section, Container } from '../../components/layout';
import { HeroContent, HeroNarrative } from './HeroContent';
import { HeroVisual } from './HeroVisual';
import { ScrollIndicator } from './ScrollIndicator';
import { useIsomorphicLayoutEffect, withMotion, EASE, DURATION } from '../../animations';

export function Hero() {
  const scopeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    // Wrap animations in gsap.context for proper cleanup
    const ctx = gsap.context(() => {
      // Execute motion only if reduced-motion is not preferred
      withMotion(() => {
        // We use fromTo to guarantee initial styles without flashing 
        // and keep the CSS clean of hardcoded opacity-0 classes
        const qContent = gsap.utils.selector(contentRef);
        const qNarrative = gsap.utils.selector(narrativeRef);
        
        const contentNodes = qContent('.hero-text-node');
        const narrativeNodes = qNarrative('.hero-narrative-node');

        const tl = gsap.timeline({
          defaults: { ease: EASE.default, duration: DURATION.slow }
        });

        // 1. Framing Content Reveal (staggered)
        tl.fromTo(contentNodes, 
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15 }
        )
        // 2. Artwork Reveal
        .fromTo(visualRef.current, 
          { y: 40, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: DURATION.slower },
          "-=0.6" // start before text is completely done
        )
        // 3. Existing Narrative Reveal
        .fromTo(narrativeNodes,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15 },
          "-=0.6"
        )
        // 4. Scroll Indicator Reveal
        .fromTo(indicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: DURATION.base },
          "-=0.4"
        )
        // 5. Scroll Indicator Idle Loop
        .to(indicatorRef.current, {
          y: 8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          duration: DURATION.slower,
        });

      });
    }, scopeRef); // Scope to the parent wrapper

    return () => ctx.revert(); // Cleanup timeline and inline styles
  }, []);

  return (
    <Section id="hero" className="relative min-h-screen pt-24 lg:pt-32 pb-24 flex flex-col justify-center">
      <div ref={scopeRef}>
        <Container className="flex flex-col gap-16 lg:gap-24 items-center">
          <div className="w-full">
            <HeroContent ref={contentRef} />
          </div>
          
          <div className="w-full max-w-4xl">
            <HeroVisual ref={visualRef} />
          </div>
          
          <div className="w-full">
            <HeroNarrative ref={narrativeRef} />
          </div>
        </Container>
        <ScrollIndicator ref={indicatorRef} />
      </div>
    </Section>
  );
}
