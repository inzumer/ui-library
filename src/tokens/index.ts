export * from './colors'
export * from './spacing'
export * from './radius'
export * from './typography'
export * from './z-index'
export * from './motion'

import type { colors } from './colors'
import type { spacing } from './spacing'
import type { radius } from './radius'
import type { typography } from './typography'
import type { zIndex } from './z-index'
import type { motion } from './motion'

export interface UIThemeTokens {
  colors: typeof colors
  spacing: typeof spacing
  radius: typeof radius
  typography: typeof typography
  zIndex: typeof zIndex
  motion: typeof motion
}
