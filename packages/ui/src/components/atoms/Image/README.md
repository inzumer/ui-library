# Image

A styled `<img>` — use it instead of a bare `<img>` any time you need `object-fit`/rounding
variants or just want the library's lazy-loading default applied consistently.

## Usage

```tsx
import { Image } from '@inzumer/ui-library';

<Image src="/photo.jpg" alt="Team offsite in Lisbon" fit="cover" rounded="md" />;
```

## Variants

- `fit`: `cover` (default) | `contain` | `fill`
- `rounded`: `none` (default) | `md` | `full`
- `lazy`: defaults to `true` (`loading="lazy"`); set to `false` for above-the-fold images that
  should load eagerly
- `alt` is required — there's no default, on purpose

## Notes

- This is a plain `<img>`, not a Next.js `next/image`-style optimizer — no automatic resizing,
  format negotiation, or CDN integration. Pair it with your framework's own image component if you
  need that, and use `Image` for cases where a plain tag is enough (or wrap `Image`'s styling
  around your framework's image primitive via `className`).
