import type { ReactNode, ElementType } from 'react';
import { cn } from '../../../lib/utils';

export type TextVariant = 'body' | 'small' | 'caption' | 'muted';

export interface TextProps {
  children: ReactNode;
  variant?: TextVariant;
  className?: string;
  as?: ElementType;
}

export function Text({ 
  children, 
  variant = 'body', 
  className, 
  as: Component = 'span' 
}: TextProps) {
  const variants = {
    body: 'font-body text-base text-text leading-relaxed',
    small: 'font-body text-sm text-text leading-relaxed',
    caption: 'font-body text-xs text-text-muted',
    muted: 'font-body text-base text-text-muted leading-relaxed',
  };

  return (
    <Component className={cn(variants[variant], className)}>
      {children}
    </Component>
  );
}
