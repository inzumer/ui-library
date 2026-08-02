import { cva } from 'class-variance-authority';

export const snackbarWrapperStyles =
  'pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4';

export const snackbarStyles = cva(
  [
    'pointer-events-auto rounded-md border px-4 py-3 text-sm shadow-lg',
    'transition-all duration-200 ease-out',
  ],
  {
    variants: {
      status: {
        info: 'border-transparent bg-[var(--surface-inverse)] text-[var(--text-inverse)]',
        success: 'border-transparent bg-[rgb(var(--color-success-600))] text-white',
        error: 'border-transparent bg-[rgb(var(--color-danger-600))] text-white',
        warning:
          'border-transparent bg-[rgb(var(--color-warning-500))] text-[rgb(var(--color-neutral-900))]',
      },
      visible: {
        true: 'translate-y-0 opacity-100',
        false: 'translate-y-2 opacity-0',
      },
    },
    defaultVariants: {
      status: 'info',
      visible: false,
    },
  },
);
