export type ThemeMode = 'light' | 'dark'

export interface ThemeContextValue {
  mode: ThemeMode
  toggleMode: () => void
  colors: typeof import('../tokens/colors').Colors
  spacing: typeof import('../tokens/spacing').Spacing
  typography: typeof import('../tokens/typography').Typography
  shadows: typeof import('../tokens/shadows').Shadows
}

export interface ResponsiveBreakpoints {
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
}

export interface MediaQueries {
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
}