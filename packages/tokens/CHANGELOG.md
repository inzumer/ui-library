# @inzumer/tokens

## 1.1.0

### Minor Changes

- 74d41a1: Set `html { font-size: 62.5% }` in the reset (so `1rem = 10px` at the browser default, matching the convention already used across the Inzumer ecosystem) and scale every rem-based token (spacing, radius, font sizes) by 1.6x to compensate. Rendered pixel sizes are unchanged when both the reset and the Tailwind preset are used together, as intended — only the underlying rem values differ. `1rem` still scales with the user's own font-size preference either way, since it's a percentage of their browser/OS default, not a fixed pixel value.

  Consumers who only take the raw token values (`baseSpacing`, `baseRadius`, `baseTypography.sizes`) without the reset CSS will see different rem numbers than before.

## 1.0.0

### Major Changes

- First stable release of the rebuilt design system: atomic-design component
  library (14 components across atoms/molecules), public hooks and utils,
  the tokens package (base/semantic tokens, themes, Tailwind preset), and
  Storybook documentation. Replaces the old single-package scaffold
  previously published under these names — the package surface, build
  output, and exports are not compatible with the 0.1.x releases.
