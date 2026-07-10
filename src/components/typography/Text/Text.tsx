import type { ReactNode, ElementType } from 'react';
import { cn } from '../../../lib/utils';
import { useLanguage } from '../../../contexts/LanguageContext';
import { translations } from '../../../content/translations';

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
  const { language } = useLanguage();

  const variants = {
    body: 'font-body text-base text-text leading-relaxed',
    small: 'font-body text-sm text-text leading-relaxed',
    caption: 'font-body text-xs text-text-muted',
    muted: 'font-body text-base text-text-muted leading-relaxed',
  };

  let displayContent = children;
  if (typeof children === 'string') {
    const trimmed = children.trim();
    if (translations[language] && translations[language][trimmed]) {
      displayContent = children.replace(trimmed, translations[language][trimmed]);
    }
  }

  return (
    <Component className={cn(variants[variant], className)}>
      {displayContent}
    </Component>
  );
}
