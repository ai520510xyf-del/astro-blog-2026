#!/data/data/com.termux/files/usr/bin/bash
# Astro Blog - Agent Team 快速启动脚本

set -euo pipefail

# 颜色定义
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

PROJECT_DIR="$HOME/astro-blog"
SESSION_NAME="astro-blog"

echo -e "${CYAN}=====================================${NC}"
echo -e "${CYAN}  Astro Blog Agent Team 启动器  ${NC}"
echo -e "${CYAN}=====================================${NC}"
echo ""

# 检查项目目录
if [ ! -d "$PROJECT_DIR" ]; then
    echo -e "${YELLOW}⚠️  项目目录不存在: $PROJECT_DIR${NC}"
    exit 1
fi

cd "$PROJECT_DIR"

# 检查依赖
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 安装依赖...${NC}"
    npm install
    echo -e "${GREEN}✓ 依赖安装完成${NC}"
fi

# 启动选项
echo -e "${BLUE}选择启动模式:${NC}"
echo ""
echo "  1. Agent Team 工作区 (推荐)"
echo "  2. 仅开发服务器"
echo "  3. 构建预览"
echo "  4. 运行测试"
echo ""
read -p "请选择 [1-4]: " choice

case $choice in
    1)
        echo -e "${GREEN}🚀 启动 Agent Team 工作区...${NC}"
        ~/.tmux/scenarios/astro-blog.sh "$SESSION_NAME" "$PROJECT_DIR"
        ;;
    2)
        echo -e "${GREEN}🚀 启动开发服务器...${NC}"
        npm run dev
        ;;
    3)
        echo -e "${GREEN}🔨 构建项目...${NC}"
        npm run build
        echo -e "${GREEN}📋 启动预览服务器...${NC}"
        npm run preview
        ;;
    4)
        echo -e "${GREEN}✅ 运行测试...${NC}"
        npm run lint
        echo -e "${GREEN}✓ 类型检查通过${NC}"
        ;;
    *)
        echo -e "${YELLOW}⚠️  无效选择${NC}"
        exit 1
        ;;
esac
