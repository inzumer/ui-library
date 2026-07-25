import type { BaseColors, DeepPartial, ResolvedTheme, ThemeOverride } from '../types/theme.js'
import { baseTokens } from '../tokens/base/index.js'
import { lightSemanticTokens } from '../tokens/semantic/index.js'

function deepMerge<T extends object>(target: T, source: DeepPartial<T>): T {
  const result = { ...target }
  for (const key in source) {
    const sourceVal = source[key as keyof typeof source]
    const targetVal = result[key as keyof T]
    if (sourceVal !== undefined) {
      if (
        typeof sourceVal === 'object' &&
        !Array.isArray(sourceVal) &&
        typeof targetVal === 'object' &&
        !Array.isArray(targetVal)
      ) {
        result[key as keyof T] = deepMerge(
          targetVal as object,
          sourceVal as DeepPartial<object>,
        ) as T[keyof T]
      } else {
        result[key as keyof T] = sourceVal as T[keyof T]
      }
    }
  }
  return result
}

export function createTheme(override: ThemeOverride = {}): ResolvedTheme {
  const mergedColors = override.colors
    ? deepMerge<BaseColors>(baseTokens.colors, override.colors)
    : baseTokens.colors

  const mergedSemantic = override.semantic
    ? deepMerge(lightSemanticTokens, override.semantic)
    : lightSemanticTokens

  return {
    base: { ...baseTokens, colors: mergedColors },
    semantic: mergedSemantic,
  }
}
