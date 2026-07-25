import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './Card.js'

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('renders all sub-components together', () => {
    render(
      <Card noPadding>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    )
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })

  it('renders CardTitle as the correct heading element', () => {
    render(<CardTitle as="h1">Heading 1</CardTitle>)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Heading 1')
  })

  it('applies custom className', () => {
    render(<Card className="custom-class">Test</Card>)
    expect(screen.getByText('Test')).toHaveClass('custom-class')
  })
})
