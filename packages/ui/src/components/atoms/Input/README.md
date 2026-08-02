# Input

A text field with its label, hint, and error states built in — use it for any single-line text
entry instead of assembling `<label>` + `<input>` + helper text by hand each time.

## Usage

```tsx
import { Input } from '@inzumer/ui-library';

<Input label="Email" type="email" placeholder="you@example.com" hint="We'll never share this." />;
```

## Variants

- `state`: `default` | `error` — set automatically to `'error'` whenever the `error` prop is passed
- `inputSize`: `sm` | `md` | `lg`
- `label`, `hint`, `error` are all optional. Passing `error` sets `aria-invalid` and hides `hint` —
  only one helper message shows at a time.
- Accepts every native `<input>` attribute and forwards its ref to the underlying
  `HTMLInputElement`

## Notes

- The label is a real `<label htmlFor>` (auto-generated `id` via `useId()` if you don't pass one),
  so clicking it focuses the field — don't wrap `Input` in your own `<label>`.
