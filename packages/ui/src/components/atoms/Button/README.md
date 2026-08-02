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

## Notes

- `asChild` is declared on the props type but isn't wired up yet (no Radix-style `Slot` behavior) —
  don't rely on it.
- For a link that's styled like a button (navigates instead of triggering an action), use `Link`
  with `Button`'s classes via `className`, not `Button` itself — `Button` always renders a real
  `<button>`.
