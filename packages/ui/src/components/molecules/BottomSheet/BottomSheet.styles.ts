import { cva } from 'class-variance-authority';

export const bottomSheetOverlayStyles = cva(
  [
    'fixed inset-0 z-50 flex items-end justify-center bg-[var(--surface-overlay)]',
    'transition-opacity duration-200 ease-out',
  ],
  {
    variants: {
      visible: {
        true: 'opacity-100',
        false: 'opacity-0',
      },
    },
    defaultVariants: {
      visible: false,
    },
  },
);

export const bottomSheetPanelStyles = cva(
  [
    'w-full max-w-md rounded-t-xl border border-b-0 border-[var(--border-default)]',
    'bg-[var(--surface-secondary)] p-6 shadow-lg',
    'transition-transform duration-200 ease-out',
  ],
  {
    variants: {
      visible: {
        true: 'translate-y-0',
        false: 'translate-y-full',
      },
    },
    defaultVariants: {
      visible: false,
    },
  },
);

export const bottomSheetHandleStyles =
  'mx-auto mb-4 h-1.5 w-10 rounded-full bg-[var(--border-strong)]';

export const bottomSheetTitleStyles = 'mb-4 text-lg font-semibold text-[var(--text-primary)]';

export const bottomSheetFooterStyles = 'mt-6 flex items-center justify-end gap-2';
