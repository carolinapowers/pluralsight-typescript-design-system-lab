// STEP 3: Types Barrel  
// Organizing TypeScript type definitions

// Component type exports
export type { 
  ButtonProps, 
  InputProps, 
  CardProps, 
  ModalProps, 
  BadgeProps,
  BaseComponentProps,
  ComponentSize,
  ComponentVariant,
} from './component'

// Theme type exports
export type {
  ThemeMode,
  ThemeContextValue,
  ResponsiveBreakpoints,
  MediaQueries,
} from './theme'

// Now instead of:
// import { ButtonProps } from '../types/component'
// import { InputProps } from '../types/component'
// import { ThemeMode } from '../types/theme'

// We can write:
// import type { ButtonProps, InputProps, ThemeMode } from '../types'

// 🎯 Type Organization Benefits:
// - Clean type imports
// - Better type discovery
// - Consistent type access
// - Easier refactoring