import { describe, it, expect } from 'vitest'
import { axe } from 'jest-axe'
import { render } from '@/test/render'
import { Button } from '../Button'

describe('Button — accessibility', () => {
  it('has no axe violations — default', async () => {
    const { container } = render(<Button>Click me</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no axe violations — disabled', async () => {
    const { container } = render(<Button disabled>Click me</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no axe violations — loading with text', async () => {
    const { container } = render(<Button isLoading loadingText="Loading...">Submit</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no axe violations — loading without loadingText', async () => {
    const { container } = render(<Button isLoading>Submit</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no axe violations — danger variant', async () => {
    const { container } = render(<Button variant="danger">Delete</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no axe violations — ghost variant', async () => {
    const { container } = render(<Button variant="ghost">Cancel</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no axe violations — secondary variant', async () => {
    const { container } = render(<Button variant="secondary">Secondary</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
