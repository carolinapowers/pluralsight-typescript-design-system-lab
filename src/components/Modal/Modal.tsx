import React from 'react'
import { ModalProps } from '../../types/component'
import { Colors } from '../../tokens/colors'
import { Spacing } from '../../tokens/spacing'
import { Typography } from '../../tokens/typography'
import { Shadows } from '../../tokens/shadows'

export const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  title,
  size = 'md',
  closeOnOverlayClick = true,
  className = '',
  testId,
}) => {
  if (!isOpen) return null

  const getModalWidth = () => {
    switch (size) {
      case 'sm':
        return '400px'
      case 'lg':
        return '800px'
      default:
        return '600px'
    }
  }

  const overlayStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  }

  const modalStyles: React.CSSProperties = {
    backgroundColor: Colors.neutral[50],
    borderRadius: '0.5rem',
    boxShadow: Shadows.xl,
    width: getModalWidth(),
    maxWidth: '90vw',
    maxHeight: '90vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  }

  const headerStyles: React.CSSProperties = {
    padding: Spacing['2xl'],
    borderBottom: `1px solid ${Colors.neutral[200]}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

  const titleStyles: React.CSSProperties = {
    margin: 0,
    fontSize: Typography.fontSize.xl,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.neutral[900],
  }

  const closeButtonStyles: React.CSSProperties = {
    background: 'none',
    border: 'none',
    fontSize: Typography.fontSize.xl,
    cursor: 'pointer',
    color: Colors.neutral[500],
    padding: Spacing.xs,
    borderRadius: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
  }

  const contentStyles: React.CSSProperties = {
    padding: Spacing['2xl'],
    flex: 1,
    overflow: 'auto',
  }

  return (
    <div
      style={overlayStyles}
      onClick={closeOnOverlayClick ? onClose : undefined}
      data-testid={testId}
    >
      <div
        style={modalStyles}
        className={className}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div style={headerStyles}>
            <h2 style={titleStyles}>{title}</h2>
            <button
              style={closeButtonStyles}
              onClick={onClose}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = Colors.neutral[100]
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              ×
            </button>
          </div>
        )}
        
        <div style={contentStyles}>
          {children}
        </div>
      </div>
    </div>
  )
}