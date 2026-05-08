# Button

Atomic-level interactive element. Triggers an action or submits a form.

## Usage

```tsx
import { Button } from '@inzumer/ui-library'

// Basic
<Button>Click me</Button>

// With variant and size
<Button variant="danger" size="lg">Delete account</Button>

// Loading state
<Button isLoading loadingText="Saving...">Save</Button>

// Disabled
<Button disabled>Not available</Button>

// With ref
const ref = useRef<HTMLButtonElement>(null)
<Button ref={ref}>Focused Button</Button>
```

## Props

| Prop          | Type                                          | Default     | Description                                           |
|---------------|-----------------------------------------------|-------------|-------------------------------------------------------|
| `variant`     | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` | Visual style of the button                           |
| `size`        | `'sm' \| 'md' \| 'lg'`                        | `'md'`      | Size preset                                           |
| `isLoading`   | `boolean`                                     | `false`     | Shows spinner and disables all interaction            |
| `loadingText` | `string`                                      | —           | Text shown while loading (replaces children)          |
| `disabled`    | `boolean`                                     | `false`     | Disables the button via native HTML attribute         |
| `className`   | `string`                                      | —           | Additional classes merged via `tailwind-merge`        |
| `ref`         | `Ref<HTMLButtonElement>`                      | —           | Forwarded to the underlying `<button>` element        |
| `...rest`     | `ButtonHTMLAttributes<HTMLButtonElement>`     | —           | All native button attributes are passed through       |

## Accessibility

- Renders a native `<button>` element — keyboard and screen reader support is built in.
- When `disabled` or `isLoading`, the native `disabled` attribute is set. This is intentional: native `disabled` already communicates the state to assistive technology without requiring `aria-disabled`.
- `aria-busy="true"` is set during the loading state so screen readers can announce the in-progress action.
- The loading spinner SVG is marked `aria-hidden="true"` — it is decorative and must not be read aloud.
- Touch targets are at least 44×44px (`min-h-touch min-w-touch`) in compliance with WCAG 2.5.5.
- Focus ring is visible via `focus-visible:ring-2` — it appears only on keyboard navigation, not on mouse click.
- Respects `prefers-reduced-motion` via `motion-reduce:transition-none`.

## Mobile Considerations

- `touch-action: manipulation` is applied globally in `globals.css` to remove the 300ms tap delay in WebViews.
- Touch targets meet the 44×44px minimum for both iOS and Android guidelines.
- Avoid placing the Button inside horizontally-scrolling containers without explicit `min-w` constraints, as the `min-w-touch` token may affect layout in tight spaces.

## Theming

All colors are driven by CSS custom properties defined in `globals.css`. To override:

```css
:root {
  --color-primary-600: #7c3aed; /* replace primary with purple */
}
```

Or import the distributed stylesheet and override after:

```ts
import '@inzumer/ui-library/styles'
```

## Known Limitations

- No `asChild` / polymorphic rendering support (e.g., rendering as `<a>`). Use a wrapper link component if needed.
- The `loadingText` replaces `children` entirely — there is no way to show both simultaneously.
- Dark mode requires the consumer to add the `dark` class to an ancestor element (class-based dark mode strategy).
