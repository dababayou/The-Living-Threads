import type { ReactNode, ElementType } from 'react';
import { cn } from '../../../lib/utils';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingVariant = 'display' | 'headline' | 'title' | 'eyebrow';

export interface HeadingProps {
  children: ReactNode;
  level?: HeadingLevel;
  variant?: HeadingVariant;
  className?: string;
}

export function Heading({
  children,
  level = 2,
  variant = 'headline',
  className,
}: HeadingProps) {
  const Component = `h${level}` as ElementType;

  const variants = {
    display: 'font-display text-5xl md:text-6xl lg:text-7xl leading-tight text-text',
    headline: 'font-display text-4xl md:text-5xl leading-tight text-text',
    title: 'font-display text-2xl md:text-3xl leading-snug text-text',
    eyebrow: 'font-body text-sm tracking-widest uppercase text-text-muted',
  };

  return (
    <Component className={cn(variants[variant], className)}>
      {children}
    </Component>
  );
}
