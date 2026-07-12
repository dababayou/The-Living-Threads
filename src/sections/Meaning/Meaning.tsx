import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Section } from '../../components/layout';
import { MeaningArrival } from './MeaningArrival';
import { MeaningLookAgain } from './MeaningLookAgain';
import { MeaningRecognition } from './MeaningRecognition';
import { MeaningPassing } from './MeaningPassing';
import { useIsomorphicLayoutEffect, withMotion, EASE, DURATION } from '../../animations';

gsap.registerPlugin(ScrollTrigger);

export function Meaning() {
  const scopeRef = useRef<HTMLDivElement>(null);
  const arrivalRef = useRef<HTMLDivElement>(null);
  const lookRef = useRef<HTMLDivElement>(null);
  const recRef = useRef<HTMLDivElement>(null);
  const passRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      withMotion(() => {
        
        // ----------------------------------------------------
        // Beat 1: Arrival (Settle into the quiet space)
        // ----------------------------------------------------
        const qArr = gsap.utils.selector(arrivalRef);
        const tlArr = gsap.timeline({
          scrollTrigger: { trigger: arrivalRef.current, start: 'top 70%' }
        });
        
        tlArr.fromTo(qArr('.meaning-arrival-visual'),
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: DURATION.slower, ease: EASE.default }
        )
        .fromTo(qArr('.meaning-arrival-text'),
          { opacity: 0 },
          { opacity: 1, duration: DURATION.slow, ease: EASE.inOut },
          "+=0.2" // Intentionally delayed to enforce reading rhythm
        );

        // ----------------------------------------------------
        // Beat 2: Looking Again (Stable, balanced fades)
        // ----------------------------------------------------
        const qLook = gsap.utils.selector(lookRef);
        const lookBlocks = qLook('.meaning-look-block');
        
        lookBlocks.forEach((block) => {
          const qBlock = gsap.utils.selector(block);
          const tl = gsap.timeline({
            scrollTrigger: { trigger: block, start: 'top 85%' }
          });
          
          tl.fromTo(qBlock('.meaning-look-visual'),
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: DURATION.slow, ease: EASE.default }
          )
          .fromTo(qBlock('.meaning-look-text'),
            { opacity: 0 },
            { opacity: 1, duration: DURATION.base, ease: EASE.inOut },
            "-=0.4"
          );
        });

        // ----------------------------------------------------
        // Beat 3: Recognition (The emotional center)
        // ----------------------------------------------------
        const qRec = gsap.utils.selector(recRef);
        const tlRec = gsap.timeline({
          scrollTrigger: { trigger: recRef.current, start: 'top 70%' }
        });
        
        tlRec.fromTo(qRec('.meaning-recognition-visual'),
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: DURATION.slower, ease: EASE.default }
        )
        .fromTo(qRec('.meaning-recognition-text'),
          { opacity: 0 },
          { opacity: 1, duration: DURATION.slower, ease: EASE.inOut },
          "+=0.4"
        );

        // ----------------------------------------------------
        // Beat 4: Passing (Handover to Living Heritage)
        // ----------------------------------------------------
        const qPass = gsap.utils.selector(passRef);
        const tlPass = gsap.timeline({
          scrollTrigger: { trigger: passRef.current, start: 'top 75%' }
        });
        
        tlPass.fromTo(qPass('.meaning-passing-visual'),
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: DURATION.slower, ease: EASE.default }
        )
        .fromTo(qPass('.meaning-passing-text'),
          { opacity: 0 },
          { opacity: 1, duration: DURATION.slow, ease: EASE.inOut },
          "+=0.2"
        );

      });
    }, scopeRef);
    return () => ctx.revert();
  }, []);

  return (
    <Section id="meaning" className="relative text-text overflow-hidden py-0">
      <div ref={scopeRef}>
        <MeaningArrival ref={arrivalRef} />
        <MeaningLookAgain ref={lookRef} />
        <MeaningRecognition ref={recRef} />
        <MeaningPassing ref={passRef} />
      </div>
    </Section>
  );
}
