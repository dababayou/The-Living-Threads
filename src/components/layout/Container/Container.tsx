import type { ReactNode } from 'react';
import { cn } from '../../../lib/utils';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-container px-4 sm:px-6 md:px-8", className)}>
      {children}
    </div>
  );
}
