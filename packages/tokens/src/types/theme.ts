export type ColorScale = {
  50?: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950?: string;
};

export type BaseColors = {
  primary: ColorScale;
  neutral: ColorScale;
  danger: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  info: ColorScale;
};

export type BaseSpacing = {
  px: string;
  0: string;
  0.5: string;
  1: string;
  1.5: string;
  2: string;
  2.5: string;
  3: string;
  3.5: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  14: string;
  16: string;
  20: string;
  24: string;
  28: string;
  32: string;
  36: string;
  40: string;
  44: string;
  48: string;
  56: string;
  64: string;
  72: string;
  80: string;
  96: string;
};

export type BaseRadius = {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  full: string;
};

export type BaseTypography = {
  fonts: {
    sans: string;
    mono: string;
    serif: string;
  };
  sizes: Record<string, string>;
  weights: Record<string, string>;
  lineHeights: Record<string, string>;
  letterSpacings: Record<string, string>;
};

export type BaseTokens = {
  colors: BaseColors;
  spacing: BaseSpacing;
  radius: BaseRadius;
  typography: BaseTypography;
};

export type SemanticSurface = {
  primary: string;
  secondary: string;
  tertiary: string;
  inverse: string;
  overlay: string;
};

export type SemanticText = {
  primary: string;
  secondary: string;
  tertiary: string;
  disabled: string;
  inverse: string;
  link: string;
  'link-hover': string;
};

export type SemanticBorder = {
  default: string;
  muted: string;
  strong: string;
  focus: string;
  error: string;
};

export type SemanticButton = {
  primary: {
    background: string;
    'background-hover': string;
    'background-active': string;
    text: string;
    border: string;
  };
  secondary: {
    background: string;
    'background-hover': string;
    'background-active': string;
    text: string;
    border: string;
  };
  ghost: {
    background: string;
    'background-hover': string;
    'background-active': string;
    text: string;
    border: string;
  };
  destructive: {
    background: string;
    'background-hover': string;
    'background-active': string;
    text: string;
    border: string;
  };
};

export type SemanticInput = {
  background: string;
  border: string;
  'border-focus': string;
  'border-error': string;
  text: string;
  placeholder: string;
};

export type SemanticTokens = {
  surface: SemanticSurface;
  text: SemanticText;
  border: SemanticBorder;
  button: SemanticButton;
  input: SemanticInput;
};

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export type ThemeOverride = {
  colors?: DeepPartial<BaseColors>;
  semantic?: DeepPartial<SemanticTokens>;
};

export type ResolvedTheme = {
  base: BaseTokens;
  semantic: SemanticTokens;
};
