# 🌐 本地服务器使用说明

## 问题原因

当直接打开 `index.html` 文件时（`file://` 协议），浏览器出于安全考虑会**阻止加载本地相对路径文件**。

| 方式 | 协议 | 图片加载 |
|------|------|---------|
| VS Code 预览 | `http://localhost` | ✅ 正常 |
| 直接打开文件 | `file://` | ❌ 被阻止 |
| 本地服务器 | `http://localhost` | ✅ 正常 |

## 快速开始

### 方法 1️⃣ : Python（推荐 macOS/Linux）

```bash
# 进入项目目录
cd /Users/yangzhang/Downloads/VIC-museum

# 运行服务器
python3 run-server.py
```

浏览器会自动打开，如果没有的话，手动访问：
- **http://localhost:8000**

### 方法 2️⃣ : Node.js（如果已安装）

```bash
cd /Users/yangzhang/Downloads/VIC-museum
npx http-server -p 8000
```

### 方法 3️⃣ : VS Code 内置预览

在 VS Code 中右键点击 `index.html`，选择 "Open Preview"

## 停止服务器

在终端中按 **Ctrl+C** 即可停止服务器。

## 常见问题

**Q: 端口 8000 已被占用**
```bash
# 使用其他端口
python3 run-server.py
# 或修改脚本中的 PORT = 8001
```

**Q: 我该用哪个方法？**
- 简单开发：VS Code 预览
- 完整测试：`python3 run-server.py`
- 与他人分享：使用 ngrok 等工具

## 服务器特性

✅ 自动打开浏览器  
✅ CORS 支持（跨域资源共享）  
✅ 简化的日志输出  
✅ Ctrl+C 优雅关闭  
✅ 支持 images/ 目录下的所有图片

---

一旦运行服务器，所有 27 个博物馆的图片就会正常显示了！ 🎉
