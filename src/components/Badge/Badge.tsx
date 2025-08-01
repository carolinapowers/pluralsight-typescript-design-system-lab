import React from 'react'
import { BadgeProps } from '../../types/component'
import { Colors } from '../../tokens/colors'
import { Spacing } from '../../tokens/spacing'
import { Typography } from '../../tokens/typography'

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  dot = false,
  className = '',
  testId,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: Colors.primary[100],
          color: Colors.primary[800],
        }
      case 'secondary':
        return {
          backgroundColor: Colors.neutral[100],
          color: Colors.neutral[800],
        }
      case 'success':
        return {
          backgroundColor: Colors.success[100],
          color: Colors.success[800],
        }
      case 'warning':
        return {
          backgroundColor: Colors.warning[100],
          color: Colors.warning[800],
        }
      case 'danger':
        return {
          backgroundColor: Colors.danger[100],
          color: Colors.danger[800],
        }
      default:
        return {
          backgroundColor: Colors.primary[100],
          color: Colors.primary[800],
        }
    }
  }

  const getSizeStyles = () => {
    if (dot) {
      switch (size) {
        case 'sm':
          return { width: '8px', height: '8px' }
        case 'lg':
          return { width: '16px', height: '16px' }
        default:
          return { width: '12px', height: '12px' }
      }
    }

    switch (size) {
      case 'sm':
        return {
          padding: `${Spacing.xs} ${Spacing.sm}`,
          fontSize: Typography.fontSize.xs,
        }
      case 'lg':
        return {
          padding: `${Spacing.sm} ${Spacing.md}`,
          fontSize: Typography.fontSize.sm,
        }
      default:
        return {
          padding: `${Spacing.xs} ${Spacing.sm}`,
          fontSize: Typography.fontSize.xs,
        }
    }
  }

  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: dot ? '50%' : '9999px',
    fontWeight: Typography.fontWeight.medium,
    ...getVariantStyles(),
    ...getSizeStyles(),
  }

  if (dot) {
    return (
      <span
        style={baseStyles}
        className={className}
        data-testid={testId}
      />
    )
  }

  return (
    <span
      style={baseStyles}
      className={className}
      data-testid={testId}
    >
      {children}
    </span>
  )
}