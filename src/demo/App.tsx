import React, { useState } from 'react'
// 🎯 STEP 4: ULTIMATE MAIN BARREL - One import to rule them all!
import { 
  Button, Input, Card, Modal, Badge,
  Colors, BRAND_COLORS, Spacing, COMPONENT_SPACING, Typography, TEXT_STYLES, Shadows, COMPONENT_SHADOWS,
  formatCurrency, formatDate, formatNumber,
  isValidEmail, isValidPassword, isRequired,
  getThemeColors, applyTheme, breakpoints, useBreakpoint
} from '../index'
import type { ButtonProps, InputProps, CardProps, ModalProps, BadgeProps } from '../index'

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

  const appStyles: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: Colors.neutral[50],
    padding: Spacing['2xl'],
    fontFamily: Typography.fontFamily.sans.join(', '),
  }

  const headerStyles: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: Spacing['4xl'],
  }

  const titleStyles: React.CSSProperties = {
    fontSize: Typography.fontSize['4xl'],
    fontWeight: Typography.fontWeight.bold,
    color: Colors.neutral[900],
    marginBottom: Spacing.md,
  }

  const subtitleStyles: React.CSSProperties = {
    fontSize: Typography.fontSize.lg,
    color: Colors.neutral[600],
    marginBottom: Spacing['2xl'],
  }

  const sectionStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gap: Spacing['3xl'],
  }

  const componentGroupStyles: React.CSSProperties = {
    display: 'grid',
    gap: Spacing.xl,
  }

  const groupTitleStyles: React.CSSProperties = {
    fontSize: Typography.fontSize['2xl'],
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.neutral[800],
    marginBottom: Spacing.lg,
  }

  const exampleGridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: Spacing.lg,
  }

  const flexGroupStyles: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: Spacing.lg,
    alignItems: 'center',
  }

  return (
    <div style={appStyles}>
      <header style={headerStyles}>
        <h1 style={titleStyles}>🏆 Solution: Barrel File Mastery</h1>
        <p style={subtitleStyles}>
          Complete transformation from 25+ imports to 1 clean, optimized import!
        </p>
        <div style={flexGroupStyles}>
          <Badge variant="primary">TypeScript</Badge>
          <Badge variant="success">React</Badge>
          <Badge variant="warning">Design System</Badge>
          <Badge variant="secondary">Barrel Files</Badge>
        </div>
      </header>

      <main style={sectionStyles}>
        {/* Buttons Section */}
        <section style={componentGroupStyles}>
          <h2 style={groupTitleStyles}>Buttons</h2>
          <div style={flexGroupStyles}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
            <Button disabled>Disabled</Button>
          </div>
          <div style={flexGroupStyles}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        {/* Inputs Section */}
        <section style={componentGroupStyles}>
          <h2 style={groupTitleStyles}>Inputs</h2>
          <div style={exampleGridStyles}>
            <Input 
              placeholder="Enter your email" 
              value={email}
              onChange={handleEmailChange}
              error={!!emailError}
              errorMessage={emailError}
            />
            <Input type="password" placeholder="Password" />
            <Input placeholder="Disabled input" disabled />
          </div>
        </section>

        {/* Cards Section */}
        <section style={componentGroupStyles}>
          <h2 style={groupTitleStyles}>Cards</h2>
          <div style={exampleGridStyles}>
            <Card 
              title="Basic Card" 
              subtitle="This is a subtitle"
            >
              <p>This is the card content. Cards are great for organizing related information.</p>
            </Card>
            
            <Card 
              title="Product Card"
              footer={
                <div style={flexGroupStyles}>
                  <Badge variant="success">In Stock</Badge>
                  <span style={{ marginLeft: 'auto', fontWeight: Typography.fontWeight.semibold }}>
                    {formatCurrency(99.99)}
                  </span>
                </div>
              }
            >
              <p>Premium TypeScript Course</p>
              <p style={{ fontSize: Typography.fontSize.sm, color: Colors.neutral[600] }}>
                Learn advanced patterns and best practices
              </p>
            </Card>
            
            <Card title="Date Example">
              <p>Today's date: {formatDate(new Date(), 'long')}</p>
              <p>Relative: {formatDate(new Date(Date.now() - 86400000), 'relative')}</p>
            </Card>
          </div>
        </section>

        {/* Modal Section */}
        <section style={componentGroupStyles}>
          <h2 style={groupTitleStyles}>Modal</h2>
          <Button onClick={() => setIsModalOpen(true)}>
            Open Modal
          </Button>
          
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Example Modal"
          >
            <p>This is a modal dialog. You can put any content here.</p>
            <div style={{ marginTop: Spacing.lg, display: 'flex', gap: Spacing.md }}>
              <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                Confirm
              </Button>
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
            </div>
          </Modal>
        </section>

        {/* Badges Section */}
        <section style={componentGroupStyles}>
          <h2 style={groupTitleStyles}>Badges</h2>
          <div style={flexGroupStyles}>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
          </div>
          <div style={flexGroupStyles}>
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
            <Badge size="lg">Large</Badge>
          </div>
          <div style={flexGroupStyles}>
            <Badge dot variant="primary" />
            <Badge dot variant="success" />
            <Badge dot variant="danger" />
            <span>Status indicators</span>
          </div>
        </section>
      </main>
    </div>
  )
}