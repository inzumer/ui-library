import { cva } from 'class-variance-authority';

export const inputStyles = cva(
  [
    'flex w-full rounded-md px-3 py-2',
    'text-sm text-[var(--input-text)]',
    'bg-[var(--input-bg)]',
    'border border-[var(--input-border)]',
    'placeholder:text-[var(--input-placeholder)]',
    'transition-colors duration-150 ease-in-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-focus)] focus-visible:ring-offset-0',
    'focus-visible:border-[var(--input-border-focus)]',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
  ],
  {
    variants: {
      state: {
        default: '',
        error: 'border-[var(--input-border-error)] focus-visible:ring-[var(--border-error)]',
      },
      inputSize: {
        sm: 'h-8 px-2 text-xs',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
      },
    },
    defaultVariants: {
      state: 'default',
      inputSize: 'md',
    },
  },
);

export const inputLabelStyles = 'text-sm font-medium text-[var(--text-primary)]';
export const inputErrorStyles = 'text-xs text-[var(--border-error)]';
export const inputHintStyles = 'text-xs text-[var(--text-secondary)]';
