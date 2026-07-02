import gsap from 'gsap';
import { getPrefersReducedMotion } from './preferences';

/**
 * Safely kills a GSAP timeline and cleans up memory
 */
export function killTimeline(tl: gsap.core.Timeline | undefined | null) {
  if (tl) {
    tl.kill();
  }
}

/**
 * Creates a GSAP matchMedia instance for responsive animations
 */
export function createGsapMatchMedia() {
  return gsap.matchMedia();
}

/**
 * Wraps an animation callback to ensure it only fires if reduced motion is false.
 * Fallbacks can be provided to set immediate final states.
 */
export function withMotion(callback: () => void, fallback?: () => void) {
  if (getPrefersReducedMotion()) {
    if (fallback) fallback();
    return;
  }
  callback();
}
