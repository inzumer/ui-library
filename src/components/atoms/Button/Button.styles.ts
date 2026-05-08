import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'font-medium rounded-md',
    'transition-colors duration-base ease-ui',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'motion-reduce:transition-none',
    'min-h-touch min-w-touch',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary-600 text-white',
          'hover:bg-primary-700 active:bg-primary-800',
          'focus-visible:ring-primary-500',
        ],
        secondary: [
          'bg-neutral-100 text-neutral-900 border border-neutral-300',
          'hover:bg-neutral-200 active:bg-neutral-300',
          'focus-visible:ring-neutral-500',
          'dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-600',
          'dark:hover:bg-neutral-700',
        ],
        ghost: [
          'bg-transparent text-neutral-700',
          'hover:bg-neutral-100 active:bg-neutral-200',
          'focus-visible:ring-neutral-500',
          'dark:text-neutral-300 dark:hover:bg-neutral-800',
        ],
        danger: [
          'bg-danger-500 text-white',
          'hover:bg-danger-600 active:bg-danger-600',
          'focus-visible:ring-danger-500',
        ],
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)
