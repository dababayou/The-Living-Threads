import { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Palette follows the thread's own journey through the ikat process:
 * raw cotton -> mengkudu (morinda) dye bath -> fully dyed, tied thread.
 * Swap these for your real design tokens (e.g. var(--color-mengkudu)) once
 * they're wired up — these are placeholder hexes matching your palette names.
 */
const THREAD_RAW = '#A99878'; // undyed cotton — visible on a white page, still reads "pale" next to the dyed end
const THREAD_MID = '#B96A46'; // mid-dip in the mengkudu bath
const THREAD_DYED = '#8A3324'; // mengkudu red-brick, fully dyed
const THREAD_WEFT = '#C79A3E'; // earth gold, used only for the tie pattern in the woven stretch

// Where along the page (0 -> 1) the thread finishes becoming "woven"
const WOVEN_START = 0.82;

interface Segment {
  d: string;
  startY: number;
  endY: number;
}

export function GlobalThread() {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRectRef = useRef<SVGRectElement>(null);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const updateSize = () => {
      setDimensions({
        w: document.documentElement.clientWidth,
        h: document.documentElement.scrollHeight,
      });
    };

    updateSize();
    window.addEventListener('load', updateSize);
    window.addEventListener('resize', updateSize);

    const observer = new ResizeObserver(() => updateSize());
    observer.observe(document.body);

    return () => {
      window.removeEventListener('load', updateSize);
      window.removeEventListener('resize', updateSize);
      observer.disconnect();
    };
  }, []);

  // One continuous curve, but broken into segments so each stretch can
  // carry its own width/color — a single SVG path can't vary stroke-width
  // along its length, so this is what stands in for a tapering thread.
  const segments = useMemo<Segment[]>(() => {
    const { w, h } = dimensions;
    if (h === 0) return [];

    const segs: Segment[] = [];
    let currentX = w / 2;
    let currentY = 0;

    while (currentY < h) {
      const segmentHeight = 400 + Math.random() * 800;
      const nextY = Math.min(currentY + segmentHeight, h);
      const margin = w * 0.15;
      const nextX = margin + Math.random() * (w - margin * 2);

      const actualHeight = nextY - currentY;
      const cp1X = currentX;
      const cp1Y = currentY + actualHeight * (0.4 + Math.random() * 0.2);
      const cp2X = nextX;
      const cp2Y = nextY - actualHeight * (0.4 + Math.random() * 0.2);

      segs.push({
        d: `M ${currentX} ${currentY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${nextX} ${nextY}`,
        startY: currentY,
        endY: nextY,
      });

      currentX = nextX;
      currentY = nextY;
    }

    return segs;
  }, [dimensions.w, dimensions.h]);

  useEffect(() => {
    if (!segments.length || dimensions.h === 0) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const ctx = gsap.context(() => {
      const maskRect = maskRectRef.current;
      if (!maskRect) return;

      if (prefersReducedMotion) {
        gsap.set(maskRect, { attr: { height: dimensions.h } });
        return;
      }

      // Animating a rect height perfectly maps the reveal to the vertical scroll,
      // avoiding the "lagging" physics of animating offset on a wavy path.
      gsap.to(maskRect, {
        attr: { height: dimensions.h },
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top 50%',
          end: 'bottom 50%',
          scrub: true,
        },
      });
      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, [segments, dimensions.h]);

  if (dimensions.h === 0 || !segments.length) return null;

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full pointer-events-none z-0"
      style={{ height: dimensions.h }}
    >
      <svg width={dimensions.w} height={dimensions.h} className="w-full h-full">
        <defs>
          {/* Keeps the thread legible regardless of what's behind it —
              matters most for the pale raw stage on a white page */}
          <filter id="threadShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.1" floodColor="#000000" floodOpacity="0.18" />
          </filter>

          {/* userSpaceOnUse so the color reflects actual page position,
              not each individual segment's own bounding box */}
          <linearGradient
            id="threadDyeGradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="0"
            y2={dimensions.h}
          >
            <stop offset="0%" stopColor={THREAD_RAW} />
            <stop offset={`${WOVEN_START * 55}%`} stopColor={THREAD_RAW} />
            <stop offset={`${WOVEN_START * 85}%`} stopColor={THREAD_MID} />
            <stop offset={`${WOVEN_START * 100}%`} stopColor={THREAD_DYED} />
          </linearGradient>

          {/* Mask that draws the thread from top to bottom, mapped 1:1 to scroll */}
          <mask id="thread-reveal-mask">
            <rect ref={maskRectRef} x="0" y="0" width="100%" height="0" fill="white" />
          </mask>
        </defs>

        <g mask="url(#thread-reveal-mask)">
          {segments.map((seg, i) => {
            // Use each segment's actual midpoint on the page, not its index —
            // segment heights are randomized, so index alone would drift.
            const t = (seg.startY + seg.endY) / 2 / dimensions.h;
            const isWoven = t > WOVEN_START;

            // Quadratic growth: thin for a long stretch, then thickens fast
            // right as it turns into cloth.
            const strokeWidth = 1 + t * t * 9;

            if (!isWoven) {
              return (
                <path
                  key={i}
                  d={seg.d}
                  stroke="url(#threadDyeGradient)"
                  strokeWidth={strokeWidth}
                  // Butt caps prevent overlapping seam dots between segments.
                  strokeLinecap="butt"
                  fill="none"
                  opacity={0.85}
                  filter="url(#threadShadow)"
                />
              );
            }

            // Woven stretch: a continuous dyed CORE (never breaks) plus a
            // narrower gold TIE pattern riding on top of it. The gaps in
            // the tie reveal the core underneath, not the page — so it
            // never reads as a broken thread. Closer to real ikat too:
            // a tie binds a thread that stays whole underneath it.
            const tieWidth = strokeWidth * 0.55;
            const dash = tieWidth * 1.4;
            const gap = 10 + t * 6;

            return (
              <g key={i} filter="url(#threadShadow)">
                <path
                  d={seg.d}
                  stroke={THREAD_DYED}
                  strokeWidth={strokeWidth}
                  strokeLinecap="butt"
                  fill="none"
                  opacity={0.85}
                />
                <path
                  d={seg.d}
                  stroke={THREAD_WEFT}
                  strokeWidth={tieWidth}
                  strokeDasharray={`${dash} ${gap}`}
                  strokeLinecap="round"
                  fill="none"
                  opacity={0.95}
                />
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}