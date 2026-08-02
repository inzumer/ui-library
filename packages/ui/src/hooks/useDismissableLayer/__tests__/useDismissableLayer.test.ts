import { renderHook } from '@testing-library/react';
import { useRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { useDismissableLayer } from '../useDismissableLayer';

describe('useDismissableLayer', () => {
  it('calls onClose on Escape when open', () => {
    const onClose = vi.fn();
    renderHook(() => {
      const panelRef = useRef<HTMLDivElement | null>(null);
      useDismissableLayer(true, onClose, panelRef);
    });

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it('does not call onClose on Escape when not open', () => {
    const onClose = vi.fn();
    renderHook(() => {
      const panelRef = useRef<HTMLDivElement | null>(null);
      useDismissableLayer(false, onClose, panelRef);
    });

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(onClose).not.toHaveBeenCalled();
  });

  it('calls onClose on pointerdown outside the panel', () => {
    const onClose = vi.fn();
    const outside = document.createElement('div');
    document.body.appendChild(outside);

    renderHook(() => {
      const panelRef = useRef<HTMLDivElement | null>(null);
      useDismissableLayer(true, onClose, panelRef);
    });

    outside.dispatchEvent(new MouseEvent('pointerdown', { bubbles: true }));
    expect(onClose).toHaveBeenCalledOnce();

    document.body.removeChild(outside);
  });

  it('does not call onClose on pointerdown inside the panel', () => {
    const onClose = vi.fn();
    const inside = document.createElement('div');
    document.body.appendChild(inside);

    renderHook(() => {
      const panelRef = useRef<HTMLDivElement | null>(inside);
      useDismissableLayer(true, onClose, panelRef);
    });

    inside.dispatchEvent(new MouseEvent('pointerdown', { bubbles: true }));
    expect(onClose).not.toHaveBeenCalled();

    document.body.removeChild(inside);
  });

  it('does not call onClose on outside pointerdown when closeOnBackdropClick is false', () => {
    const onClose = vi.fn();
    const outside = document.createElement('div');
    document.body.appendChild(outside);

    renderHook(() => {
      const panelRef = useRef<HTMLDivElement | null>(null);
      useDismissableLayer(true, onClose, panelRef, false);
    });

    outside.dispatchEvent(new MouseEvent('pointerdown', { bubbles: true }));
    expect(onClose).not.toHaveBeenCalled();

    document.body.removeChild(outside);
  });
});
