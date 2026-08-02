# Link

An anchor atom for navigation — use it any time the user is going somewhere (a page, a section,
an external site), as opposed to `Button`, which is for actions.

## Usage

```tsx
import { Link } from '@inzumer/ui-library';

<Link href="/pricing">See pricing</Link>

// Through your framework's router (Next.js shown, same idea for React Router, etc.):
<Link as={NextLink} href="/pricing">
  See pricing
</Link>;
```

## Variants

- `underline`: `hover` (default) | `always` | `none`
- `external`: forces `target="_blank"` + `rel="noopener noreferrer"` — auto-detected already when
  you pass `target="_blank"` yourself
- `as`: renders through a different component (your router's `Link`) while keeping `Link`'s
  styling/behavior — defaults to a plain `<a>`

## Notes

- `Link` renders a real anchor (or whatever `as` points to) — it never becomes a `<button>` even
  with an `onClick`, and it doesn't accept the boolean-variant styling `Button` has.
