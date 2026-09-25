# Button

The primary interactive trigger for actions — submit a form, open a dialog, confirm/cancel,
navigate a step. If it causes something to happen when clicked, it's a `Button`.

## Usage

```tsx
import { Button } from '@inzumer/ui-library';

<Button variant="primary" onClick={handleSave}>
  Save
</Button>;
```

## Variants

- `variant`: `primary` (default) | `secondary` | `ghost` | `destructive`
- `size`: `sm` | `md` | `lg` | `icon`
- `fullWidth`: stretches to the width of its container
- Accepts every native `<button>` attribute (`disabled`, `type`, `form`, ...) and forwards its ref
  to the underlying `HTMLButtonElement`

## Links that look like buttons (`asChild`)

Pass `asChild` and a single element child: the child is rendered instead of a `<button>`,
receiving the button classes, props and ref (click handlers from both run; `className` and `style`
are merged). Use it for navigation, so the element stays a real link:

```tsx
<Button asChild variant="secondary">
  <a href="/calculator">Go to the calculator</a>
</Button>
```

`buttonStyles` is also exported to style any other element with the same variants:

```tsx
import { buttonStyles } from '@inzumer/ui-library';

<a className={buttonStyles({ variant: 'primary', size: 'lg' })} href="/">
  Home
</a>;
```

## Notes

- `asChild` with text or several children renders nothing: wrap them in a single element.
- `disabled` has no effect on non-button children (links can't be disabled); don't render the
  link instead.
