# Astro Blog - Agent Team 配置

## 📁 已创建的文件

```
astro-blog/
├── .claude/
│   ├── README.md                    # 本文件
│   ├── AGENT_TEAM_CONFIG.md         # Agent Team 配置
│   ├── WORKFLOW.md                  # 工作流程文档
│   └── ROADMAP.md                   # 项目路线图
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md            # Bug 报告模板
│   │   └── feature_request.md       # 功能请求模板
│   └── PULL_REQUEST_TEMPLATE.md     # PR 模板
└── start-dev.sh                     # 快速启动脚本
```

---

## 🚀 快速开始

### 方式 1: 使用快速启动脚本

```bash
cd ~/astro-blog
./start-dev.sh
```

### 方式 2: 直接使用 tmux 场景

```bash
# 启动 Agent Team 工作区
~/.tmux/scenarios/astro-blog.sh

# 或使用别名（如果已配置）
tm-astro
```

---

## 📋 Agent Team 架构

```
Product Owner (你)
        ↓
   Tech Lead ← → Planner Agent
        ↓
   ┌────┴────┬────────┬────────┐
   ↓         ↓        ↓        ↓
Frontend  Content  DevOps   QA
Agent     Agent    Agent   Agent
```

### Agent 职责

| Agent | 职责 | 技能栈 |
|-------|------|--------|
| **Tech Lead** | 架构设计、代码审查、任务规划 | Astro/React/TS/性能优化 |
| **Frontend** | UI 组件、交互、响应式 | Astro/React/Tailwind/动画 |
| **Content** | 内容结构、SEO、RSS | MDX/Content Collections/OG |
| **DevOps** | CI/CD、测试、部署 | GitHub Actions/Docker/Lighthouse |
| **QA** | 测试、质量保证、a11y | Vitest/Playwright/axe-core |

---

## 🎯 当前项目状态

### ✅ v0.1.0 - MVP (已完成)

- Astro 5 + React + Tailwind CSS
- 基础组件和布局
- 8 篇示例文章
- TypeScript 配置

### 🚧 v0.2.0 - SEO 优化 (进行中)

**目标**: Lighthouse 全 90+

- [ ] Open Graph 标签
- [ ] Twitter Card 标签
- [ ] 结构化数据 (JSON-LD)
- [ ] 图片优化
- [ ] 字体加载优化

### 📅 v0.3.0 - 内容功能 (规划中)

- RSS 订阅
- 标签系统
- 搜索功能
- 阅读进度条

详见 [ROADMAP.md](./ROADMAP.md)

---

## 🔄 工作流程

### 功能开发流程

```
[PO 提出需求]
    ↓
[Tech Lead 分析]
    ↓
[拆解任务]
    ↓
[分配 Agent]
    ↓
[开发实现]
    ↓
[QA 测试]
    ↓
[Tech Lead 审查]
    ↓
[DevOps 部署]
    ↓
[PO 验收]
```

详见 [WORKFLOW.md](./WORKFLOW.md)

---

## ⌨️ tmux 会话布局

### 窗口 1: main (4 网格)

```
┌───────────────┬──────────────┐
│ Tech Lead     │ Frontend     │
│ 工作区         │ (npm dev)    │
│               ├──────────────┤
│               │ Content      │
│               │ 监控         │
│               ├──────────────┤
│               │ DevOps       │
│               │ 监控         │
└───────────────┴──────────────┘
```

### 其他窗口

- `code` - 代码编辑
- `git` - Git 管理 (lazygit)
- `test` - 测试和 QA
- `build` - 构建预览
- `docs` - 文档和任务

---

## 📊 质量标准

### Lighthouse 目标

```
Performance:   95+  ██████████████░░
Accessibility: 95+  ██████████████░░
Best Prac:     90+  ███████████████
SEO:           95+  ██████████████░░
```

### 代码质量

```yaml
typescript:
  strict_mode: true
  coverage: 80%+

eslint:
  config: airbnb-typescript
  autofix: true

prettier:
  print_width: 100
```

---

## 🛠️ 常用命令

### 开发

```bash
npm run dev          # 开发服务器
npm run build        # 构建生产版本
npm run preview      # 预览构建
```

### 代码质量

```bash
npm run format       # 格式化代码
npm run format:check # 检查格式
npm run lint         # 类型检查
```

### Agent Team

```bash
~/.tmux/scenarios/astro-blog.sh  # 启动工作区
./start-dev.sh                   # 快速启动菜单
```

---

## 📝 任务模板

### Bug 报告

使用 `.github/ISSUE_TEMPLATE/bug_report.md`

### 功能请求

使用 `.github/ISSUE_TEMPLATE/feature_request.md`

### Pull Request

使用 `.github/PULL_REQUEST_TEMPLATE.md`

---

## 🎨 设计系统

### 色彩

```css
--primary-500: #0ea5e9;
--gray-900: #111827;
```

### 排版

```css
--font-sans: 'Inter', system-ui;
--font-mono: 'Fira Code', monospace;
```

---

## 📈 性能目标

| 指标 | 目标 |
|------|------|
| First Paint | < 1.5s |
| TTI | < 3.5s |
| JS Size | < 200KB (gzipped) |
| CSS Size | < 50KB (gzipped) |

---

## 🤝 协作指南

### Agent 协作规则

1. **尊重专业领域** - 各 Agent 专注自己的领域
2. **及时沟通** - 遇到问题立即报告
3. **质量第一** - 不通过测试不提交
4. **持续改进** - 每个 Sprint 复盘优化

### 优先级规则

```
P0 - Critical  (阻塞发布)
P1 - High      (重要功能)
P2 - Normal    (常规迭代)
P3 - Low       (优化改进)
```

---

## 📚 学习资源

- [Astro Docs](https://docs.astro.build)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Web.dev](https://web.dev)

---

## 🆘 获取帮助

### 查看文档

```bash
cat .claude/AGENT_TEAM_CONFIG.md   # Agent Team 配置
cat .claude/WORKFLOW.md            # 工作流程
cat .claude/ROADMAP.md             # 项目路线图
```

### 查看任务

```bash
ls -la .claude/tasks/
```

### Agent Team 会话

```bash
# 附加到会话
tmux attach -t astro-blog

# 查看所有窗口
tmux list-windows -t astro-blog
```

---

## 🚀 下一步

```bash
# 1. 启动 Agent Team
cd ~/astro-blog
./start-dev.sh

# 2. 查看当前任务
cat .claude/WORKFLOW.md

# 3. 开始开发
npm run dev
```

---

**配置版本**: 1.0.0
**最后更新**: 2026-02-10
**维护者**: Astro Blog Agent Team
