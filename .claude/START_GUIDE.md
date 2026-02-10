# Astro Blog - Agent Team 快速启动指南

## 🚀 一键启动

```bash
cd ~/astro-blog
./start-dev.sh
```

---

## 📋 启动选项

运行 `./start-dev.sh` 后，你会看到：

```
=====================================
  Astro Blog Agent Team 启动器
=====================================

选择启动模式:

  1. Agent Team 工作区 (推荐)
  2. 仅开发服务器
  3. 构建预览
  4. 运行测试

请选择 [1-4]:
```

---

## 选项说明

### 1. Agent Team 工作区 (推荐)

**启动 6 窗口 tmux 会话：**

```
窗口 1: main      - 4 网格布局 (Tech Lead + 3 个 Agent 监控)
窗口 2: code      - 代码编辑
窗口 3: git       - Git 管理 (lazygit)
窗口 4: test      - 测试和 QA
窗口 5: build     - 构建预览
窗口 6: docs      - 文档和任务
```

**快捷键：**
- `Ctrl+a h/j/k/l` - 切换面板
- `Ctrl+a 1-6` - 切换窗口
- `Ctrl+a d` - 分离会话

---

### 2. 仅开发服务器

```bash
npm run dev
```

访问: http://localhost:4321

---

### 3. 构建预览

```bash
npm run build
npm run preview
```

---

### 4. 运行测试

```bash
npm run lint  # 类型检查
```

---

## 🎯 首次使用

### 1. 检查环境

```bash
cd ~/astro-blog

# 检查 Node.js
node --version  # 需要 18+

# 检查依赖
npm --version
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发

```bash
./start-dev.sh
# 选择 1
```

---

## 📱 tmux 操作

### 基础操作

```
Ctrl+a c     - 新建窗口
Ctrl+a ,     - 重命名窗口
Ctrl+a n     - 下一个窗口
Ctrl+a p     - 上一个窗口
Ctrl+a d     - 分离会话
```

### 面板操作

```
Ctrl+a |     - 垂直分割
Ctrl+a -     - 水平分割
Ctrl+a h/j/k/l - 切换面板
Ctrl+a q     - 显示面板编号
```

### 会话管理

```bash
# 附加到会话
tmux attach -t astro-blog

# 列出会话
tmux ls

# 删除会话
tmux kill-session -t astro-blog
```

---

## 🔄 典型工作流

### 开发新功能

```
1. 启动 Agent Team 工作区
   ./start-dev.sh → 选择 1

2. 在 code 窗口编辑代码
   Ctrl+a 2

3. 在 main 窗口查看实时更新
   Ctrl+a 1

4. 在 test 窗口运行测试
   Ctrl+a 4

5. 在 git 窗口提交代码
   Ctrl+a 3
```

### 内容发布

```
1. 创建新文章
   src/content/posts/new-post.md

2. 查看 Frontend Agent 面板确认
   Ctrl+a 1 → 选择右上面板

3. 构建检查
   Ctrl+a 5 → npm run build

4. Git 提交
   Ctrl+a 3
```

---

## 🛠️ 故障排查

### 问题：端口被占用

```bash
# 查找占用进程
lsof -i :4321

# 杀死进程
kill -9 <PID>
```

### 问题：构建失败

```bash
# 清除缓存
rm -rf .astro dist node_modules/.vite

# 重新构建
npm run build
```

### 问题：类型错误

```bash
# 类型检查
astro check

# 详细日志
DEBUG=astro:* npm run dev
```

---

## 📊 监控面板说明

### Frontend Agent 面板
- 监控 `npm run dev`
- 显示编译错误
- 显示热更新状态

### Content Agent 面板
- 监控内容变化
- RSS 生成状态
- 内容验证

### DevOps Agent 面板
- 构建状态
- 测试结果
- 部署日志

---

## 🎨 自定义配置

### 修改启动脚本

编辑 `~/astro-blog/start-dev.sh`

### 修改 tmux 布局

编辑 `~/.tmux/scenarios/astro-blog.sh`

### 添加新的 Agent

编辑 `.claude/AGENT_TEAM_CONFIG.md`

---

## 💡 快捷提示

### 快速访问文件

```bash
# 编辑主布局
nvim src/layouts/Layout.astro

# 编辑首页
nvim src/pages/index.astro

# 查看配置
cat astro.config.mjs
```

### 快速命令

```bash
# 格式化所有文件
npm run format

# 类型检查
npm run lint

# 预览构建
npm run preview
```

---

## 📞 获取帮助

### 查看文档

```bash
# Agent Team 配置
cat .claude/AGENT_TEAM_CONFIG.md

# 工作流程
cat .claude/WORKFLOW.md

# 项目路线图
cat .claude/ROADMAP.md
```

### tmux 帮助

```bash
# 在 tmux 中按
Ctrl+a ?
```

---

## 🚀 开始开发

```bash
cd ~/astro-blog
./start-dev.sh

# 选择 1 - Agent Team 工作区

# 在 code 窗口开始编码
Ctrl+a 2

# 查看实时更新
Ctrl+a 1

# 祝你编码愉快! 🎉
```
