import type { BaseColors, DeepPartial, SemanticTokens } from '@theme-types/theme.js';

type FlatRecord = Record<string, string>;

const flattenColors = (colors: BaseColors, prefix = '--color'): FlatRecord => {
  const vars: FlatRecord = {};
  for (const [colorName, scale] of Object.entries(colors)) {
    for (const [step, value] of Object.entries(scale as Record<string, string>)) {
      vars[`${prefix}-${colorName}-${step}`] = value;
    }
  }
  return vars;
};

export const buildCssVars = (colors: BaseColors): FlatRecord => flattenColors(colors);

const BUTTON_VARIANTS = ['primary', 'secondary', 'ghost', 'destructive'] as const;

/**
 * Flattens a (possibly partial) semantic token override into the exact CSS
 * custom property names consumed by `@inzumer/tokens/css/variables` (e.g.
 * `button.primary.background` -> `--btn-primary-bg`). Only keys actually
 * present in `semantic` are emitted, since these vars are also set per
 * color-scheme in the static stylesheet — injecting the full resolved theme
 * unconditionally would pin light-mode values as inline styles and break
 * the `[data-color-scheme="dark"]` cascade (inline styles always win).
 */
export const buildSemanticCssVars = (semantic?: DeepPartial<SemanticTokens>): FlatRecord => {
  if (!semantic) {
    return {};
  }

  const vars: FlatRecord = {};
  const set = (name: string, value: string | undefined): void => {
    if (value !== undefined) {
      vars[name] = value;
    }
  };

  set('--surface-primary', semantic.surface?.primary);
  set('--surface-secondary', semantic.surface?.secondary);
  set('--surface-tertiary', semantic.surface?.tertiary);
  set('--surface-inverse', semantic.surface?.inverse);
  set('--surface-overlay', semantic.surface?.overlay);

  set('--text-primary', semantic.text?.primary);
  set('--text-secondary', semantic.text?.secondary);
  set('--text-tertiary', semantic.text?.tertiary);
  set('--text-disabled', semantic.text?.disabled);
  set('--text-inverse', semantic.text?.inverse);
  set('--text-link', semantic.text?.link);
  set('--text-link-hover', semantic.text?.['link-hover']);

  set('--border-default', semantic.border?.default);
  set('--border-muted', semantic.border?.muted);
  set('--border-strong', semantic.border?.strong);
  set('--border-focus', semantic.border?.focus);
  set('--border-error', semantic.border?.error);

  set('--input-bg', semantic.input?.background);
  set('--input-border', semantic.input?.border);
  set('--input-border-focus', semantic.input?.['border-focus']);
  set('--input-border-error', semantic.input?.['border-error']);
  set('--input-text', semantic.input?.text);
  set('--input-placeholder', semantic.input?.placeholder);

  for (const variant of BUTTON_VARIANTS) {
    const btn = semantic.button?.[variant];
    if (!btn) {
      continue;
    }
    set(`--btn-${variant}-bg`, btn.background);
    set(`--btn-${variant}-bg-hover`, btn['background-hover']);
    set(`--btn-${variant}-bg-active`, btn['background-active']);
    set(`--btn-${variant}-text`, btn.text);
    set(`--btn-${variant}-border`, btn.border);
  }

  return vars;
};

export const injectCssVars = (
  vars: FlatRecord,
  element: HTMLElement = document.documentElement,
): void => {
  for (const [property, value] of Object.entries(vars)) {
    element.style.setProperty(property, value);
  }
};

export const removeCssVars = (
  vars: FlatRecord,
  element: HTMLElement = document.documentElement,
): void => {
  for (const property of Object.keys(vars)) {
    element.style.removeProperty(property);
  }
};

export const cssVarsToString = (vars: FlatRecord): string =>
  Object.entries(vars)
    .map(([property, value]) => `  ${property}: ${value};`)
    .join('\n');
