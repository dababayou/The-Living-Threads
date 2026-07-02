import { useRef } from 'react';
import gsap from 'gsap';
import { Section, Container } from '../../components/layout';
import { HeroContent } from './HeroContent';
import { HeroVisual } from './HeroVisual';
import { ScrollIndicator } from './ScrollIndicator';
import { useIsomorphicLayoutEffect, withMotion, EASE, DURATION } from '../../animations';

export function Hero() {
  const scopeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    // Wrap animations in gsap.context for proper cleanup
    const ctx = gsap.context(() => {
      // Execute motion only if reduced-motion is not preferred
      withMotion(() => {
        // We use fromTo to guarantee initial styles without flashing 
        // and keep the CSS clean of hardcoded opacity-0 classes
        const q = gsap.utils.selector(contentRef);
        const textNodes = q('.hero-text-node');

        const tl = gsap.timeline({
          defaults: { ease: EASE.default, duration: DURATION.slow }
        });

        // 1. Content Reveal (staggered)
        tl.fromTo(textNodes, 
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15 }
        )
        // 2. Artwork Reveal
        .fromTo(visualRef.current, 
          { y: 40, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: DURATION.slower },
          "-=0.6" // start before text is completely done
        )
        // 3. Scroll Indicator Reveal
        .fromTo(indicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: DURATION.base },
          "-=0.4"
        )
        // 4. Scroll Indicator Idle Loop
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
    <Section id="hero" className="relative min-h-screen !pt-0 !pb-0 flex flex-col justify-center">
      <div ref={scopeRef}>
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Desktop: 5 cols (approx 40%), Mobile: full width */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <HeroContent ref={contentRef} />
          </div>
          
          {/* Desktop: 7 cols (approx 60%), Mobile: full width */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <HeroVisual ref={visualRef} />
          </div>
        </Container>
        <ScrollIndicator ref={indicatorRef} />
      </div>
    </Section>
  );
}
