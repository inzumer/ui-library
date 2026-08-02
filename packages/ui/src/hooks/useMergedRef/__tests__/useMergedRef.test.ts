import { describe, expect, it, vi } from 'vitest';
import { useMergedRef } from '../useMergedRef';

describe('useMergedRef', () => {
  it('assigns the node to an object ref', () => {
    const objectRef = { current: null as HTMLDivElement | null };
    const merged = useMergedRef<HTMLDivElement>(objectRef);
    const node = document.createElement('div');

    merged(node);
    expect(objectRef.current).toBe(node);
  });

  it('calls a function ref with the node', () => {
    const fnRef = vi.fn();
    const merged = useMergedRef<HTMLDivElement>(fnRef);
    const node = document.createElement('div');

    merged(node);
    expect(fnRef).toHaveBeenCalledWith(node);
  });

  it('updates every ref when merging multiple refs', () => {
    const objectRef = { current: null as HTMLDivElement | null };
    const fnRef = vi.fn();
    const merged = useMergedRef<HTMLDivElement>(objectRef, fnRef, undefined);
    const node = document.createElement('div');

    merged(node);
    expect(objectRef.current).toBe(node);
    expect(fnRef).toHaveBeenCalledWith(node);
  });

  it('handles being called with null to clear refs', () => {
    const objectRef = { current: document.createElement('div') as HTMLDivElement | null };
    const merged = useMergedRef<HTMLDivElement>(objectRef);

    merged(null);
    expect(objectRef.current).toBeNull();
  });
});
