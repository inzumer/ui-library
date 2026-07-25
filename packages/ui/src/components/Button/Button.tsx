import { cva, type VariantProps } from 'class-variance-authority'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

import { cn } from '../../utils/cn.js'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'font-medium text-sm leading-none',
    'rounded-md',
    'transition-colors duration-150 ease-in-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-focus)] focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'select-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)]',
          'border border-[var(--btn-primary-border)]',
          'hover:bg-[var(--btn-primary-bg-hover)]',
          'active:bg-[var(--btn-primary-bg-active)]',
        ],
        secondary: [
          'bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)]',
          'border border-[var(--btn-secondary-border)]',
          'hover:bg-[var(--btn-secondary-bg-hover)]',
          'active:bg-[var(--btn-secondary-bg-active)]',
        ],
        ghost: [
          'bg-[var(--btn-ghost-bg)] text-[var(--btn-ghost-text)]',
          'border border-[var(--btn-ghost-border)]',
          'hover:bg-[var(--btn-ghost-bg-hover)]',
          'active:bg-[var(--btn-ghost-bg-active)]',
        ],
        destructive: [
          'bg-[var(--btn-destructive-bg)] text-[var(--btn-destructive-text)]',
          'border border-[var(--btn-destructive-border)]',
          'hover:bg-[var(--btn-destructive-bg-hover)]',
          'active:bg-[var(--btn-destructive-bg-active)]',
        ],
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
        icon: 'h-10 w-10',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
export type { ButtonProps }
