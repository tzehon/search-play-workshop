# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- Build: `yarn build` or `npm run build`
- Start dev server: `yarn start` or `npm run start`
- Clear cache: `yarn clear` or `npm run clear`
- Serve built files: `yarn serve` or `npm run serve`

## Code Style Guidelines
- This is a Docusaurus project (React-based documentation site)
- Use TypeScript when possible for new components (*.tsx)
- Follow React functional component patterns with hooks
- Import order: React, external libraries, local components, styles
- Use JSX.Element for React component return types
- Prefer destructuring for component props
- Use named exports for components
- Follow existing indentation (2 spaces) and formatting
- Use camelCase for variables and functions, PascalCase for components
- Use descriptive variable and component names
- Document complex logic with comments (/* */ for blocks, // for lines)