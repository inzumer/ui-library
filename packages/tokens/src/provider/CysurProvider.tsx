import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  type ReactNode,
} from 'react'

import { defaultTheme } from '../themes/default.js'
import type { ResolvedTheme, ThemeOverride } from '../types/theme.js'
import { buildCssVars, injectCssVars, removeCssVars } from '../utils/inject-css-vars.js'
import { createTheme } from '../utils/create-theme.js'

type ThemeContextValue = {
  theme: ResolvedTheme
  colorScheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: defaultTheme,
  colorScheme: 'light',
})

export function useCysurTheme(): ThemeContextValue {
  return useContext(ThemeContext)
}

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

type CysurProviderProps = {
  children: ReactNode
  theme?: ThemeOverride
  colorScheme?: 'light' | 'dark'
  /** Target element to inject CSS vars. Defaults to documentElement. */
  targetElement?: HTMLElement
}

export function CysurProvider({
  children,
  theme: themeOverride,
  colorScheme = 'light',
  targetElement,
}: CysurProviderProps) {
  const resolvedTheme = useMemo(
    () => createTheme(themeOverride ?? {}),
    [themeOverride],
  )

  const cssVarsRef = useRef<Record<string, string>>({})

  useIsomorphicLayoutEffect(() => {
    const el = targetElement ?? (typeof document !== 'undefined' ? document.documentElement : null)
    if (!el) return

    const prev = cssVarsRef.current
    if (Object.keys(prev).length > 0) {
      removeCssVars(prev, el)
    }

    const vars = buildCssVars(resolvedTheme.base.colors)
    injectCssVars(vars, el)
    cssVarsRef.current = vars

    el.dataset['colorScheme'] = colorScheme

    return () => {
      removeCssVars(cssVarsRef.current, el)
    }
  }, [resolvedTheme, colorScheme, targetElement])

  const contextValue = useMemo<ThemeContextValue>(
    () => ({ theme: resolvedTheme, colorScheme }),
    [resolvedTheme, colorScheme],
  )

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}
