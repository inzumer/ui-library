import { describe, expect, it } from 'vitest';
import { cn } from '../cn';

describe('cn', () => {
  it('joins plain string classes', () => {
    expect(cn('flex', 'items-center')).toBe('flex items-center');
  });

  it('drops falsy values', () => {
    expect(cn('flex', false, undefined, null, '', 'gap-2')).toBe('flex gap-2');
  });

  it('supports conditional object syntax', () => {
    expect(cn('flex', { 'items-center': true, hidden: false })).toBe('flex items-center');
  });

  it('resolves conflicting Tailwind utilities by keeping the last one', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4');
  });

  it('lets a later className override an earlier conflicting one', () => {
    expect(cn('bg-red-500 text-white', 'bg-blue-500')).toBe('text-white bg-blue-500');
  });
});
