export const Spacing = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '0.75rem',    // 12px
  lg: '1rem',       // 16px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '2rem',    // 32px
  '4xl': '2.5rem',  // 40px
  '5xl': '3rem',    // 48px
  '6xl': '4rem',    // 64px
} as const

export const COMPONENT_SPACING = {
  BUTTON_PADDING_X: Spacing.lg,
  BUTTON_PADDING_Y: Spacing.sm,
  INPUT_PADDING_X: Spacing.md,
  INPUT_PADDING_Y: Spacing.sm,
  CARD_PADDING: Spacing.xl,
  MODAL_PADDING: Spacing['2xl'],
  SECTION_MARGIN: Spacing['3xl'],
} as const