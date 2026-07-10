import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Section, Container } from '../../components/layout';
import { HeroContent, HeroNarrative } from './HeroContent';
import { ScrollIndicator } from './ScrollIndicator';
import { useIsomorphicLayoutEffect, withMotion, EASE, DURATION } from '../../animations';
import hrobru from '../../assets/images/hrobru.png';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const scopeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      withMotion(() => {
        const qContent = gsap.utils.selector(contentRef);
        const qNarrative = gsap.utils.selector(narrativeRef);
        
        const contentNodes = qContent('.hero-text-node');
        const narrativeNodes = qNarrative('.hero-narrative-node');

        const tl = gsap.timeline({
          defaults: { ease: EASE.default, duration: DURATION.slow }
        });

        // Intro Animation
        tl.fromTo(bgRef.current,
          { opacity: 0 },
          { opacity: 1, duration: DURATION.slower }
        )
        .fromTo(contentNodes, 
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15 },
          "-=0.6"
        )
        .fromTo(indicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: DURATION.base },
          "-=0.4"
        )
        .to(indicatorRef.current, {
          y: 8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          duration: DURATION.slower,
        });

        // Narrative Reveal (Triggered on Scroll instead of initial timeline)
        gsap.fromTo(narrativeNodes,
          { y: 20, opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.15, duration: DURATION.slow, ease: EASE.default,
            scrollTrigger: {
              trigger: narrativeRef.current,
              start: "top 75%",
            }
          }
        );

      });
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="hero" className="relative min-h-screen pt-24 lg:pt-32 pb-24 flex flex-col justify-center">
      {/* Background Image */}
      <div 
        ref={bgRef} 
        className="absolute inset-0 z-[-1] pointer-events-none opacity-0"
      >
        <img 
          src={hrobru} 
          alt="Hero Background" 
          className="w-full h-full object-cover" 
        />
        {/* Soft blur and wash to tone down the busy background */}
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[4px]"></div>
        {/* Radial glow to provide a clear, bright canvas for the dark text in the center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-background)_0%,transparent_60%)] opacity-90"></div>
        {/* CSS gradient to smoothly fade the bottom of the image into the page background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% via-background/80 via-75% to-background to-100%"></div>
      </div>

      <div ref={scopeRef} className="relative z-10 w-full">
        <Container className="flex flex-col items-center">
          {/* Force the main content to take up the full first screen */}
          <div className="w-full min-h-[70vh] lg:min-h-[80vh] flex flex-col justify-center pb-16">
            <HeroContent ref={contentRef} />
          </div>
          
          {/* Push the narrative down so it requires scrolling */}
          <div className="w-full mt-32 lg:mt-64 mb-32">
            <HeroNarrative ref={narrativeRef} />
          </div>
        </Container>
        <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 pointer-events-none">
          <ScrollIndicator ref={indicatorRef} />
        </div>
      </div>
    </Section>
  );
}
