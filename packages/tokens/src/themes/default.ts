import type { ResolvedTheme } from '@theme-types/theme.js';
import { baseTokens } from '@tokens/base/index.js';
import { lightSemanticTokens } from '@tokens/semantic/index.js';

export const DefaultTheme: ResolvedTheme = {
  base: baseTokens,
  semantic: lightSemanticTokens,
};
