---
'@inzumer/ui-library': minor
---

Add `Select`, `Textarea` and `Drawer` components and the `useFocusTrap` and `useScrollLock` hooks.
`Modal` and `BottomSheet` now trap focus while open (returning it to the trigger on close), lock the
page scroll behind them and use a unique id for their title, so several can coexist on a page.
