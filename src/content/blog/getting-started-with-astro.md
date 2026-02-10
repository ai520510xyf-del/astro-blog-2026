---
title: "Getting Started with Astro 5"
description: "Learn how to create your first Astro 5 project and build a fast, modern website."
date: 2024-02-07
tags: ["astro", "tutorial", "web-development"]
---

# Getting Started with Astro 5

Astro 5 is the latest version of the modern static site generator. Let's get started!

## Installation

Create a new Astro project with:

```bash
npm create astro@latest my-blog
cd my-blog
npm install
npm run dev
```

## Project Structure

```
src/
├── pages/       # Route handlers (file-based routing)
├── layouts/     # Reusable page layouts
├── components/  # Reusable UI components
└── content/     # Blog posts/content
```

## Creating Your First Page

Create a new file in `src/pages/index.astro`:

```astro
---
const pageTitle = "My Home Page";
---
<html>
  <head>
    <title>{pageTitle}</title>
  </head>
  <body>
    <h1>{pageTitle}</h1>
  </body>
</html>
```

## Content Collections

Astro 5 introduces content collections for managing blog posts:

```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { blog };
```

## Next Steps

- Add Tailwind CSS for styling
- Set up MDX for blog posts
- Deploy to Vercel, Netlify, or GitHub Pages

Happy coding!
