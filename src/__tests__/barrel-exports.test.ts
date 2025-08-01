import { describe, it, expect } from 'vitest'

// Test barrel file exports to ensure they work correctly
describe('Barrel File Exports', () => {
  it('should export all components', async () => {
    // This will fail initially in step-1, pass after implementing barrels
    const module = await import('../index-solution')
    
    expect(module.Button).toBeDefined()
    expect(module.Input).toBeDefined()
    expect(module.Card).toBeDefined()
    expect(module.Modal).toBeDefined()
    expect(module.Badge).toBeDefined()
  })

  it('should export all design tokens', async () => {
    const module = await import('../index-solution')
    
    expect(module.Colors).toBeDefined()
    expect(module.Spacing).toBeDefined()
    expect(module.Typography).toBeDefined()
    expect(module.Shadows).toBeDefined()
  })

  it('should export all utilities', async () => {
    const module = await import('../index-solution')
    
    expect(module.formatCurrency).toBeDefined()
    expect(module.formatDate).toBeDefined()
    expect(module.isValidEmail).toBeDefined()
  })

  it('should export namespace objects', async () => {
    const module = await import('../index-solution')
    
    expect(module.Tokens).toBeDefined()
    expect(module.Components).toBeDefined()
    expect(module.Utils).toBeDefined()
    expect(module.Types).toBeDefined()
  })
})