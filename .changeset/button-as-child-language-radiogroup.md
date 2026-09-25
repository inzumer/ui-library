---
'@inzumer/ui-library': minor
---

**Button**: implement `asChild` (it was typed but ignored). The single child element is rendered
instead of a `<button>`, receiving the button classes, props and ref; click handlers from both run
and `className`/`style` are merged. `buttonStyles` is now exported to style other elements.

**Language**: follow the WAI-ARIA radio group pattern for accessibility. The group is now
`role="radiogroup"` with `role="radio"` options (`aria-checked` instead of `aria-selected`), a single
Tab stop, and Arrow keys / Home / End to move the selection. Tests or selectors that queried
`listbox` / `option` must switch to `radiogroup` / `radio`. Pass a localized `aria-label` in
non-English UIs.
