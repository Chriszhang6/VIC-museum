# 维多利亚州博物馆图片库

**更新时间**: 2026-04-04  
**状态**: ✅ 完整 (26/26)  
**总大小**: 8MB

## 本地图片清单

| # | 博物馆 | 文件名 | 大小 | 来源 |
|---|--------|--------|-----|-----|
| 01 | Old Treasury Building | `01-old-treasury.jpg` | 147KB | 官方网站 og:image |
| 02 | Sovereign Hill | `02-sovereign-hill.jpg` | 1334KB | 官方网站 og:image |
| 03 | Golden Dragon Museum | `03-golden-dragon.jpg` | 369KB | 官方网站 og:image |
| 04 | Bendigo Tramways | `04-bendigo-tramways.jpg` | 44KB | 官方网站 |
| 05 | National Wool Museum | `05-national-wool.jpg` | 272KB | 官方网站 og:image |
| 06 | Flagstaff Hill Maritime Village | `06-flagstaff-hill.jpg` | 88KB | 官方网站 og:image |
| 07 | Beechworth Historic Precinct | `07-beechworth.jpg` | 351KB | explorebeechworth.com.au og:image |
| 08 | Swan Hill Pioneer Settlement | `08-swan-hill.jpg` | 493KB | nationaltrust.org.au og:image |
| 09 | Como House & Garden | `09-como-house.jpg` | 344KB | 官方网站 og:image |
| 10 | Rippon Lea Estate | `10-rippon-lea.jpg` | 107KB | 官方网站 og:image |
| 11 | Labassa | `11-labassa.jpg` | 175KB | 官方网站 og:image |
| 12 | Werribee Mansion | `12-werribee.jpg` | 273KB | 官方网站 og:image |
| 13 | Captain Cook's Cottage | `13-captain-cook.jpg` | 252KB | 官方网站 og:image |
| 14 | La Trobe's Cottage | `14-la-trobe.jpg` | 394KB | 官方网站 og:image |
| 15 | Barwon Park Mansion | `15-barwon-park.jpg` | 392KB | 官方网站 og:image |
| 16 | Gulf Station | `16-gulf-station.jpg` | 307KB | nationaltrust.org.au og:image ✨新 |
| 17 | McCrae Homestead | `17-mccrae.jpg` | 242KB | 官方网站 og:image |
| 18 | Mooramong | `18-mooramong.jpg` | 206KB | nationaltrust.org.au og:image ✨新 |
| 19 | Barwon Grange | `19-barwon-grange.jpg` | 365KB | nationaltrust.org.au og:image ✨新 |
| 20 | The Heights | `20-the-heights.jpg` | 356KB | 官方网站 og:image |
| 21 | Portable Iron Houses | `21-portable-iron.jpg` | 346KB | 官方网站 og:image |
| 22 | Rupertswood Mansion | `22-rupertswood.jpg` | 261KB | 官方网站 og:image |
| 23 | Mont De Lancey Heritage Homestead | `23-mont-de-lancey.jpg` | 427KB | montdelancey.org.au og:image ✨新 |
| 24 | Government House Melbourne | `24-govt-house.jpg` | 40KB | 官方网站 og:image |
| 25 | Tasma Terrace | `25-tasma-terrace.jpg` | 448KB | 官方网站 og:image |
| 26 | Kyneton Museum | `26-kyneton.jpg` | 242KB | 官方网站 og:image |

## 变更历史 (2026-04-04)

### ✅ 完成的变更
1. **删除**: Eureka Centre Ballarat (❌ 不是历史建筑)
2. **重新编号**: 所有文件编号从 01-26 连续编号 (移除空隙)
3. **重新下载**: 6 个博物馆的更优质建筑图片
   - Swan Hill: 更新为建筑照片 (493KB)
   - Gulf Station: 更新为农场建筑 (307KB) ✨
   - Mooramong: 更新为住宅照片 (206KB) ✨
   - Barwon Grange: 更新为别墅照片 (365KB) ✨
   - Mont De Lancey: 更新为宅基地 (427KB) ✨
   - Beechworth: 新增法院建筑 (351KB) ✨

## 下载来源

- **National Trust**: nationaltrust.org.au (og:image 元标签)
- **Museums Victoria**: 官方馆藏网站
- **政府网站**: parks.vic.gov.au, governor.vic.gov.au
- **地方旅游**: explorebeechworth.com.au, montdelancey.org.au, sovereignhill.com.au
- **下载工具**: Python requests + BeautifulSoup

## HTML 配置

所有 26 个博物馆在 `index.html` 中配置了 `customImage` 字段：

```javascript
{
  name: "Museum Name",
  lat: xx.xxxx,
  lng: xxx.xxxx,
  link: "https://...",
  customImage: "images/XX-museum-name.jpg"
}
```

## 图片加载策略

`fetchPreviewImage()` 函数配置了以下特性：
- ✅ 8秒超时限制
- ✅ 本地文件优先（无API调用）
- ✅ AbortController 并发控制
- ✅ HTTP 状态检查
- ✅ 竞争条件防护

## 文件统计

| 指标 | 数值 |
|------|------|
| 博物馆总数 | 26 |
| 总文件大小 | 8MB (8288KB) |
| 平均类大小 | 318KB |
| 大小范围 | 40KB - 1334KB |
| 最大: | Sovereign Hill (1334KB) |
| 最小: | Govt House (40KB) |

## 使用说明

### 本地服务器运行
```bash
cd /Users/yangzhang/Downloads/VIC-museum
/usr/bin/python3 -m http.server 8001
```
访问: **http://localhost:8001/index.html**

### VS Code 预览
右键点击 `index.html` → **Open Preview**

### 特性
1. 所有图片存储在 `images/` 目录
2. 无需网络连接即可加载预览
3. 点击地图标记即时显示建筑照片
4. 响应式设计，自适应所有屏幕尺寸

---
*维多利亚州历史博物馆地图 - Victorian Heritage Museums Map*  
*最后更新: 2026-04-04*
