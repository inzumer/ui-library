import type { BaseColors } from '../types/theme.js'

type FlatRecord = Record<string, string>

function flattenColors(colors: BaseColors, prefix = '--color'): FlatRecord {
  const vars: FlatRecord = {}
  for (const [colorName, scale] of Object.entries(colors)) {
    for (const [step, value] of Object.entries(scale as Record<string, string>)) {
      vars[`${prefix}-${colorName}-${step}`] = value
    }
  }
  return vars
}

export function buildCssVars(colors: BaseColors): FlatRecord {
  return flattenColors(colors)
}

export function injectCssVars(vars: FlatRecord, element: HTMLElement = document.documentElement): void {
  for (const [property, value] of Object.entries(vars)) {
    element.style.setProperty(property, value)
  }
}

export function removeCssVars(vars: FlatRecord, element: HTMLElement = document.documentElement): void {
  for (const property of Object.keys(vars)) {
    element.style.removeProperty(property)
  }
}

export function cssVarsToString(vars: FlatRecord): string {
  return Object.entries(vars)
    .map(([property, value]) => `  ${property}: ${value};`)
    .join('\n')
}
