import React from 'react'
import { ButtonProps } from '../../types/component'
import { Colors } from '../../tokens/colors'
import { Spacing } from '../../tokens/spacing'
import { Typography } from '../../tokens/typography'
import { Shadows } from '../../tokens/shadows'

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  onClick,
  className = '',
  testId,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: disabled ? Colors.neutral[300] : Colors.primary[500],
          color: Colors.neutral[50],
          border: 'none',
        }
      case 'secondary':
        return {
          backgroundColor: 'transparent',
          color: Colors.primary[500],
          border: `1px solid ${Colors.primary[500]}`,
        }
      case 'success':
        return {
          backgroundColor: disabled ? Colors.neutral[300] : Colors.success[500],
          color: Colors.neutral[50],
          border: 'none',
        }
      case 'warning':
        return {
          backgroundColor: disabled ? Colors.neutral[300] : Colors.warning[500],
          color: Colors.neutral[50],
          border: 'none',
        }
      case 'danger':
        return {
          backgroundColor: disabled ? Colors.neutral[300] : Colors.danger[500],
          color: Colors.neutral[50],
          border: 'none',
        }
      default:
        return {
          backgroundColor: Colors.primary[500],
          color: Colors.neutral[50],
          border: 'none',
        }
    }
  }

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return {
          padding: `${Spacing.xs} ${Spacing.sm}`,
          fontSize: Typography.fontSize.sm,
        }
      case 'lg':
        return {
          padding: `${Spacing.md} ${Spacing.xl}`,
          fontSize: Typography.fontSize.lg,
        }
      default:
        return {
          padding: `${Spacing.sm} ${Spacing.lg}`,
          fontSize: Typography.fontSize.base,
        }
    }
  }

  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.375rem',
    fontWeight: Typography.fontWeight.medium,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.6 : 1,
    ...getVariantStyles(),
    ...getSizeStyles(),
  }

  const hoverStyles: React.CSSProperties = {
    boxShadow: disabled ? 'none' : Shadows.sm,
    transform: disabled ? 'none' : 'translateY(-1px)',
  }

  return (
    <button
      style={baseStyles}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={className}
      data-testid={testId}
      onMouseEnter={(e) => {
        if (!disabled) {
          Object.assign(e.currentTarget.style, hoverStyles)
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.transform = 'none'
        }
      }}
    >
      {loading ? 'Loading...' : children}
    </button>
  )
}