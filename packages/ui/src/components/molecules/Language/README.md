# Language

A generic segmented option switch with a sliding indicator — despite the name, it isn't tied to
i18n or any specific language list. Use it for any small, mutually-exclusive set of options
(2–4ish) where every choice should stay visible at once, like a unit toggle or a view switcher —
not just language pickers.

## Usage

```tsx
import { Language } from '@inzumer/ui-library';

const options = [
  { value: 'es', label: 'ES' },
  { value: 'en', label: 'EN' },
];
const [value, setValue] = useState('es');

<Language options={options} value={value} onChange={setValue} />;
```

## Props

- `options` — `{ value, label }[]`
- `value` / `onChange` — controlled, same pattern as `Switch`
- No i18n library wiring included — call your i18n library's language-change function from
  `onChange` yourself

## Notes

- The sliding indicator measures the selected option's DOM position in a `useLayoutEffect`, so it
  never flashes at the wrong spot on mount, and animates smoothly between options on change.
