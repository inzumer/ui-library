# Switch

A controlled boolean toggle — use it for an on/off setting the user flips immediately (no separate
"save" step), like `Input` is for text entry. For a choice between more than two options, use
`Language`'s segmented-control pattern instead.

## Usage

```tsx
import { Switch } from '@inzumer/ui-library';

const [enabled, setEnabled] = useState(false);

<Switch checked={enabled} onCheckedChange={setEnabled} label="Enable notifications" />;
```

## Variants

- `checked` / `onCheckedChange` — controlled only, there's no uncontrolled/`defaultChecked` mode
- `disabled`
- `label` — optional visible label rendered next to the track; the switch is still a real
  `<input type="checkbox" role="switch">` under the hood even without one, so pair it with your own
  `aria-label` if you skip `label`

## Notes

- Always controlled: you own `checked` in your own state and update it in `onCheckedChange` — the
  component won't toggle itself.
