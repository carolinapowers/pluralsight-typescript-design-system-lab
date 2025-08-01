import React from 'react'
import { InputProps } from '../../types/component'
import { Colors } from '../../tokens/colors'
import { Spacing } from '../../tokens/spacing'
import { Typography } from '../../tokens/typography'

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  disabled = false,
  error = false,
  errorMessage,
  onChange,
  className = '',
  testId,
}) => {
  const baseStyles: React.CSSProperties = {
    width: '100%',
    padding: `${Spacing.sm} ${Spacing.md}`,
    borderRadius: '0.375rem',
    border: `1px solid ${error ? Colors.danger[500] : Colors.neutral[300]}`,
    fontSize: Typography.fontSize.base,
    fontFamily: Typography.fontFamily.sans.join(', '),
    outline: 'none',
    transition: 'all 0.2s ease-in-out',
    backgroundColor: disabled ? Colors.neutral[100] : Colors.neutral[50],
    color: disabled ? Colors.neutral[500] : Colors.neutral[900],
    cursor: disabled ? 'not-allowed' : 'text',
  }

  const focusStyles: React.CSSProperties = {
    borderColor: error ? Colors.danger[500] : Colors.primary[500],
    boxShadow: `0 0 0 3px ${error ? Colors.danger[100] : Colors.primary[100]}`,
  }

  return (
    <div style={{ width: '100%' }}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        style={baseStyles}
        className={className}
        data-testid={testId}
        onFocus={(e) => {
          if (!disabled) {
            Object.assign(e.currentTarget.style, focusStyles)
          }
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = error ? Colors.danger[500] : Colors.neutral[300]
          e.currentTarget.style.boxShadow = 'none'
        }}
      />
      {error && errorMessage && (
        <div
          style={{
            marginTop: Spacing.xs,
            fontSize: Typography.fontSize.sm,
            color: Colors.danger[500],
          }}
        >
          {errorMessage}
        </div>
      )}
    </div>
  )
}