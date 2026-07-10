import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Section } from '../../components/layout';
import { HopePresence } from './HopePresence';
import { HopeRelease } from './HopeRelease';
import { HopeBeyond } from './HopeBeyond';
import { useIsomorphicLayoutEffect, withMotion, EASE } from '../../animations';

gsap.registerPlugin(ScrollTrigger);

export function Hope() {
  const scopeRef = useRef<HTMLDivElement>(null);
  const presenceRef = useRef<HTMLDivElement>(null);
  const releaseRef = useRef<HTMLDivElement>(null);
  const beyondRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      withMotion(() => {
        
        // ----------------------------------------------------
        // Frame I: Presence
        // ----------------------------------------------------
        const qPres = gsap.utils.selector(presenceRef);
        const tlPres = gsap.timeline({
          scrollTrigger: {
            trigger: presenceRef.current,
            start: 'top 70%',
            once: true,
          }
        });
        
        tlPres.fromTo(qPres('.hope-presence-visual-primary'),
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 2.0, ease: EASE.default }
        )
        .fromTo(qPres('.hope-presence-visual-secondary'),
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 2.0, ease: EASE.default },
          "<0.6" // Subtle delay, no dramatic overlap
        )
        .fromTo(qPres('.hope-presence-text'),
          { opacity: 0, y: 4 },
          { opacity: 1, y: 0, duration: 1.8, ease: EASE.default },
          "<1.4" // Appears gently after images establish presence
        );

        // ----------------------------------------------------
        // Frame II: Release
        // ----------------------------------------------------
        const qRel = gsap.utils.selector(releaseRef);
        const tlRel = gsap.timeline({
          scrollTrigger: {
            trigger: releaseRef.current,
            start: 'top 75%',
            once: true,
          }
        });

        tlRel.fromTo(qRel('.hope-release-visual-wide'),
          { opacity: 0, y: 4 },
          { opacity: 1, y: 0, duration: 2.4, ease: EASE.default }
        )
        .fromTo(qRel('.hope-release-visual-small'),
          { opacity: 0, y: 4 },
          { opacity: 1, y: 0, duration: 2.4, ease: EASE.default },
          "<0.4" // Earlier overlap, resembling breathing rather than sequential arrival
        )
        .fromTo(qRel('.hope-release-text'),
          { opacity: 0, y: 2 },
          { opacity: 1, y: 0, duration: 2.2, ease: EASE.default },
          "<1.0"
        );

        // ----------------------------------------------------
        // Frame III: Beyond
        // ----------------------------------------------------
        const qBey = gsap.utils.selector(beyondRef);
        const tlBey = gsap.timeline({
          scrollTrigger: {
            trigger: beyondRef.current,
            start: 'top 80%',
            once: true,
          }
        });

        tlBey.fromTo(qBey('.hope-beyond-visual'),
          { opacity: 0, y: 2 },
          { opacity: 1, y: 0, duration: 3.0, ease: EASE.default }
        )
        .fromTo(qBey('.hope-beyond-text'),
          { opacity: 0, y: 2 },
          { opacity: 1, y: 0, duration: 3.0, ease: EASE.default },
          "<0.2" // Almost together, completely dissolving the editorial sequence
        );

      });
    }, scopeRef);
    return () => ctx.revert();
  }, []);

  return (
    <Section id="hope" className="relative text-text overflow-hidden py-0">
      <div ref={scopeRef}>
        <HopePresence ref={presenceRef} />
        <HopeRelease ref={releaseRef} />
        <HopeBeyond ref={beyondRef} />
      </div>
    </Section>
  );
}
