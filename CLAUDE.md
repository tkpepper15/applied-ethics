# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 enterprise application focused on applied ethics content. It's built using the Next.js Enterprise Boilerplate template with App Router architecture. The project includes educational content about corporate ethics, reports, and surveys.

## Development Commands

### Installation
```bash
yarn install --frozen-lockfile
```

### Development Server
```bash
yarn dev
```

### Build and Production
```bash
yarn build
yarn start
```

### Code Quality
```bash
yarn lint                 # Run ESLint
yarn lint:fix             # Fix ESLint errors automatically
yarn prettier             # Check code formatting
yarn prettier:fix         # Format code with Prettier
yarn format              # Format TypeScript, TSX, and Markdown files
```

### Testing
```bash
yarn test                 # Run Jest unit and integration tests
yarn e2e:headless         # Run Playwright end-to-end tests (headless)
yarn e2e:ui               # Run Playwright tests with UI
yarn test-storybook       # Run Storybook smoke tests
```

### Storybook
```bash
yarn storybook            # Start Storybook development server
yarn build-storybook      # Build Storybook for deployment
```

### Analysis and Debugging
```bash
yarn analyze              # Analyze bundle size with webpack-bundle-analyzer
yarn coupling-graph       # Generate component coupling and cohesion graph (creates graph.svg)
```

## Architecture Overview

### Directory Structure
- **`app/`** - Next.js App Router directory containing:
  - `api/` - API routes
  - `layout.tsx` - Root layout component
  - `page.tsx` - Home page
  - Route-based pages for content areas (surveys, reports, learn sections)
  - `navbar.tsx` and `timeline.tsx` - Main UI components
- **`components/`** - Reusable React components organized by component name
- **`styles/`** - Global CSS and Tailwind configuration
- **`public/`** - Static assets
- **`e2e/`** - End-to-end tests using Playwright
- **`.storybook/`** - Storybook configuration

### Key Technologies
- **Next.js 15** with App Router
- **TypeScript** with strict configuration and `ts-reset` for enhanced type safety
- **Tailwind CSS** for styling with utility-first approach
- **Radix UI** components for accessible, headless UI primitives
- **CVA (Class Variance Authority)** for component variant management
- **Jest + React Testing Library** for unit/integration testing
- **Playwright** for end-to-end testing
- **Storybook** for component documentation and testing

### Configuration Files
- **TypeScript**: Strict configuration with absolute imports (baseUrl: ".")
- **ESLint**: Custom configuration with import ordering, Tailwind CSS rules, and Next.js optimizations
- **Environment Variables**: Managed with T3 Env (`env.mjs`) for type-safe environment handling
- **Git Hooks**: Configured for conventional commits using `.pre-commit-config.yaml`

### Testing Strategy
- **Unit/Integration**: Jest with jsdom environment, tests should exclude e2e directory
- **E2E**: Playwright configuration in `playwright.config.ts`
- **Component Testing**: Storybook with play functions for interaction testing
- **Smoke Testing**: Automated via Storybook test runner

## Development Guidelines

### Code Style
- Uses absolute imports from project root
- ESLint enforces import ordering: external → builtin → internal → sibling → parent → index
- Tailwind CSS classes should follow the configured order
- TypeScript strict mode with `noUncheckedIndexedAccess` enabled

### Component Development
- Components should be organized in individual directories under `components/`
- Use Radix UI primitives for accessible components
- Implement variants using CVA for consistent design system
- Write Storybook stories for all components in JSX/TSX format (not MDX)

### Testing Requirements
- Write unit tests for utilities and components
- E2E tests should cover critical user flows
- Use Storybook play functions for component interaction testing
- Ensure Storybook stories work for smoke testing

### Bundle Optimization
- Use `yarn analyze` to monitor bundle size
- The project includes bundle size reporting in CI
- Component coupling can be visualized using `yarn coupling-graph`

## Package Management
- Uses Yarn as package manager (enforced by preinstall script)
- Lock file is committed (`yarn.lock`)
- Patch-package configured for dependency modifications
- Renovate BOT configured for automated dependency updates

## Environment Variables
Environment variables are managed through T3 Env in `env.mjs`:
- Server variables: `ANALYZE` (for bundle analysis)
- Client variables: (none currently defined)
- Runtime validation ensures required variables are present at build time

## Git Workflow
- Conventional commits enforced via pre-commit hooks
- Install hooks: `brew install pre-commit && pre-commit install -t commit-msg`
- Semantic release configured for automated changelog generation