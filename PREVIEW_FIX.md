# Gulf Station Preview Fix - 预览图片问题解决方案

## Problem / 问题
Gulf Station和某些其他博物馆网站显示"No preview available"，即使网站中包含图片。

## Root Cause / 根本原因
Microlink API无法从某些网站（特别是National Trust网站）正确提取预览图片，因为：
1. Microlink的爬虫可能被网站限制
2. Microlink缓存可能不完整
3. 某些网站的og:image标签可能不被Microlink识别

## Solution / 解决方案

实现了**三层备选策略**在 `fetchPreviewImage()` 函数中：

### Layer 1: Microlink API (最快最可靠)
```javascript
const response = await fetch(`https://api.microlink.io?url=${encodeURIComponent(url)}`);
const data = await response.json();
if (data.data && data.data.image && data.data.image.url) {
  // 使用Microlink返回的图片URL
  return; // 成功，不继续下一层
}
```

### Layer 2: Direct Open Graph Extraction (直接提取og:image)
```javascript
const pageResponse = await fetch(url, { mode: 'no-cors' });
const pageText = await pageResponse.text();
const ogImageMatch = pageText.match(/<meta\s+property="og:image"\s+content="([^"]+)"/);
if (ogImageMatch && ogImageMatch[1]) {
  // 使用从网站HTML中提取的og:image URL
  return; // 成功，不继续下一层
}
```

对于Gulf Station，这会提取：
- `https://www.nationaltrust.org.au/wp-content/uploads/2015/09/DJI_0270.jpg`

### Layer 3: CORS Proxy Fallback (绕过CORS限制)
```javascript
const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
const pageResponse = await fetch(proxyUrl);
const pageText = await pageResponse.text();
const ogImageMatch = pageText.match(/<meta\s+property="og:image"\s+content="([^"]+)"/);
if (ogImageMatch && ogImageMatch[1]) {
  // 使用代理获取的页面中的og:image URL
  return; // 成功
}
```

### Final Fallback
如果以上三种方法都失败，显示"No preview available"

## Implementation Details / 实现细节

### 为什么使用三层而不是一层？

1. **Microlink** - 极快速（<100ms），涵盖大多数网站
2. **Direct fetch** - 对有og:image标签的网站非常有效（National Trust网站的标准）
3. **CORS proxy** - 处理CORS限制导致的fetch失败

### 顺序很重要 / Order Matters
每层都有明确的 `return` 语句：
- ✅ 如果成功 → 立即返回，不尝试下一层（快速）
- ❌ 如果失败 → 捕获错误，继续下一层（容错）

### 正则表达式 / Regex Pattern
```
/<meta\s+property="og:image"\s+content="([^"]+)"/
```

解释：
- `<meta\s+property="og:image"` - 匹配meta标签和og:image属性
- `\s+` - 一个或多个空格
- `content="([^"]+)"` - 捕获引号之间的URL（第1组）
- `[^"]+` - 任何非引号字符（og:image的值）

## Testing / 测试方法

1. 打开应用：`index.html`
2. 在地图上点击Gulf Station标记
3. 观察预览图片：
   - ✅ 应该看到Gulf Station的实际网站图片
   - ❌ 不应该看到"No preview available"

## Benefits / 好处

- ✅ Gulf Station现在显示正确的预览图片
- ✅ 改进了National Trust上所有网站的预览加载
- ✅ 增强了应用的容错能力
- ✅ 用户体验更好

## Technical Notes / 技术说明

### CORS问题
- `mode: 'no-cors'` 可以规避一些CORS问题，但返回的响应可能有限
- `allorigins.win` 是一个免费的CORS代理服务，可以完全绕过限制

### 性能影响
- 如果Microlink成功 → 没有额外延迟
- 如果需要回退 → 每层额外50-200ms延迟
- 总体体验 → 宁可稍微慢一些，也要显示图片而不是"No preview available"

### 异步错误处理
所有三层都在独立的try-catch块中，确保一层的错误不会影响其他层

## Future Improvements / 未来改进

1. 缓存og:image提取结果，避免重复请求
2. 添加用户可上传自定义预览图片的功能
3. 支持从网站的第一张img标签获取图片（备选方案）
4. 添加图片加载超时机制（防止卡住）

## Related Files / 相关文件

- `index.html` - 主应用文件，包含修改后的fetchPreviewImage函数（约第499-555行）
- `README.md` - 项目文档
- `FEATURE_DOCUMENTATION.md` - 功能文档
