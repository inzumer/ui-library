# @inzumer/ui-library

## 1.0.2

### Patch Changes

- Updated dependencies [74d41a1]
  - @inzumer/tokens@1.1.0

## 1.0.1

### Patch Changes

- 774a94e: Fix `Timeline`'s connecting line being visibly offset from the node dots. The line is a `border-l` on the list, and the dots now center on it via `-translate-x-1/2` instead of a fixed offset that didn't account for the dot's own width.

## 1.0.0

### Major Changes

- First stable release of the rebuilt design system: atomic-design component
  library (14 components across atoms/molecules), public hooks and utils,
  the tokens package (base/semantic tokens, themes, Tailwind preset), and
  Storybook documentation. Replaces the old single-package scaffold
  previously published under these names — the package surface, build
  output, and exports are not compatible with the 0.1.x releases.

### Patch Changes

- Updated dependencies
  - @inzumer/tokens@1.0.0
