#!/usr/bin/env python3
"""
维多利亚州博物馆地图 - 本地服务器
Local HTTP Server for Vietnamese Museum Map
"""

import http.server
import socketserver
import os
import webbrowser
import sys
from pathlib import Path

# 配置
PORT = 8000
DIRECTORY = Path(__file__).parent

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)
    
    def end_headers(self):
        # 添加 CORS 和缓存头
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()
    
    def log_message(self, format, *args):
        # 简化日志输出
        if '200' in str(args):
            print(f"✅ {args[0]}")
        else:
            print(f"❌ {format % args}")

def main():
    os.chdir(DIRECTORY)
    
    print("\n" + "="*70)
    print("🗺️  维多利亚州博物馆地图 - 本地服务器")
    print("="*70)
    print(f"📂 目录: {DIRECTORY}")
    print(f"🌐 URL:  http://localhost:{PORT}")
    print(f"🌐 URL:  http://127.0.0.1:{PORT}")
    print("="*70)
    print("\n按 Ctrl+C 停止服务器\n")
    
    try:
        with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
            print(f"✅ 服务器正在运行...")
            print(f"💡 在浏览器中打开: http://localhost:{PORT}/index.html\n")
            
            # 自动打开浏览器
            try:
                webbrowser.open(f'http://localhost:{PORT}/index.html', new=2)
                print("🌐 浏览器应该已自动打开...")
            except:
                print("⚠️  请手动在浏览器中打开 http://localhost:{PORT}/index.html")
            
            httpd.serve_forever()
    
    except KeyboardInterrupt:
        print("\n\n✋ 服务器已停止")
        sys.exit(0)
    except OSError as e:
        if e.errno == 48:  # Port already in use
            print(f"❌ 端口 {PORT} 已被占用，请尝试:")
            print(f"   killall python3")
            print(f"   或改用其他端口: python3 run-server.py 8001")
        else:
            print(f"❌ 错误: {e}")
        sys.exit(1)

if __name__ == '__main__':
    main()
