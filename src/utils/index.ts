// STEP 2: First Barrel File - Utilities
// This is our first taste of barrel files!

// Formatter exports
export { formatCurrency, formatDate, formatNumber, formatBytes, truncateText } from './formatters'

// Validator exports  
export { isValidEmail, isValidPassword, isValidUrl, isValidPhoneNumber, isRequired, minLength, maxLength } from './validators'

// Theme utilities
export { getThemeColors, createThemeVariables, applyTheme } from './theme'

// Responsive utilities
export { breakpoints, mediaQueries, useBreakpoint } from './responsive'

// Now instead of:
// import { formatCurrency } from '../utils/formatters'
// import { formatDate } from '../utils/formatters'  
// import { isValidEmail } from '../utils/validators'

// We can write:
// import { formatCurrency, formatDate, isValidEmail } from '../utils'

// 🎯 Benefits:
// - Cleaner imports
// - Single source of truth
// - Easier refactoring
// - Better organization