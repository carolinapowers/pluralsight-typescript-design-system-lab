import React from 'react'
import { CardProps } from '../../types/component'
import { Colors } from '../../tokens/colors'
import { Spacing } from '../../tokens/spacing'
import { Typography } from '../../tokens/typography'
import { Shadows } from '../../tokens/shadows'

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  footer,
  padding = 'md',
  shadow = true,
  className = '',
  testId,
}) => {
  const getPaddingSize = () => {
    switch (padding) {
      case 'sm':
        return Spacing.md
      case 'lg':
        return Spacing['2xl']
      default:
        return Spacing.xl
    }
  }

  const cardStyles: React.CSSProperties = {
    backgroundColor: Colors.neutral[50],
    border: `1px solid ${Colors.neutral[200]}`,
    borderRadius: '0.5rem',
    boxShadow: shadow ? Shadows.base : 'none',
    overflow: 'hidden',
  }

  const headerStyles: React.CSSProperties = {
    padding: getPaddingSize(),
    borderBottom: `1px solid ${Colors.neutral[200]}`,
  }

  const titleStyles: React.CSSProperties = {
    margin: 0,
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.neutral[900],
    marginBottom: subtitle ? Spacing.xs : 0,
  }

  const subtitleStyles: React.CSSProperties = {
    margin: 0,
    fontSize: Typography.fontSize.sm,
    color: Colors.neutral[600],
  }

  const contentStyles: React.CSSProperties = {
    padding: getPaddingSize(),
  }

  const footerStyles: React.CSSProperties = {
    padding: getPaddingSize(),
    borderTop: `1px solid ${Colors.neutral[200]}`,
    backgroundColor: Colors.neutral[50],
  }

  return (
    <div style={cardStyles} className={className} data-testid={testId}>
      {(title || subtitle) && (
        <div style={headerStyles}>
          {title && <h3 style={titleStyles}>{title}</h3>}
          {subtitle && <p style={subtitleStyles}>{subtitle}</p>}
        </div>
      )}
      
      <div style={contentStyles}>
        {children}
      </div>
      
      {footer && (
        <div style={footerStyles}>
          {footer}
        </div>
      )}
    </div>
  )
}