import type { SemanticTokens } from '../../types/theme.js'

export const lightSemanticTokens: SemanticTokens = {
  surface: {
    primary: 'var(--color-neutral-50)',
    secondary: 'var(--color-neutral-100)',
    tertiary: 'var(--color-neutral-200)',
    inverse: 'var(--color-neutral-900)',
    overlay: 'rgba(0 0 0 / 0.5)',
  },
  text: {
    primary: 'var(--color-neutral-900)',
    secondary: 'var(--color-neutral-600)',
    tertiary: 'var(--color-neutral-400)',
    disabled: 'var(--color-neutral-300)',
    inverse: 'var(--color-neutral-50)',
    link: 'var(--color-primary-600)',
    'link-hover': 'var(--color-primary-700)',
  },
  border: {
    default: 'var(--color-neutral-200)',
    muted: 'var(--color-neutral-100)',
    strong: 'var(--color-neutral-400)',
    focus: 'var(--color-primary-500)',
    error: 'var(--color-danger-500)',
  },
  button: {
    primary: {
      background: 'var(--color-primary-600)',
      'background-hover': 'var(--color-primary-700)',
      'background-active': 'var(--color-primary-800)',
      text: 'var(--color-neutral-50)',
      border: 'transparent',
    },
    secondary: {
      background: 'var(--color-neutral-100)',
      'background-hover': 'var(--color-neutral-200)',
      'background-active': 'var(--color-neutral-300)',
      text: 'var(--color-neutral-900)',
      border: 'var(--color-neutral-200)',
    },
    ghost: {
      background: 'transparent',
      'background-hover': 'var(--color-neutral-100)',
      'background-active': 'var(--color-neutral-200)',
      text: 'var(--color-neutral-700)',
      border: 'transparent',
    },
    destructive: {
      background: 'var(--color-danger-600)',
      'background-hover': 'var(--color-danger-700)',
      'background-active': 'var(--color-danger-800)',
      text: 'var(--color-neutral-50)',
      border: 'transparent',
    },
  },
  input: {
    background: 'var(--color-neutral-50)',
    border: 'var(--color-neutral-300)',
    'border-focus': 'var(--color-primary-500)',
    'border-error': 'var(--color-danger-500)',
    text: 'var(--color-neutral-900)',
    placeholder: 'var(--color-neutral-400)',
  },
}

export const darkSemanticTokens: SemanticTokens = {
  surface: {
    primary: 'var(--color-neutral-950)',
    secondary: 'var(--color-neutral-900)',
    tertiary: 'var(--color-neutral-800)',
    inverse: 'var(--color-neutral-50)',
    overlay: 'rgba(0 0 0 / 0.7)',
  },
  text: {
    primary: 'var(--color-neutral-50)',
    secondary: 'var(--color-neutral-300)',
    tertiary: 'var(--color-neutral-500)',
    disabled: 'var(--color-neutral-600)',
    inverse: 'var(--color-neutral-900)',
    link: 'var(--color-primary-400)',
    'link-hover': 'var(--color-primary-300)',
  },
  border: {
    default: 'var(--color-neutral-700)',
    muted: 'var(--color-neutral-800)',
    strong: 'var(--color-neutral-500)',
    focus: 'var(--color-primary-400)',
    error: 'var(--color-danger-400)',
  },
  button: {
    primary: {
      background: 'var(--color-primary-500)',
      'background-hover': 'var(--color-primary-400)',
      'background-active': 'var(--color-primary-300)',
      text: 'var(--color-neutral-950)',
      border: 'transparent',
    },
    secondary: {
      background: 'var(--color-neutral-800)',
      'background-hover': 'var(--color-neutral-700)',
      'background-active': 'var(--color-neutral-600)',
      text: 'var(--color-neutral-50)',
      border: 'var(--color-neutral-700)',
    },
    ghost: {
      background: 'transparent',
      'background-hover': 'var(--color-neutral-800)',
      'background-active': 'var(--color-neutral-700)',
      text: 'var(--color-neutral-300)',
      border: 'transparent',
    },
    destructive: {
      background: 'var(--color-danger-500)',
      'background-hover': 'var(--color-danger-400)',
      'background-active': 'var(--color-danger-300)',
      text: 'var(--color-neutral-950)',
      border: 'transparent',
    },
  },
  input: {
    background: 'var(--color-neutral-900)',
    border: 'var(--color-neutral-700)',
    'border-focus': 'var(--color-primary-400)',
    'border-error': 'var(--color-danger-400)',
    text: 'var(--color-neutral-50)',
    placeholder: 'var(--color-neutral-500)',
  },
}
