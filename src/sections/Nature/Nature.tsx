import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Section } from '../../components/layout';
import { NatureAtmosphere } from './NatureAtmosphere';
import { NatureNarrative } from './NatureNarrative';
import { NatureMaterials } from './NatureMaterials';
import { NatureTransition } from './NatureTransition';
import { useIsomorphicLayoutEffect, withMotion, EASE, DURATION } from '../../animations';

gsap.registerPlugin(ScrollTrigger);

export function Nature() {
  const scopeRef = useRef<HTMLDivElement>(null);
  
  const atmosphereRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);
  const materialsRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      withMotion(() => {
        
        // ----------------------------------------------------
        // Beat 1 & 2: Atmosphere (Parallax and Slow Reveal)
        // ----------------------------------------------------
        const qAtmo = gsap.utils.selector(atmosphereRef);
        
        // Background slow scale parallax (Atmosphere feels alive)
        // Midground moves slightly slower than scroll (subtle drag) -> achieved via scrub and gentle scale
        gsap.to(qAtmo('.nature-atmosphere-bg'), {
          scale: 1.05,
          ease: 'none',
          scrollTrigger: {
            trigger: atmosphereRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        });

        // ----------------------------------------------------
        // Beat 3: Narrative Reveal
        // ----------------------------------------------------
        const qNarrative = gsap.utils.selector(narrativeRef);
        
        // Slowly resolving typography, no dramatic movement. 
        // Opacity does most of the work.
        gsap.fromTo(qNarrative('.nature-narrative-text'),
          { opacity: 0, y: 15 },
          { 
            opacity: 1, 
            y: 0, 
            duration: DURATION.slower, 
            stagger: 0.3, 
            ease: EASE.default,
            scrollTrigger: {
              trigger: narrativeRef.current,
              start: 'top 80%',
            }
          }
        );

        // ----------------------------------------------------
        // Beat 4 & 5: Material Discovery & Progressive Density
        // ----------------------------------------------------
        const qMat = gsap.utils.selector(materialsRef);
        const blocks = qMat('.nature-material-block');

        blocks.forEach((block) => {
          const qBlock = gsap.utils.selector(block);
          const image = qBlock('.nature-material-image');
          const caption = qBlock('.nature-material-caption');
          const text = qBlock('.nature-material-text');

          // Sequence: Image -> Caption -> Paragraph
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: block,
              start: 'top 80%',
            }
          });

          // Soft erosion reveal for large imagery
          tl.fromTo(image, 
            { opacity: 0, yPercent: 5 },
            { opacity: 1, yPercent: 0, duration: DURATION.slower, ease: EASE.default }
          )
          // Caption blooms
          .fromTo(caption,
            { opacity: 0 },
            { opacity: 1, duration: DURATION.slow, ease: EASE.inOut },
            "-=0.4"
          )
          // Paragraph materializes
          .fromTo(text,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: DURATION.slow, ease: EASE.default },
            "-=0.2"
          );

          // Parallax strategy: Animate both image and caption together so they don't overlap
          gsap.to([image, caption], {
            y: 40,
            ease: 'none',
            scrollTrigger: {
              trigger: block,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            }
          });
        });

        // ----------------------------------------------------
        // Beat 6: Transition into Craft
        // ----------------------------------------------------
        const qTrans = gsap.utils.selector(transitionRef);
        
        const tlTrans = gsap.timeline({
          scrollTrigger: {
            trigger: transitionRef.current,
            start: 'top 85%',
          }
        });

        // Vertical structure draws downward
        tlTrans.fromTo(qTrans('.nature-transition-line'),
          { scaleY: 0, transformOrigin: 'top center' },
          { scaleY: 1, duration: DURATION.slow, ease: EASE.default }
        )
        // Structural crosshair solidifies
        .fromTo(qTrans('.nature-transition-crosshair'),
          { opacity: 0, scaleX: 0 },
          { opacity: 1, scaleX: 1, duration: DURATION.base, ease: EASE.inOut },
          "-=0.2"
        )
        // Final text fades in
        .fromTo(qTrans('.nature-transition-text'),
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, stagger: 0.15, duration: DURATION.slow, ease: EASE.default },
          "-=0.2"
        )
        // Dense threshold grounds the section
        .fromTo(qTrans('.nature-transition-threshold'),
          { opacity: 0 },
          { opacity: 1, duration: DURATION.slower, ease: EASE.inOut },
          "-=0.2"
        );

      });
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="nature" className="relative text-text overflow-hidden !pt-0 pb-24 lg:pb-32">
      <div ref={scopeRef}>
        <NatureAtmosphere ref={atmosphereRef} />
        <NatureNarrative ref={narrativeRef} />
        <NatureMaterials ref={materialsRef} />
        <NatureTransition ref={transitionRef} />
      </div>
    </Section>
  );
}
