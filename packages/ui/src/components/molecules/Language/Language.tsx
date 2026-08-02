import { forwardRef, useLayoutEffect, useRef, useState, type HTMLAttributes } from 'react';
import { cn } from '@utils';
import {
  languageIndicatorStyles,
  languageOptionStyles,
  languageStyles,
} from './Language.styles';

export interface LanguageOption {
  value: string;
  label: string;
}

export type LanguageProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  options: LanguageOption[];
  value: string;
  onChange: (value: string) => void;
};

type IndicatorRect = { left: number; top: number; width: number; height: number };

export const Language = forwardRef<HTMLDivElement, LanguageProps>(
  ({ options, value, onChange, className, ...props }, ref) => {
    const buttonRefs = useRef(new Map<string, HTMLButtonElement>());
    const [indicator, setIndicator] = useState<IndicatorRect | null>(null);

    useLayoutEffect(() => {
      const activeButton = buttonRefs.current.get(value);
      if (!activeButton) {
        return;
      }

      setIndicator({
        left: activeButton.offsetLeft,
        top: activeButton.offsetTop,
        width: activeButton.offsetWidth,
        height: activeButton.offsetHeight,
      });
    }, [value, options]);

    return (
      <div
        ref={ref}
        role="listbox"
        aria-label="Language selector"
        className={cn(languageStyles, className)}
        {...props}
      >
        {indicator && (
          <span
            aria-hidden
            className={languageIndicatorStyles}
            style={{
              width: indicator.width,
              height: indicator.height,
              transform: `translate(${indicator.left}px, ${indicator.top}px)`,
            }}
          />
        )}
        {options.map((option) => {
          const selected = option.value === value;

          return (
            <button
              key={option.value}
              ref={(node) => {
                if (node) {
                  buttonRefs.current.set(option.value, node);
                } else {
                  buttonRefs.current.delete(option.value);
                }
              }}
              type="button"
              role="option"
              aria-selected={selected}
              onClick={() => onChange(option.value)}
              className={languageOptionStyles({ selected })}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    );
  },
);

Language.displayName = 'Language';
