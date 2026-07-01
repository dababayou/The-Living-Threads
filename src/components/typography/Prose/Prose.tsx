import type { ReactNode } from 'react';
import { cn } from '../../../lib/utils';

export interface ProseProps {
  children: ReactNode;
  className?: string;
}

export function Prose({ children, className }: ProseProps) {
  return (
    <div className={cn("max-w-reading mx-auto font-body text-lg leading-relaxed text-text space-y-6", className)}>
      {children}
    </div>
  );
}
