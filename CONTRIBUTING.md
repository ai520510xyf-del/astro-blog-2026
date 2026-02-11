# Contributing Guide

Thank you for your interest in contributing to this Astro Blog! This guide will help you get started.

## Table of Contents

- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Commit Convention](#commit-convention)
- [Pull Request Process](#pull-request-process)

---

## Development Setup

### Prerequisites

- Node.js 20 or higher
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/astro-blog.git
cd astro-blog

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`.

---

## Project Structure

```
astro-blog/
├── .github/
│   └── workflows/       # CI/CD configurations
├── public/              # Static assets (images, favicon, robots.txt)
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── BlogCard.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── Hero.astro
│   ├── content/         # Blog posts and content collections
│   │   ├── config.ts    # Content schema definitions
│   │   └── posts/       # Markdown/MDX blog posts
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro
│   ├── pages/           # File-based routing
│   │   ├── index.astro
│   │   ├── about.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [slug].astro
│   └── styles/          # Global styles
│       └── global.css
├── astro.config.mjs     # Astro configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json
```

---

## Coding Standards

### Code Style

We use Prettier for code formatting. The project is configured with:
- Single quotes
- Semicolons
- 2-space indentation
- 100 character line width

```bash
# Format all files
npm run format

# Check formatting
npm run format:check
```

### Linting

We use ESLint for code quality checks:

```bash
# Run linter
npm run lint

# Fix linting issues
npm run lint:fix
```

### Type Checking

```bash
# Run Astro type checker
npm run type-check
```

### TypeScript Guidelines

- Use `interface` for object shapes
- Use `type` for unions, intersections, primitives
- Avoid `any` - use `unknown` when type is truly unknown
- Define props interfaces explicitly in components

---

## Commit Convention

We use Conventional Commits for commit messages:

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Code style changes (formatting) |
| `refactor` | Code refactoring |
| `perf` | Performance improvements |
| `test` | Adding or updating tests |
| `chore` | Maintenance tasks |
| `ci` | CI/CD changes |

### Examples

```
feat(blog): add tag filtering functionality
fix(header): resolve mobile menu not closing on navigation
docs(readme): update installation instructions
refactor(components): extract shared button styles
```

### Commit Hooks

Husky is configured to run pre-commit checks:
- Prettier format check
- Commitlint message validation

---

## Pull Request Process

### Before Creating a PR

1. **Update your branch** with the latest main:
   ```bash
   git checkout main
   git pull origin main
   git checkout your-branch
   git rebase main
   ```

2. **Run all checks**:
   ```bash
   npm run format
   npm run lint
   npm run type-check
   npm run build
   ```

3. **Write meaningful tests** for new features (when applicable)

### Creating a PR

1. Push your branch to GitHub
2. Create a Pull Request using the provided template
3. Fill in all required sections
4. Link related issues using `#issue-number`

### PR Review Process

1. Automated checks must pass (CI/CD)
2. At least one maintainer approval required
3. Address all review comments
4. Squash commits if requested

### PR Title Format

Use the same conventional commit format for PR titles:

```
feat(blog): add tag filtering
fix(layout): resolve responsive navbar issue
```

---

## Adding Blog Posts

1. Create a new Markdown/MDX file in `src/content/posts/`
2. Add frontmatter with required fields:

```yaml
---
title: 'Your Post Title'
description: 'A brief description for SEO'
pubDate: 2024-01-15
tags: ['Astro', 'Web Development']
author: 'Your Name'
draft: false
---
```

3. Write your content using Markdown
4. The post will automatically appear in the blog index

---

## Questions?

Feel free to open an issue for clarification or discussion.
