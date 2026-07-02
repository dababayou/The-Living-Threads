import { useState, useEffect } from 'react';

export const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

export function getPrefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(reducedMotionQuery).matches;
}

export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(getPrefersReducedMotion());

  useEffect(() => {
    const mediaQuery = window.matchMedia(reducedMotionQuery);
    
    const handleChange = () => {
      setReducedMotion(mediaQuery.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return reducedMotion;
}
