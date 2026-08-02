import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Timeline } from '@components';

describe('Timeline', () => {
  const items = [
    { title: 'Founded', description: ['We started the company.'] },
    { title: 'Series A', description: ['Raised funding.', 'Grew the team.'] },
  ];

  it('renders a title for each item', () => {
    render(<Timeline items={items} />);
    expect(screen.getByText('Founded')).toBeInTheDocument();
    expect(screen.getByText('Series A')).toBeInTheDocument();
  });

  it('renders every description line for each item', () => {
    render(<Timeline items={items} />);
    expect(screen.getByText('Raised funding.')).toBeInTheDocument();
    expect(screen.getByText('Grew the team.')).toBeInTheDocument();
  });

  it('renders one list item per timeline entry', () => {
    render(<Timeline items={items} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(items.length);
  });

  it('applies a custom className alongside its own classes', () => {
    render(<Timeline items={items} className="custom-class" />);
    expect(screen.getByRole('list')).toHaveClass('custom-class', 'flex');
  });
});
