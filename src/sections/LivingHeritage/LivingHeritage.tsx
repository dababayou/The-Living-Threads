import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Section } from '../../components/layout';
import { LivingHeritagePresence } from './LivingHeritagePresence';
import { LivingHeritageConnection } from './LivingHeritageConnection';
import { LivingHeritageContinuation } from './LivingHeritageContinuation';
import { LivingHeritageInvitation } from './LivingHeritageInvitation';
import { useIsomorphicLayoutEffect, withMotion, EASE } from '../../animations';

gsap.registerPlugin(ScrollTrigger);

export function LivingHeritage() {
  const scopeRef = useRef<HTMLDivElement>(null);
  const presenceRef = useRef<HTMLDivElement>(null);
  const connectionRef = useRef<HTMLDivElement>(null);
  const continuationRef = useRef<HTMLDivElement>(null);
  const invitationRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      withMotion(() => {
        
        // ----------------------------------------------------
        // Frame 1: Presence
        // ----------------------------------------------------
        const qPres = gsap.utils.selector(presenceRef);
        const tlPres = gsap.timeline({
          scrollTrigger: {
            trigger: presenceRef.current,
            start: 'top 70%',
            once: true,
          }
        });
        
        tlPres.fromTo(qPres('.living-presence-visual'),
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 1.8, ease: EASE.default }
        )
        .fromTo(qPres('.living-presence-text'),
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 1.6, ease: EASE.default },
          "<1.0" // Begins arriving exactly as the portrait settles, feeling like natural reflection
        );

        // ----------------------------------------------------
        // Frame 2: Connection
        // ----------------------------------------------------
        const qConn = gsap.utils.selector(connectionRef);
        const tlConn = gsap.timeline({
          scrollTrigger: {
            trigger: connectionRef.current,
            start: 'top 75%',
            once: true,
          }
        });

        tlConn.fromTo(qConn('.living-connection-visual'),
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 1.8, ease: EASE.default }
        )
        .fromTo(qConn('.living-connection-visual-small'),
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 1.6, ease: EASE.default },
          "<0.6" // Conversational: responds to the first portrait while it is still arriving
        )
        .fromTo(qConn('.living-connection-text'),
          { opacity: 0, y: 6 },
          { opacity: 1, y: 0, duration: 1.6, ease: EASE.default },
          "<1.0"
        );

        // ----------------------------------------------------
        // Frame 3: Continuation
        // ----------------------------------------------------
        const qCont = gsap.utils.selector(continuationRef);
        const tlCont = gsap.timeline({
          scrollTrigger: {
            trigger: continuationRef.current,
            start: 'top 75%',
            once: true,
          }
        });

        tlCont.fromTo(qCont('.living-continuation-visual'),
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 1.8, ease: EASE.default }
        )
        .fromTo(qCont('.living-continuation-visual-wide'),
          { opacity: 0, y: 6 },
          { opacity: 1, y: 0, duration: 1.6, ease: EASE.default },
          "<0.4" // High emotional density: they coexist and emerge almost together
        )
        .fromTo(qCont('.living-continuation-text'),
          { opacity: 0, y: 6 },
          { opacity: 1, y: 0, duration: 1.6, ease: EASE.default },
          "<1.0"
        );

        // ----------------------------------------------------
        // Frame 4: Invitation
        // ----------------------------------------------------
        const qInv = gsap.utils.selector(invitationRef);
        const tlInv = gsap.timeline({
          scrollTrigger: {
            trigger: invitationRef.current,
            start: 'top 80%',
            once: true,
          }
        });

        tlInv.fromTo(qInv('.living-invitation-visual'),
          { opacity: 0, y: 4 },
          { opacity: 1, y: 0, duration: 2.0, ease: EASE.default }
        )
        .fromTo(qInv('.living-invitation-text'),
          { opacity: 0, y: 4 },
          { opacity: 1, y: 0, duration: 2.0, ease: EASE.default },
          "<0.8" // The longest, calmest overlapping fade on the website
        );

      });
    }, scopeRef);
    return () => ctx.revert();
  }, []);

  return (
    <Section id="living-heritage" className="relative text-text overflow-hidden py-0">
      <div ref={scopeRef}>
        <LivingHeritagePresence ref={presenceRef} />
        <LivingHeritageConnection ref={connectionRef} />
        <LivingHeritageContinuation ref={continuationRef} />
        <LivingHeritageInvitation ref={invitationRef} />
      </div>
    </Section>
  );
}
