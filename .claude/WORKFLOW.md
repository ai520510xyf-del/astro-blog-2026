# Astro Blog - Agent Team 工作流

## 🚀 快速启动

```bash
# 进入项目目录
cd ~/astro-blog

# 启动 Agent Team tmux 会话
~/.tmux/scenarios/astro-blog.sh
```

---

## 📋 开发工作流

### 1. 新功能开发

```
[Product Owner]
    ↓ 提出
[Tech Lead]
    ↓ 分析 & 拆解
[Frontend/Content/DevOps]
    ↓ 开发
[QA]
    ↓ 测试
[Tech Lead]
    ↓ 审查
[DevOps]
    ↓ 部署
[Product Owner]
    ↓ 验收
✅ 完成
```

### 2. 任务模板

#### 功能请求模板

```markdown
## 功能: [简短描述]

### 背景
[为什么需要这个功能]

### 目标
- [ ] 目标 1
- [ ] 目标 2

### 验收标准
- [ ] 标准 1
- [ ] 标准 2

### 技术建议
[可选的技术方案]

### 优先级
- [ ] P0 - Critical
- [ ] P1 - High
- [ ] P2 - Normal
- [ ] P3 - Low
```

#### Bug 报告模板

```markdown
## Bug: [简短描述]

### 复现步骤
1.
2.
3.

### 期望行为
[应该发生什么]

### 实际行为
[实际发生了什么]

### 环境
- 浏览器:
- 设备:
- Astro 版本:

### 优先级
- [ ] P0 - Critical
- [ ] P1 - High
- [ ] P2 - Normal
- [ ] P3 - Low
```

---

## 🔄 迭代流程

### Sprint 计划 (每周)

```
1. Product Owner 回顾上个 Sprint
2. Tech Lead 提出技术改进建议
3. 确定 Sprint 目标
4. 分配任务给各 Agent
5. 设定截止日期
```

### 日常站会 (每日)

```
格式: 异步文本报告

各 Agent 报告:
- ✅ 昨日完成
- 🔄 进行中
- 🚧 遇到阻塞
- 📅 今日计划
```

### Sprint 复盘 (每周末)

```
1. 回顾目标达成情况
2. 总结经验教训
3. 调整工作流程
4. 技术债务清理
```

---

## 📊 质量检查清单

### 代码提交前

```markdown
- [ ] 代码通过 Prettier 格式化
- [ ] TypeScript 无类型错误
- [ ] ESLint 无警告
- [ ] 添加了必要的注释
- [ ] 更新了相关文档
- [ ] 测试覆盖新增功能
- [ ] Lighthouse 分数达标
```

### 内容发布前

```markdown
- [ ] Markdown 格式正确
- [ ] Frontmatter 完整
- [ ] 图片已优化
- [ ] 添加了 alt 文本
- [ ] SEO 元数据完整
- [ ] 内部链接正确
- [ ] 在移动端预览正常
```

### 部署前

```markdown
- [ ] 所有测试通过
- [ ] 构建成功无警告
- [ ] 环境变量配置正确
- [ ] 备份了生产数据
- [ ] 回滚计划准备
- [ ] 监控已配置
```

---

## 🎯 当前待办事项

### P0 - Critical
- [ ] 修复生产环境 Bug (如果有)

### P1 - High
- [ ] 添加搜索功能
- [ ] 实现 RSS 订阅
- [ ] 优化 SEO 元数据

### P2 - Normal
- [ ] 添加深色模式
- [ ] 实现标签分类页面
- [ ] 添加评论系统
- [ ] 配置 CI/CD

### P3 - Low
- [ ] 添加阅读进度条
- [ ] 优化字体加载
- [ ] 添加社交分享按钮
- [ ] 实现图片懒加载

---

## 🛠️ 快捷命令

```bash
# 开发
npm run dev              # 启动开发服务器
npm run build           # 构建生产版本
npm run preview         # 预览构建

# 代码质量
npm run format          # 格式化代码
npm run format:check    # 检查格式
npm run lint            # 类型检查

# Git
git checkout -b feature/name
git commit -m "feat: description"
git push origin feature/name
```

---

## 📈 性能监控

```bash
# Lighthouse CI
npx lhci autorun

# 构建分析
npm run build -- --analyze

# 检查包大小
npx vite-bundle-visualizer
```

---

## 🐛 调试技巧

### Astro 问题

```bash
# 启用详细日志
DEBUG=astro:* npm run dev

# 清除缓存
rm -rf .astro dist node_modules/.vite
```

### 构建问题

```bash
# 检查类型
astro check

# 查看构建产物
npm run build && ls -la dist/
```

### 性能问题

```bash
# Lighthouse 审计
npx lighthouse http://localhost:4321 --view

# 网络请求分析
# Chrome DevTools → Network
```

---

## 📚 学习资源

### 官方文档
- [Astro Docs](https://docs.astro.build)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)

### 最佳实践
- [Web.dev](https://web.dev)
- [MDN Web Docs](https://developer.mozilla.org)
- [Astro Themes](https://astro.build/themes)

---

## 🤝 协作指南

### Agent 间协作规则

1. **尊重专业领域**
   - Frontend Agent 负责前端实现
   - Content Agent 负责内容配置
   - DevOps Agent 负责部署流程

2. **及时沟通**
   - 遇到阻塞立即报告
   - 完成任务及时通知
   - 变更计划提前同步

3. **质量第一**
   - 不通过测试不提交
   - 不审查通过不合并
   - 不验收通过不发布

4. **持续改进**
   - 每个 Sprint 复盘
   - 积累技术经验
   - 优化工作流程

---

## 📝 会议记录模板

```markdown
## 日期: YYYY-MM-DD
## 参与者: Tech Lead, Frontend, Content, DevOps, QA

### 讨论事项
1. 事项 1
2. 事项 2

### 决策
- 决策 1
- 决策 2

### 行动项
- [ ] [Agent] 任务描述
- [ ] [Agent] 任务描述

### 下次会议
- 时间: YYYY-MM-DD
- 议题:
```

---

## 🔧 故障排查

### 常见问题

**Q: 构建失败**
A: 检查 TypeScript 类型错误 `astro check`

**Q: 样式不生效**
A: 清除缓存 `rm -rf .astro dist`

**Q: 部署后页面空白**
A: 检查控制台错误，验证构建产物

**Q: 内容未显示**
A: 检查 Content Collections 配置

---

## 📞 联系方式

- **项目地址**: `~/astro-blog`
- **配置文件**: `.claude/AGENT_TEAM_CONFIG.md`
- **工作流文件**: `.claude/WORKFLOW.md`
- **Issue 追踪**: GitHub Issues
