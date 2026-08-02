import { cva } from 'class-variance-authority';

export const cardStyles = cva(
  ['rounded-xl border border-[var(--border-default)] bg-[var(--surface-secondary)]', 'shadow-sm'],
  {
    variants: {
      padding: {
        true: 'p-6',
        false: '',
      },
    },
    defaultVariants: {
      padding: true,
    },
  },
);

export const cardHeaderStyles = 'flex flex-col gap-1.5 p-6';

export const cardTitleStyles = 'text-lg font-semibold leading-none text-[var(--text-primary)]';

export const cardDescriptionStyles = 'text-sm text-[var(--text-secondary)]';

export const cardContentStyles = 'px-6 pb-6';

export const cardFooterStyles = 'flex items-center px-6 pb-6';
