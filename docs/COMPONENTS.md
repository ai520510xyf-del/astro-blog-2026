# Component Reference

This guide describes all reusable components in the Astro Blog.

## Table of Contents

- [Layout Components](#layout-components)
- [Page Components](#page-components)
- [UI Components](#ui-components)

---

## Layout Components

### Layout.astro

The main layout wrapper for all pages.

**Location**: `src/layouts/Layout.astro`

**Props**:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'Astro Blog'` | Page title |
| `description` | `string` | `'A modern blog...'` | Meta description |

**Features**:
- Responsive header with navigation
- Footer with social links
- Canonical URL generation
- SEO meta tags

**Usage**:

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="About" description="Learn about us">
  <main>Your content here</main>
</Layout>
```

---

## Page Components

### index.astro

Homepage with hero section and latest posts.

**Location**: `src/pages/index.astro`

### about.astro

About page with project information.

**Location**: `src/pages/about.astro`

### blog/index.astro

Blog listing with pagination and tag filtering.

**Location**: `src/pages/blog/index.astro`

**Query Parameters**:

| Parameter | Description |
|-----------|-------------|
| `tag` | Filter posts by tag |
| `page` | Page number (default: 1) |

### blog/[slug].astro

Individual blog post page.

**Location**: `src/pages/blog/[slug].astro`

**Features**:
- Post content rendering
- Previous/Next navigation
- Share buttons
- Reading time display

---

## UI Components

### Header.astro

Responsive navigation header with dark mode toggle.

**Location**: `src/components/Header.astro`

**Features**:
- Active route highlighting
- Mobile menu toggle
- Dark mode switch with localStorage
- Smooth scroll navigation

**Usage**:

```astro
---
import Header from '../components/Header.astro';
---

<Header />
```

---

### Footer.astro

Site footer with links and social icons.

**Location**: `src/components/Footer.astro`

**Sections**:
- About description
- Quick navigation links
- Social media links (GitHub, Twitter)
- Copyright notice

**Usage**:

```astro
---
import Footer from '../components/Footer.astro';
---

<Footer />
```

---

### BlogCard.astro

Card component for displaying blog post previews.

**Location**: `src/components/BlogCard.astro`

**Props**:

| Prop | Type | Description |
|------|------|-------------|
| `post` | `BlogPost` | Post object with all metadata |

**BlogPost Type**:

```typescript
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: string | null;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
}
```

**Features**:
- Hover animations
- Cover image with fallback
- Category badge
- Tag list (max 3)
- Responsive layout

**Usage**:

```astro
---
import BlogCard from '../components/BlogCard.astro';

const post = {
  id: '1',
  title: 'My Post',
  slug: 'my-post',
  excerpt: 'A brief summary...',
  date: '2024-01-15',
  category: 'Technology',
  tags: ['astro', 'web'],
  readTime: '5 min'
};
---

<BlogCard post={post} />
```

---

### Hero.astro

Hero section for landing pages.

**Location**: `src/components/Hero.astro`

**Features**:
- Animated background elements
- Gradient background
- Call-to-action buttons

**Usage**:

```astro
---
import Hero from '../components/Hero.astro';
---

<Hero />
```

---

## Creating New Components

### Component Template

```astro
---
// Component props interface
interface Props {
  title: string;
  subtitle?: string;
}

// Destructure props
const { title, subtitle } = Astro.props;
---

// Component template
<div class="my-component">
  <h2>{title}</h2>
  {subtitle && <p>{subtitle}</p>}
</div>

// Scoped styles
<style>
  .my-component {
    /* component styles */
  }
</style>
```

### Best Practices

1. **Use interfaces for props** - Define TypeScript interfaces for all props
2. **Keep components focused** - Single responsibility per component
3. **Use scoped styles** - Keep CSS isolated with `<style>` tags
4. **Provide defaults** - Use sensible default values for optional props
5. **Document your components** - Add JSDoc comments for complex logic

---

## Component Styling

### Tailwind Classes

Use utility classes for layout and spacing:

```astro
<div class="container mx-auto px-4 py-8">
  <h1 class="text-2xl font-bold">Title</h1>
</div>
```

### Scoped Styles

Use `<style>` tags for component-specific styles:

```astro
<style>
  .custom-animation {
    animation: fade-in 0.3s ease-in-out;
  }

  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>
```

### CSS Variables

Available global CSS variables:

```css
--primary-50: #f0f9ff;
--primary-600: #0284c7;
--border: hsl(var(--border));
--muted: hsl(var(--muted));
```
