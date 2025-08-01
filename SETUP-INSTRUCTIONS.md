# 🚀 Repository Setup Instructions

Follow these steps to create your TypeScript Design System Barrel Lab repository:

## 1. Create New Repository

```bash
# Create new repository directory
mkdir typescript-design-system-barrel-lab
cd typescript-design-system-barrel-lab

# Initialize git
git init
```

## 2. Copy Template Files

Copy all files from the `design-system-template/` directory to your new repository:

```bash
# Copy all template files to your new repo
cp -r /path/to/design-system-template/* ./
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Create Branches for Each Step

```bash
# Create and setup main branch
git add .
git commit -m "Initial commit: Design system template"

# Create step branches
git checkout -b step-1
git checkout -b step-2  
git checkout -b step-3
git checkout -b step-4
git checkout -b step-5
git checkout -b solution

# Return to main
git checkout main
```

## 5. Branch-Specific Setup

### Step 1: Import Chaos (Messy Imports)
```bash
git checkout step-1

# Replace src/demo/App.tsx with App-step1-messy.tsx content
# Remove any barrel files (index.ts files)
# Commit changes showing the "before" state
```

### Step 2: First Barrel (Utils)
```bash
git checkout step-2

# Create src/utils/index.ts with utility exports
# Update App.tsx to use some barrel imports
# Keep some messy imports to show progression
```

### Step 3: Component Barrels
```bash
git checkout step-3

# Create individual component index.ts files
# Create src/components/index.ts
# Update more imports in App.tsx
```

### Step 4: Main Barrel
```bash
git checkout step-4

# Create main src/index.ts with all exports
# Update App.tsx to use clean imports
# Show the full convenience of barrel files
```

### Step 5: Production Optimization
```bash
git checkout step-5

# Update src/index.ts with type-only exports
# Add selective exports for tree-shaking
# Add namespace exports
# Show advanced optimization patterns
```

### Solution: Final Implementation
```bash
git checkout solution

# Copy index-solution.ts to src/index.ts
# Ensure all tests pass
# Complete documentation
```

## 6. Test Each Branch

On each branch:
```bash
npm run dev          # Verify app works
npm run typecheck    # Verify TypeScript
npm run test         # Run tests (some may fail initially)
npm run build        # Verify builds
```

## 7. Create READMEs for Each Step

Create step-specific README files:
- `README-step1.md` - Explain the import chaos problem
- `README-step2.md` - First barrel file benefits  
- `README-step3.md` - Scaling barrel patterns
- `README-step4.md` - Main barrel implementation
- `README-step5.md` - Production optimizations

## 8. Push to GitHub

```bash
# Add remote origin
git remote add origin https://github.com/yourusername/typescript-design-system-barrel-lab.git

# Push all branches
git push -u origin main
git push origin step-1
git push origin step-2
git push origin step-3
git push origin step-4
git push origin step-5
git push origin solution
```

## 🎯 Learning Path Structure

| Branch | Focus | Import Count | Developer Experience |
|--------|-------|--------------|---------------------|
| **step-1** | Problem identification | 20+ per file | 😩 Painful |
| **step-2** | First barrel (utils) | 15 per file | 😐 Slightly better |
| **step-3** | Component barrels | 8 per file | 🙂 Getting better |
| **step-4** | Main barrel | 1-2 per file | 😊 Much better |
| **step-5** | Production ready | 1-2 per file | 🚀 Optimized |
| **solution** | Final implementation | 1-2 per file | ⭐ Perfect |

## 🧪 Validation

Each branch should:
- ✅ Application runs without errors
- ✅ TypeScript compiles successfully  
- ✅ Tests pass (where applicable)
- ✅ Demonstrates the learning objective
- ✅ Clear progression from previous step

Ready to transform TypeScript imports from chaos to clarity! 🎨