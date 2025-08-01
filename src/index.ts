// STEP 5: Production-Optimized Barrel

// 🎯 Type-only exports (zero runtime overhead)
export type { 
  ButtonProps, 
  InputProps, 
  CardProps, 
  ModalProps, 
  BadgeProps,
  BaseComponentProps,
  ComponentSize,
  ComponentVariant,
} from './types/component'

export type {
  ThemeMode,
  ThemeContextValue,
  ResponsiveBreakpoints,
  MediaQueries,
} from './types/theme'

// 🎯 Selective runtime exports (optimal tree-shaking)
export { Button } from './components/Button/Button'
export { Input } from './components/Input/Input'
export { Card } from './components/Card/Card'
export { Modal } from './components/Modal/Modal'
export { Badge } from './components/Badge/Badge'

// Design token exports
export { Colors, BRAND_COLORS } from './tokens/colors'
export { Spacing, COMPONENT_SPACING } from './tokens/spacing'
export { Typography, TEXT_STYLES } from './tokens/typography'
export { Shadows, COMPONENT_SHADOWS } from './tokens/shadows'

// Utility exports
export { 
  formatCurrency, 
  formatDate, 
  formatNumber, 
  formatBytes, 
  truncateText 
} from './utils/formatters'

export { 
  isValidEmail, 
  isValidPassword, 
  isValidUrl, 
  isValidPhoneNumber, 
  isRequired, 
  minLength, 
  maxLength 
} from './utils/validators'

export { 
  getThemeColors, 
  createThemeVariables, 
  applyTheme 
} from './utils/theme'

export { 
  breakpoints, 
  mediaQueries, 
  useBreakpoint 
} from './utils/responsive'

// 🎯 Namespace exports (organized access)
export * as Tokens from './tokens'
export * as Components from './components'
export * as Utils from './utils'
export * as Types from './types'

// 🎯 Backward compatibility (smooth migration)
export * as DesignSystem from './index'