import { forwardRef } from 'react';

export const ScrollIndicator = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span className="w-[1px] h-12 bg-border block"></span>
    </div>
  );
});

ScrollIndicator.displayName = 'ScrollIndicator';
