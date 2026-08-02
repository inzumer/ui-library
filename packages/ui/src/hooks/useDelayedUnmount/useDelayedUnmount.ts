import { useEffect, useState } from 'react';

/**
 * Keeps a node mounted for `exitDurationMs` after `open` flips to false, so a CSS exit
 * transition has time to play before the node is actually removed from the DOM.
 */
export const useDelayedUnmount = (open: boolean, exitDurationMs: number) => {
  const [mounted, setMounted] = useState(open);
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (open) {
      setMounted(true);

      // A single rAF can still land in the same paint as the "closed" styles that were
      // just committed, so the transition has no starting frame to animate from and the
      // element just snaps open. Nesting a second rAF guarantees the closed state has
      // actually been painted first.
      let innerRafId = 0;
      const outerRafId = requestAnimationFrame(() => {
        innerRafId = requestAnimationFrame(() => setVisible(true));
      });
      return () => {
        cancelAnimationFrame(outerRafId);
        cancelAnimationFrame(innerRafId);
      };
    }

    setVisible(false);
    const timeoutId = setTimeout(() => setMounted(false), exitDurationMs);
    return () => clearTimeout(timeoutId);
  }, [open, exitDurationMs]);

  return { mounted, visible };
};
