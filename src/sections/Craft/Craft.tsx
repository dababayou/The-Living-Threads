import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Section } from '../../components/layout';
import { CraftIntro } from './CraftIntro';
import { CraftGesture } from './CraftGesture';
// import { CraftTools } from './CraftTools';
import { CraftRhythm } from './CraftRhythm';
import { CraftTransition } from './CraftTransition';
import { useIsomorphicLayoutEffect, withMotion, EASE, DURATION } from '../../animations';

gsap.registerPlugin(ScrollTrigger);

export function Craft() {
  const scopeRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const gestureRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const rhythmRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      withMotion(() => {
        // ----------------------------------------------------
        // Beat 1: Intro (Soft emergence, no dramatic entrance)
        // ----------------------------------------------------
        const qIntro = gsap.utils.selector(introRef);
        const tlIntro = gsap.timeline({
          scrollTrigger: {
            trigger: introRef.current,
            start: 'top 80%',
          }
        });
        
        // Very soft opacity and percentage-based vertical movement to avoid parallax conflict.
        tlIntro.fromTo(qIntro('.craft-intro-visual'),
          { opacity: 0, yPercent: 5 },
          { opacity: 1, yPercent: 0, duration: DURATION.slower, ease: EASE.default }
        )
        .fromTo(qIntro('.craft-intro-caption'),
          { opacity: 0 },
          { opacity: 1, duration: DURATION.base, ease: EASE.inOut },
          "-=0.2"
        )
        .fromTo(qIntro('.craft-intro-text'),
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, stagger: 0.15, duration: DURATION.slow, ease: EASE.default },
          "-=0.2"
        );

        // ----------------------------------------------------
        // Beat 2 & 3: Gesture (Image -> Caption -> Narrative)
        // ----------------------------------------------------
        const qGes = gsap.utils.selector(gestureRef);
        const gestureBlocks = qGes('.craft-gesture-block');
        
        gestureBlocks.forEach((block) => {
          const qBlock = gsap.utils.selector(block);
          const tl = gsap.timeline({
            scrollTrigger: { trigger: block, start: 'top 85%' } // started earlier
          });
          
          tl.fromTo(qBlock('.craft-gesture-visual'),
            { opacity: 0, yPercent: 5 },
            { opacity: 1, yPercent: 0, duration: DURATION.slow, ease: EASE.default }
          )
          .fromTo(qBlock('.craft-gesture-caption'),
            { opacity: 0 },
            { opacity: 1, duration: DURATION.base, ease: EASE.inOut },
            "-=0.4"
          )
          .fromTo(qBlock('.craft-gesture-text'),
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.default },
            "-=0.6"
          );
          
          // Midground parallax drag: animate both visual and caption so they don't overlap
          gsap.to(qBlock('.craft-gesture-visual, .craft-gesture-caption'), {
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
        // Beat 4: Tools (Follow human gesture)
        // ----------------------------------------------------
        const qTools = gsap.utils.selector(toolsRef);
        const toolBlocks = qTools('.craft-tool-block');
        
        toolBlocks.forEach((block) => {
          const qBlock = gsap.utils.selector(block);
          const tl = gsap.timeline({
            scrollTrigger: { trigger: block, start: 'top 80%' }
          });
          
          tl.fromTo(qBlock('.craft-tool-visual'),
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: DURATION.slower, ease: EASE.default }
          )
          .fromTo(qBlock('.craft-tool-caption'),
            { opacity: 0 },
            { opacity: 1, duration: DURATION.base, ease: EASE.inOut },
            "-=0.2"
          )
          .fromTo(qBlock('.craft-tool-text'),
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: DURATION.slow, ease: EASE.default },
            "-=0.2"
          );

          gsap.to(qBlock('.craft-tool-visual'), {
            y: 30,
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
        // Beat 5: Rhythm (Increased density, calm pacing)
        // ----------------------------------------------------
        const qRhythm = gsap.utils.selector(rhythmRef);
        
        gsap.fromTo(qRhythm('.craft-rhythm-intro'),
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: DURATION.slow, scrollTrigger: { trigger: rhythmRef.current, start: 'top 85%' } }
        );

        const rhythmBlocks = qRhythm('.craft-rhythm-block');
        rhythmBlocks.forEach((block) => {
          const qBlock = gsap.utils.selector(block);
          const tl = gsap.timeline({
            scrollTrigger: { trigger: block, start: 'top 85%' }
          });

          tl.fromTo(qBlock('.craft-rhythm-visual'),
            { opacity: 0, yPercent: 5 },
            { opacity: 1, yPercent: 0, duration: DURATION.slower, ease: EASE.default }
          )
          .fromTo(qBlock('.craft-rhythm-caption'),
            { opacity: 0 },
            { opacity: 1, duration: DURATION.base, ease: EASE.inOut },
            "-=0.4"
          );

          gsap.to(qBlock('.craft-rhythm-visual, .craft-rhythm-caption'), {
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
        // Beat 6: Transition (Everything settles)
        // ----------------------------------------------------
        const qTrans = gsap.utils.selector(transitionRef);
        const tlTrans = gsap.timeline({
          scrollTrigger: { trigger: transitionRef.current, start: 'top 85%' }
        });

        tlTrans.fromTo(qTrans('.craft-transition-line'),
          { scaleY: 0, transformOrigin: 'top center' },
          { scaleY: 1, duration: DURATION.slow, ease: EASE.default }
        )
        .fromTo(qTrans('.craft-transition-crosshair'),
          { opacity: 0, scaleX: 0 },
          { opacity: 1, scaleX: 1, duration: DURATION.base, ease: EASE.inOut },
          "-=0.2"
        )
        // Stack elements assemble gently to signify bundled thread
        .fromTo(qTrans('.craft-transition-stack-back'),
          { opacity: 0, rotate: 0 },
          { opacity: 1, rotate: -3, duration: DURATION.slow, ease: EASE.default },
          "-=0.4"
        )
        .fromTo(qTrans('.craft-transition-stack-mid'),
          { opacity: 0, rotate: 0 },
          { opacity: 1, rotate: 2, duration: DURATION.slow, ease: EASE.default },
          "-=0.6"
        )
        .fromTo(qTrans('.craft-transition-stack-front'),
          { opacity: 0 },
          { opacity: 1, duration: DURATION.base, ease: EASE.default },
          "-=0.6"
        )
        .fromTo(qTrans('.craft-transition-text'),
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, stagger: 0.1, duration: DURATION.base, ease: EASE.default },
          "-=0.4"
        );

      });
    }, scopeRef);
    return () => ctx.revert();
  }, []);

  return (
    <Section id="craft" className="relative text-text overflow-hidden pt-0 pb-24 lg:pb-32">
      <div ref={scopeRef}>
        <CraftIntro ref={introRef} />
        <CraftGesture ref={gestureRef} />
        {/* <CraftTools ref={toolsRef} /> */}
        <CraftRhythm ref={rhythmRef} />
        <CraftTransition ref={transitionRef} />
      </div>
    </Section>
  );
}
