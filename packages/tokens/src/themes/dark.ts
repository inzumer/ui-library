import type { ResolvedTheme } from '@theme-types/theme.js';
import { baseTokens } from '@tokens/base/index.js';
import { darkSemanticTokens } from '@tokens/semantic/index.js';

export const DarkTheme: ResolvedTheme = {
  base: baseTokens,
  semantic: darkSemanticTokens,
};
