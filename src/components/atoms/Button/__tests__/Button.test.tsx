import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@/test/render'
import userEvent from '@testing-library/user-event'
import { Button } from '../Button'

describe('Button', () => {
  describe('rendering', () => {
    it('renders children', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
    })

    it('renders as a button element', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button')).toBeInstanceOf(HTMLButtonElement)
    })

    it('forwards ref to the button element', () => {
      const ref = { current: null as HTMLButtonElement | null }
      render(<Button ref={ref}>Click me</Button>)
      expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    })

    it('passes additional html attributes', () => {
      render(<Button data-testid="my-btn">Click</Button>)
      expect(screen.getByTestId('my-btn')).toBeInTheDocument()
    })

    it('merges custom className with variant classes', () => {
      render(<Button className="extra-class">Click</Button>)
      expect(screen.getByRole('button')).toHaveClass('extra-class')
    })

    it('matches snapshot — default', () => {
      const { container } = render(<Button>Click me</Button>)
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  describe('variants', () => {
    it.each(['primary', 'secondary', 'ghost', 'danger'] as const)(
      'renders %s variant without error',
      (variant) => {
        render(<Button variant={variant}>Click</Button>)
        expect(screen.getByRole('button')).toBeInTheDocument()
      },
    )

    it.each(['sm', 'md', 'lg'] as const)('renders %s size without error', (size) => {
      render(<Button size={size}>Click</Button>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })
  })

  describe('disabled state', () => {
    it('is disabled when disabled prop is passed', () => {
      render(<Button disabled>Click me</Button>)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('does not expose aria-disabled on native disabled button', () => {
      render(<Button disabled>Click me</Button>)
      expect(screen.getByRole('button')).toBeDisabled()
      expect(screen.getByRole('button')).not.toHaveAttribute('aria-disabled')
    })

    it('does not call onClick when disabled', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()
      render(
        <Button disabled onClick={onClick}>
          Click me
        </Button>,
      )
      await user.click(screen.getByRole('button'))
      expect(onClick).not.toHaveBeenCalled()
    })
  })

  describe('loading state', () => {
    it('renders spinner when isLoading is true', () => {
      render(<Button isLoading>Submit</Button>)
      const button = screen.getByRole('button')
      const spinner = button.querySelector('svg')
      expect(spinner).toBeInTheDocument()
    })

    it('sets aria-busy when loading', () => {
      render(<Button isLoading>Submit</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true')
    })

    it('is disabled when loading', () => {
      render(<Button isLoading>Submit</Button>)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('shows loadingText when provided', () => {
      render(<Button isLoading loadingText="Saving...">Submit</Button>)
      expect(screen.getByRole('button')).toHaveTextContent('Saving...')
    })

    it('shows children when loading but no loadingText', () => {
      render(<Button isLoading>Submit</Button>)
      expect(screen.getByRole('button')).toHaveTextContent('Submit')
    })
  })

  describe('keyboard interaction', () => {
    it('calls onClick when Enter is pressed', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()
      render(<Button onClick={onClick}>Click me</Button>)
      screen.getByRole('button').focus()
      await user.keyboard('{Enter}')
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('calls onClick when Space is pressed', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()
      render(<Button onClick={onClick}>Click me</Button>)
      screen.getByRole('button').focus()
      await user.keyboard('{ }')
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('is reachable via Tab', async () => {
      const user = userEvent.setup()
      render(<Button>Click me</Button>)
      await user.tab()
      expect(screen.getByRole('button')).toHaveFocus()
    })
  })

  describe('click interaction', () => {
    it('calls onClick when clicked', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()
      render(<Button onClick={onClick}>Click me</Button>)
      await user.click(screen.getByRole('button'))
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })
})
