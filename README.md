# Simple base setup for React projects

## Project stack:
- Node v22
- Typescript v5
- React v19
- React router v7
- TailwindCSS v3
- DaisyUI
- Vitest
- Vite
- Yarn

## Configured tools:
- ESlint
  - Plugins: eslint (recommended), tseslint (strict), react (recommended, rules of hooks), jsxa11y (strict), config-prettier
- Husky
  - Available hooks: post-install, pre-commit (lint & format), commit-msg (conventional commit rules), pre-push (build & test)
- Lint-staged
  - Will only run checks on staged files  

## Getting Started

### Installation

Install the dependencies:

```bash
yarn
```

### Development

Start the development server with HMR:

```bash
yarn dev
```

Your application will be available at `http://localhost:3000`.

## Building for Production

Create a production build:

```bash
yarn build
```
