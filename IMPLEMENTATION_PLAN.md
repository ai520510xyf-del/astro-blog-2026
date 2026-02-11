# Astro-Blog SEO 和功能增强实施计划

## 阶段 1: SEO 基础优化（高优先级）

### 1.1 创建 SEO 组件
- [ ] `src/components/SEO.astro` - 统一管理 meta 标签
  - Open Graph 标签
  - Twitter Card 标签
  - Canonical URL
  - 结构化数据注入点

### 1.2 添加 robots.txt
- [ ] `public/robots.txt`

### 1.3 JSON-LD 结构化数据
- [ ] `src/components/StructuredData.astro`
  - WebSite schema
  - BlogPosting schema
  - BreadcrumbList schema

### 1.4 RSS Feed
- [ ] 安装 `@astrojs/rss`
- [ ] 创建 `src/pages/rss.xml.js`

---

## 阶段 2: 功能增强

### 2.1 搜索功能
- [ ] 安装 Pagefind
- [ ] 配置构建后脚本

### 2.2 评论系统
- [ ] 集成 giscus 组件

### 2.3 阅读进度条
- [ ] `src/components/ReadingProgress.astro`

### 2.4 相关文章推荐
- [ ] 基于标签的相关文章组件

---

## 阶段 3: 技术债务清理

### 3.1 删除重复路由
- [ ] 删除 `blog/[id].astro`
- [ ] 统一使用 `blog/[slug].astro`

### 3.2 类型统一
- [ ] 更新 content schema
- [ ] 修复 BlogCard 类型定义

### 3.3 样式提取
- [ ] 创建全局 CSS 文件
- [ ] 移除组件内 scoped CSS
