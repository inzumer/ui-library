import { cva } from 'class-variance-authority';

export const languageStyles =
  'relative inline-flex items-center gap-1 rounded-md border border-[var(--border-default)] bg-[var(--surface-secondary)] p-1';

export const languageIndicatorStyles =
  'absolute left-0 top-0 rounded bg-[var(--btn-primary-bg)] transition-[transform,width,height] duration-200 ease-out';

export const languageOptionStyles = cva(
  'relative z-10 rounded px-2.5 py-1 text-xs font-semibold uppercase transition-colors duration-200 ease-out',
  {
    variants: {
      selected: {
        true: 'text-[var(--btn-primary-text)]',
        false: 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
      },
    },
    defaultVariants: {
      selected: false,
    },
  },
);
