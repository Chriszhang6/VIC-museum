#!/bin/bash

# 维多利亚州博物馆地图 - 启动脚本
# Victorian Museums Map - Quick Start

cd "$(dirname "$0")" || exit

echo ""
echo "======================================================================"
echo "🗺️  维多利亚州博物馆地图 - 本地服务器启动"
echo "======================================================================"
echo ""

# 检查 Python
if ! command -v python3 &> /dev/null && ! command -v /usr/bin/python3 &> /dev/null; then
    echo "❌ Python3 未找到"
    exit 1
fi

PYTHON_CMD="/usr/bin/python3"
PORT=8001

echo "📂 项目目录: $(pwd)"
echo "🌐 访问 URL: http://localhost:$PORT"
echo ""
echo "💡 请在浏览器中打开:"
echo "   👉 http://localhost:$PORT/index.html"
echo ""
echo "⚫ 停止服务器: 按 Ctrl+C"
echo ""
echo "======================================================================"
echo ""

$PYTHON_CMD -m http.server $PORT
