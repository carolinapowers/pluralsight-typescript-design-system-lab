import { ReactNode } from 'react'

export interface BaseComponentProps {
  className?: string
  children?: ReactNode
  testId?: string
}

export type ComponentSize = 'sm' | 'md' | 'lg'
export type ComponentVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger'

export interface ButtonProps extends BaseComponentProps {
  variant?: ComponentVariant
  size?: ComponentSize
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  onClick?: () => void
}

export interface InputProps extends BaseComponentProps {
  type?: 'text' | 'email' | 'password' | 'number'
  placeholder?: string
  value?: string
  disabled?: boolean
  error?: boolean
  errorMessage?: string
  onChange?: (value: string) => void
}

export interface CardProps extends BaseComponentProps {
  title?: string
  subtitle?: string
  footer?: ReactNode
  padding?: ComponentSize
  shadow?: boolean
}

export interface ModalProps extends BaseComponentProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  size?: ComponentSize
  closeOnOverlayClick?: boolean
}

export interface BadgeProps extends BaseComponentProps {
  variant?: ComponentVariant
  size?: ComponentSize
  dot?: boolean
}