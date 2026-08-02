import { cva } from 'class-variance-authority';

export const modalOverlayStyles = cva(
  [
    'fixed inset-0 z-50 flex items-center justify-center bg-[var(--surface-overlay)] p-4',
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

export const modalPanelStyles = cva(
  [
    'w-full max-w-md rounded-xl border border-[var(--border-default)] bg-[var(--surface-secondary)] p-6 shadow-lg',
    'transition-all duration-200 ease-out',
  ],
  {
    variants: {
      visible: {
        true: 'scale-100 opacity-100',
        false: 'scale-95 opacity-0',
      },
    },
    defaultVariants: {
      visible: false,
    },
  },
);

export const modalTitleStyles = 'mb-4 text-lg font-semibold text-[var(--text-primary)]';

export const modalFooterStyles = 'mt-6 flex items-center justify-end gap-2';
