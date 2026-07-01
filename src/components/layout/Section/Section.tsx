import type { ReactNode } from 'react';
import { cn } from '../../../lib/utils';

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-section", className)}>
      {children}
    </section>
  );
}
