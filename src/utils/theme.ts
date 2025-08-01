import { Colors } from '../tokens/colors'
import { ThemeMode } from '../types/theme'

export const getThemeColors = (mode: ThemeMode) => {
  return mode === 'dark' 
    ? {
        background: Colors.neutral[900],
        surface: Colors.neutral[800],
        text: {
          primary: Colors.neutral[50],
          secondary: Colors.neutral[300],
        },
        border: Colors.neutral[700],
      }
    : {
        background: Colors.neutral[50],
        surface: '#ffffff',
        text: {
          primary: Colors.neutral[900],
          secondary: Colors.neutral[600],
        },
        border: Colors.neutral[200],
      }
}

export const createThemeVariables = (mode: ThemeMode) => {
  const colors = getThemeColors(mode)
  
  return {
    '--color-background': colors.background,
    '--color-surface': colors.surface,
    '--color-text-primary': colors.text.primary,
    '--color-text-secondary': colors.text.secondary,
    '--color-border': colors.border,
    '--color-primary': Colors.primary[500],
    '--color-primary-hover': Colors.primary[600],
  } as Record<string, string>
}

export const applyTheme = (mode: ThemeMode) => {
  const variables = createThemeVariables(mode)
  
  Object.entries(variables).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value)
  })
}