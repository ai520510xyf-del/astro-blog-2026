#!/bin/bash

echo "🔍 Astro Blog 诊断工具"
echo "===================="
echo ""

PROJECT_DIR="/data/data/com.termux/files/home/astro-blog"

echo "📂 检查项目目录..."
if [ -d "$PROJECT_DIR" ]; then
    echo "✅ 项目目录存在"
    cd "$PROJECT_DIR"
else
    echo "❌ 项目目录不存在: $PROJECT_DIR"
    exit 1
fi

echo ""
echo "📄 检查关键文件..."

FILES=(
    "package.json"
    "astro.config.mjs"
    "src/pages/index.astro"
    "src/pages/blog/index.astro"
    "src/pages/blog/[slug].astro"
    "src/content/config.ts"
)

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file (缺失)"
    fi
done

echo ""
echo "📦 检查 Node.js..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo "✅ Node.js: $NODE_VERSION"
else
    echo "❌ Node.js 未安装"
fi

if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    echo "✅ npm: $NPM_VERSION"
else
    echo "❌ npm 未安装"
fi

echo ""
echo "📦 检查依赖..."
if [ -d "node_modules" ]; then
    echo "✅ node_modules 存在"
else
    echo "❌ node_modules 不存在 (需要运行 npm install)"
fi

echo ""
echo "================================"
echo "🚀 下一步操作："
echo ""
echo "如果所有检查都通过："
echo "  cd $PROJECT_DIR"
echo "  npm run dev"
echo ""
echo "如果有缺失的文件或依赖："
echo "  cd $PROJECT_DIR"
echo "  npm install"
echo "  npm run dev"
echo ""
echo "如果端口被占用："
echo "  npx astro dev --port 3000"
echo ""
