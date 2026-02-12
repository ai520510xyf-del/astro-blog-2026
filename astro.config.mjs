import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    mdx(), 
    react(), 
    tailwind({
      applyBaseStyles: false,
      config: {
        corePlugins: {
          preflight: true,
        },
      },
    }),
  ],
  site: import.meta.env.SITE_URL || 'https://your-domain.com',
  base: '/astro-blog-2026/',
  build: {
    format: 'directory',
  },
  vite: {
    build: {
      cssMinify: 'esbuild',
      minify: 'esbuild',
    },
  },
  markdown: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: [
      'rehype-slug',
      'rehype-autolink-headings',
      'rehype-highlight',
    ],
    shikiConfig: {
      theme: 'github-dark',
      langs: ['javascript', 'typescript', 'python', 'bash', 'css', 'html', 'json', 'jsx', 'tsx'],
    },
  },
  compressHTML: true,
});
