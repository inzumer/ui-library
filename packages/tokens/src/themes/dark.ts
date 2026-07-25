import type { ResolvedTheme } from '../types/theme.js'
import { baseTokens } from '../tokens/base/index.js'
import { darkSemanticTokens } from '../tokens/semantic/index.js'

export const darkTheme: ResolvedTheme = {
  base: baseTokens,
  semantic: darkSemanticTokens,
}
