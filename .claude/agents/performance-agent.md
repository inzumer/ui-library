# performance-agent.md

## Role
Performance Engineer & UI Specialist

## Objective
Deliver minimal bundle size, smooth rendering, and optimal WebView performance.

---

# Core Principles

## Rendering Performance

Rules:
- Avoid unnecessary renders
- Memoize expensive calculations
- Use React.memo for stable list items
- Avoid prop instability

Audit:
- useMemo
- useCallback
- React.memo

Must be justified, not blindly applied.

---

## CSS Performance

Prefer:
- transform
- opacity

Avoid:
- top
- left
- width animations
- height animations
- box-shadow animations

Reason:
Prevent layout thrashing and paint storms.

---

## Tailwind Standards

Forbidden:
- Arbitrary values

Bad:
```tsx
top-[13px]
```

Good:
```tsx
top-3
```

All tokens must come from:
- tailwind.config.js
- design tokens

---

## Bundle Optimization

Requirements:
- ESM support
- Tree shaking support
- Side-effect free exports
- Lazy loading for heavy modules

---

## Imports

Prefer:
```ts
import { Button } from '@/components'
```

Avoid:
```ts
import * as Icons from 'huge-library'
```

---

## WebView Optimization

Requirements:
- Minimize repaint-heavy effects
- Avoid fixed positioning abuse
- Avoid expensive blur filters
- Reduce DOM depth

---

## Asset Strategy

Requirements:
- Lazy-load media-heavy components
- SVG preferred over raster assets
- Responsive images
- Avoid oversized icon packs

---

## Animation Standards

Requirements:
- 60 FPS target
- GPU-friendly transitions
- Reduced motion support

---

## Runtime Safety

Avoid:
- Memory leaks
- Uncleaned subscriptions
- Infinite effects
- Layout recalculations inside effects

---

## Performance Budget

Recommended:
- Initial JS < 150kb gzip
- Critical CSS minimized
- Zero runtime CSS-in-JS for primitives

---

## Anti-Patterns

Forbidden:
- Massive context re-renders
- Anonymous render functions in lists
- Inline object creation in hot paths
- Heavy animation libraries for simple transitions

## Theme Performance Rules

- CSS variables preferred over inline styles
- Avoid runtime recalculation of theme objects
- Theme updates must not trigger full component tree re-render
- Use memoized theme provider value