import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, type InputHTMLAttributes, useId } from 'react'

import { cn } from '../../utils/cn.js'

const inputVariants = cva(
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
)

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants> & {
    label?: string
    hint?: string
    error?: string
  }

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, state, inputSize, label, hint, error, id: idProp, ...props }, ref) => {
    const generatedId = useId()
    const id = idProp ?? generatedId
    const resolvedState = error ? 'error' : state

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-[var(--text-primary)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          aria-invalid={error ? 'true' : undefined}
          className={cn(inputVariants({ state: resolvedState, inputSize }), className)}
          {...props}
        />
        {error && (
          <p id={`${id}-error`} role="alert" className="text-xs text-[var(--border-error)]">
            {error}
          </p>
        )}
        {!error && hint && (
          <p id={`${id}-hint`} className="text-xs text-[var(--text-secondary)]">
            {hint}
          </p>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'

export { Input, inputVariants }
export type { InputProps }
