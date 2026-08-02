# Snackbar

A temporary, self-dismissing toast — use it for low-emphasis feedback about something that just
happened ("Saved", "Link copied", "Something went wrong") that doesn't require the user to act on
it. If the user needs to make a decision or read something before moving on, use `Modal` instead.

## Usage

```tsx
import { Snackbar } from '@inzumer/ui-library';

const [open, setOpen] = useState(false);

<Snackbar
  open={open}
  onClose={() => setOpen(false)}
  status="success"
  message="Your changes have been saved."
/>;
```

## Props

- `open` / `onClose` — controlled, same shape as `Modal`. `onClose` fires both when the `duration`
  timer elapses and (if you add your own dismiss button) whenever you call it yourself
- `status`: `info` (default) | `success` | `error` | `warning`
- `duration` — ms before it auto-dismisses; defaults to `4000`, pass `0` to require manual dismissal
- Uses `role="alert"` for `status="error"`, `role="status"` otherwise

## Notes

- Fixed-positioned at the bottom of the viewport by the component itself — you don't control
  placement via `className` on the message pill alone (that only styles the pill, not its
  position).
