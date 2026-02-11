# Deployment Guide

This guide covers deploying your Astro Blog to various platforms.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Deployment Platforms](#deployment-platforms)
- [Custom Domains](#custom-domains)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before deploying, ensure:

1. All dependencies are installed (`npm install`)
2. The build succeeds locally (`npm run build`)
3. Environment variables are configured

---

## Environment Variables

Create a `.env` file in your project root:

```bash
# Site Configuration
SITE_URL=https://your-domain.com
SITE_NAME=Your Blog Name

# Build Configuration
NODE_ENV=production
```

**Important**: Never commit `.env` files to version control. Use `.env.example` as a template.

---

## Deployment Platforms

### Vercel (Recommended)

Vercel provides zero-config deployment for Astro projects.

#### Automated Deployment

1. Push your code to GitHub
2. Import your repository at [vercel.com](https://vercel.com)
3. Vercel automatically detects Astro and configures build settings
4. Set environment variables in Vercel dashboard
5. Deploy!

#### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Environment Variables in Vercel

Go to: Project Settings > Environment Variables

| Variable | Value |
|----------|-------|
| `SITE_URL` | Your production URL |
| `SITE_NAME` | Your blog name |

---

### Netlify

#### Automated Deployment

1. Push your code to GitHub
2. Import at [netlify.com](https://netlify.com)
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Set environment variables

#### Manual Deployment

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

---

### GitHub Pages

The project includes a GitHub Actions workflow for automatic deployment.

#### Setup

1. Go to repository **Settings** > **Pages**
2. Source: **GitHub Actions**
3. Push to main branch - deployment happens automatically

#### Manual Deployment

```bash
# Build
npm run build

# Deploy using gh-pages branch
npx gh-pages -d dist
```

---

### Cloudflare Pages

#### Automated Deployment

1. Connect your GitHub repository
2. Build configuration:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
3. Set environment variables

---

## Custom Domains

### Vercel

1. Go to **Settings** > **Domains**
2. Add your domain
3. Update DNS records as shown

### Netlify

1. Go to **Domain management**
2. Add custom domain
3. Update DNS records

### GitHub Pages

1. Create a `CNAME` file in `public/` directory:
   ```
   www.yourdomain.com
   ```
2. Configure DNS at your provider

---

## Performance Optimization

### Before Deployment

1. **Optimize images** - Use Astro's `<Image />` component
2. **Minify CSS/JS** - Enabled by default
3. **Enable compression** - Most platforms handle this

### Build Output

The `dist/` folder contains:
- Static HTML files
- Optimized assets
- Generated sitemap.xml

---

## Troubleshooting

### Build Failures

**Issue**: Build fails with "Cannot find module"

**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
```

**Issue**: Type errors during build

**Solution**:
```bash
npm run type-check
# Fix any reported errors
npm run build
```

### Deployment Issues

**Issue**: Site deployed but showing blank page

**Solution**: Check `SITE_URL` is set correctly in environment variables.

**Issue**: Images not loading

**Solution**: Verify image paths are correct and images exist in `public/` folder.

### Post-Deployment Checks

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] Blog posts are accessible
- [ ] Navigation works
- [ ] Sitemap is available at `/sitemap-index.xml`
- [ ] robots.txt is accessible at `/robots.txt`
- [ ] No console errors

---

## CI/CD

The project includes GitHub Actions workflows for:

- **CI**: Lint, format check, and build on every push/PR
- **Deploy**: Automatic deployment on merge to main
- **Release**: Automated version tagging

View workflow status in the **Actions** tab of your repository.
