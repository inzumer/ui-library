# RichText

The single typography primitive for the library — every place another component in this system
renders plain text (`Card`'s title/description, `Timeline`'s entries, `Modal`/`BottomSheet`
titles, `Switch`'s label, `Input`'s label/hint/error, `Breadcrumbs`) is built on top of `RichText`
rather than a raw `<p>`/`<span>`/`<h2>` with its own one-off classes. Reach for it the same way
whenever you're about to write a text element from scratch — that consistency (one place that
owns the type scale) is the point of the library.

## Usage

```tsx
import { RichText } from '@inzumer/ui-library';

<RichText variant="h2">Section heading</RichText>
<RichText variant="p2">Body copy.</RichText>
<RichText variant="s3" bold>
  Small, bold label
</RichText>;
```

## Variants

- `variant` picks both the text size **and**, by default, the rendered element:
  `h1`–`h6` → the matching heading tag, `s1`–`s4` → `<span>`, `p1`–`p4` → `<p>`. Override the
  element with `as` (e.g. `<RichText variant="s1" as="li">`) without changing the type scale.
- `weight`: `light` | `normal` (default) | `bold`, or just pass the `bold` shorthand
- Forwards its ref to whichever element it renders and accepts every attribute that element does

## Notes

- The base text color is always `var(--text-primary)`. If you need a different color in context
  (a status color, a muted secondary color, text on a colored background), override it via
  `className` — `cn()` merges it in last, so it wins. This is why `Snackbar`'s and `Language`'s own
  text stay as plain elements instead of `RichText`: their color is state-driven and would fight
  `RichText`'s default.
