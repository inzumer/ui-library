---
'@inzumer/tokens': minor
---

Set `html { font-size: 62.5% }` in the reset (so `1rem = 10px` at the browser default, matching the convention already used across the Inzumer ecosystem) and scale every rem-based token (spacing, radius, font sizes) by 1.6x to compensate. Rendered pixel sizes are unchanged when both the reset and the Tailwind preset are used together, as intended — only the underlying rem values differ. `1rem` still scales with the user's own font-size preference either way, since it's a percentage of their browser/OS default, not a fixed pixel value.

Consumers who only take the raw token values (`baseSpacing`, `baseRadius`, `baseTypography.sizes`) without the reset CSS will see different rem numbers than before.
