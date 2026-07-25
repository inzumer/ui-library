import type { ResolvedTheme } from '../types/theme.js'
import { baseTokens } from '../tokens/base/index.js'
import { lightSemanticTokens } from '../tokens/semantic/index.js'

export const defaultTheme: ResolvedTheme = {
  base: baseTokens,
  semantic: lightSemanticTokens,
}
