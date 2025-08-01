import { ResponsiveBreakpoints, MediaQueries } from '../types/theme'

export const breakpoints: ResponsiveBreakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

export const mediaQueries: MediaQueries = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  '2xl': `@media (min-width: ${breakpoints['2xl']})`,
}

export const useBreakpoint = () => {
  const getBreakpoint = (): keyof ResponsiveBreakpoints => {
    const width = window.innerWidth
    
    if (width >= parseInt(breakpoints['2xl'])) return '2xl'
    if (width >= parseInt(breakpoints.xl)) return 'xl'
    if (width >= parseInt(breakpoints.lg)) return 'lg'
    if (width >= parseInt(breakpoints.md)) return 'md'
    if (width >= parseInt(breakpoints.sm)) return 'sm'
    
    return 'sm'
  }

  return {
    current: getBreakpoint(),
    breakpoints,
    mediaQueries,
    isMobile: window.innerWidth < parseInt(breakpoints.md),
    isTablet: window.innerWidth >= parseInt(breakpoints.md) && window.innerWidth < parseInt(breakpoints.lg),
    isDesktop: window.innerWidth >= parseInt(breakpoints.lg),
  }
}