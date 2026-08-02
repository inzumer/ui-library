import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Language } from '@components';

const options = [
  { value: 'es', label: 'ES' },
  { value: 'en', label: 'EN' },
];

describe('Language', () => {
  it('renders an option per entry', () => {
    render(<Language options={options} value="es" onChange={vi.fn()} />);
    expect(screen.getByRole('option', { name: 'ES' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'EN' })).toBeInTheDocument();
  });

  it('marks the current value as selected', () => {
    render(<Language options={options} value="en" onChange={vi.fn()} />);
    expect(screen.getByRole('option', { name: 'EN' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('option', { name: 'ES' })).toHaveAttribute('aria-selected', 'false');
  });

  it('calls onChange with the selected value', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Language options={options} value="es" onChange={onChange} />);
    await user.click(screen.getByRole('option', { name: 'EN' }));
    expect(onChange).toHaveBeenCalledWith('en');
  });

  it('renders a decorative sliding indicator behind the selected option', () => {
    const { container } = render(<Language options={options} value="es" onChange={vi.fn()} />);
    const indicator = container.querySelector('[aria-hidden="true"]');
    expect(indicator).toBeInTheDocument();
    expect(indicator).toHaveClass('transition-[transform,width,height]');
  });

  it('applies a custom className alongside its own classes', () => {
    render(<Language options={options} value="es" onChange={vi.fn()} className="custom-class" />);
    expect(screen.getByRole('listbox')).toHaveClass('custom-class', 'relative');
  });
});
