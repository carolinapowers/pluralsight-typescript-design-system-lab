import React, { useState } from 'react'
// STEP 1: MESSY IMPORTS - The Problem We're Solving
import { Button } from '../components/Button/Button'
import { ButtonProps } from '../types/component'
import { Input } from '../components/Input/Input'
import { InputProps } from '../types/component'
import { Card } from '../components/Card/Card'
import { CardProps } from '../types/component'
import { Modal } from '../components/Modal/Modal'
import { ModalProps } from '../types/component'
import { Badge } from '../components/Badge/Badge'
import { BadgeProps } from '../types/component'
import { Colors } from '../tokens/colors'
import { BRAND_COLORS } from '../tokens/colors'
import { Spacing } from '../tokens/spacing'
import { COMPONENT_SPACING } from '../tokens/spacing'
import { Typography } from '../tokens/typography'
import { TEXT_STYLES } from '../tokens/typography'
import { Shadows } from '../tokens/shadows'
import { COMPONENT_SHADOWS } from '../tokens/shadows'
import { formatCurrency } from '../utils/formatters'
import { formatDate } from '../utils/formatters'
import { formatNumber } from '../utils/formatters'
import { isValidEmail } from '../utils/validators'
import { isValidPassword } from '../utils/validators'
import { isRequired } from '../utils/validators'
import { getThemeColors } from '../utils/theme'
import { applyTheme } from '../utils/theme'
import { breakpoints } from '../utils/responsive'
import { useBreakpoint } from '../utils/responsive'

// This is what we want to avoid! 
// 25+ import statements for a single component file
// Imagine this across 50+ component files in a real design system!

export const App: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [emailError, setEmailError] = useState('')

  const handleEmailChange = (value: string) => {
    setEmail(value)
    if (value && !isValidEmail(value)) {
      setEmailError('Please enter a valid email address')
    } else {
      setEmailError('')
    }
  }

  // Rest of component implementation...
  // (Same as clean App.tsx but with messy imports above)
  
  return (
    <div>
      <h1>🚨 Step 1: Import Chaos!</h1>
      <p>Look at all those import statements above! This is the problem we're solving.</p>
      {/* Component implementation continues... */}
    </div>
  )
}