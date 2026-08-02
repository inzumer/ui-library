import type { MutableRefObject, Ref } from 'react';

/** Combines multiple refs (forwarded + local) into a single ref callback. */
export const useMergedRef =
  <T>(...refs: Array<Ref<T> | undefined>) =>
  (node: T | null) => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as MutableRefObject<T | null>).current = node;
      }
    }
  };
