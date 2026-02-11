# Astro Blog

A modern, high-performance static blog built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and [TypeScript](https://typescriptlang.org).

![Astro](https://img.shields.io/badge/Astro-4.16-BC52EE?logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue)

## Features

- **Fast** - Static site generation with zero JavaScript by default
- **Responsive** - Mobile-first design with Tailwind CSS
- **SEO Optimized** - Built-in sitemap, meta tags, and semantic HTML
- **Accessible** - WCAG compliant components with proper ARIA labels
- **Type-Safe** - Full TypeScript support for reliable development
- **Dark Mode** - Automatic theme switching with localStorage persistence
- **Content Collections** - Type-safe content management with Astro
- **Syntax Highlighting** - Beautiful code blocks with Shiki

## Quick Start

### Prerequisites

- Node.js 20 or higher
- npm, pnpm, or yarn

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

Open [http://localhost:4321](http://localhost:4321) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues automatically |
| `npm run type-check` | Run Astro type checker |

## Project Structure

```
astro-blog/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── BlogCard.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── Hero.astro
│   ├── content/         # Blog posts
│   │   ├── config.ts    # Content collection schema
│   │   └── posts/       # Markdown/MDX posts
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro
│   ├── pages/           # File-based routing
│   │   ├── index.astro
│   │   ├── about.astro
│   │   └── blog/
│   └── styles/          # Global styles
├── docs/                # Documentation
├── astro.config.mjs     # Astro configuration
├── tailwind.config.ts   # Tailwind configuration
└── package.json
```

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Astro](https://astro.build) | 4.16 | Static Site Generator |
| [Tailwind CSS](https://tailwindcss.com) | 3.4 | Styling |
| [TypeScript](https://typescriptlang.org) | 5.7 | Type Safety |
| [MDX](https://mdxjs.com) | 3.1 | Enhanced Markdown |

## Adding Blog Posts

Create a new Markdown/MDX file in `src/content/posts/`:

```markdown
---
title: 'Your Post Title'
description: 'A brief description for SEO and previews'
pubDate: 2024-01-15
tags: ['Astro', 'Web Development']
author: 'Your Name'
draft: false
---

# Your Content

Write your blog post content here using Markdown!
```

## Configuration

### Environment Variables

Create a `.env` file:

```bash
SITE_URL=https://yourdomain.com
SITE_NAME=Your Blog Name
```

### Site Configuration

Edit `astro.config.mjs` for:
- Site integrations (MDX, React, Tailwind)
- Build options
- Markdown plugins
- Sitemap settings

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?s=https://github.com/your-username/astro-blog)

### Netlify

```bash
npm run build
# Deploy the 'dist' folder
```

### GitHub Pages

Push to the main branch and the GitHub Actions workflow will deploy automatically.

See [Deployment Guide](docs/DEPLOYMENT.md) for detailed instructions.

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## Documentation

- [Development Guide](CONTRIBUTING.md) - How to contribute
- [Deployment Guide](docs/DEPLOYMENT.md) - Deployment instructions
- [Astro Docs](https://docs.astro.build) - Official documentation

## License

MIT License - see [LICENSE](LICENSE) for details.

## Acknowledgments

Built with:
- [Astro](https://astro.build) - The web framework for content-driven websites
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Shiki](https://shiki.style) - Syntax highlighter
