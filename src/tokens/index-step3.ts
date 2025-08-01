// STEP 3: Design Tokens Barrel
// Organizing our design system tokens

// Color exports
export { Colors, BRAND_COLORS } from './colors'

// Spacing exports
export { Spacing, COMPONENT_SPACING } from './spacing'

// Typography exports
export { Typography, TEXT_STYLES } from './typography'

// Shadow exports
export { Shadows, COMPONENT_SHADOWS } from './shadows'

// Now instead of:
// import { Colors } from '../tokens/colors'
// import { Spacing } from '../tokens/spacing'
// import { Typography } from '../tokens/typography'

// We can write:
// import { Colors, Spacing, Typography } from '../tokens'

// 🎯 Design Token Benefits:
// - Consistent token access
// - Easier theme switching
// - Better token organization
// - Simpler component imports