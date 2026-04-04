# Victoria Heritage Map

An interactive web map showcasing museums and historic buildings across Victoria, Australia, with bilingual (English/Chinese) support and real-time language switching.

## Features

- 🗺️ **Interactive Map**: Browse 26 heritage sites across Victoria
- 🌐 **Bilingual Support**: Full English and Chinese descriptions
- ⚡ **Real-Time Language Switching**: Instantly change language while viewing site details
- 🖼️ **Preview Images**: Automatic website preview for each heritage site
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎨 **Beautiful UI**: Modern interface with smooth animations

## Quick Start

1. Open `index.html` in your web browser
2. The map displays all 26 Victorian heritage sites as blue markers
3. Click any marker to view detailed information
4. Use the EN/中文 buttons (top-right) to switch languages
5. Browse the sidebar for a complete list of all heritage sites

## File Structure

```
VIC-museum/
├── index.html                    # Main application file
├── FEATURE_DOCUMENTATION.md      # Technical documentation of language switching feature
└── README.md                     # This file
```

## Map Controls

- **Zoom In/Out**: Use mouse scroll wheel or zoom buttons (bottom-right)
- **Pan**: Click and drag the map
- **Toggle Sidebar**: Click the hamburger menu (top-left)
- **Search**: Search for museums in the sidebar
- **Language Toggle**: Click EN or 中文 (top-right)

## Heritage Sites Included

The map includes 26 major heritage sites from across Victoria:

### Melbourne & Surrounds
- Old Treasury Building
- Captain Cook's Cottage
- La Trobe's Cottage
- Como House & Garden
- Government House Melbourne
- Tasma Terrace (National Trust HQ)

### Regional Victoria
- Sovereign Hill (Ballarat)
- Eureka Centre (Ballarat)
- Golden Dragon Museum (Bendigo)
- Bendigo Tramways
- National Wool Museum (Geelong)
- Flagstaff Hill Maritime Village (Warrnambool)
- Beechworth Historic Precinct
- Swan Hill Pioneer Settlement

### Historic Mansions
- Rippon Lea Estate
- Labassa
- Werribee Mansion
- Barwon Park Mansion
- Gulf Station
- McCrae Homestead
- Mooramong
- Barwon Grange
- The Heights
- Portable Iron Houses
- Rupertswood Mansion
- Mont De Lancey Heritage Homestead
- Kyneton Museum

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Mapping**: Leaflet.js 1.9.4
- **Styling**: Custom CSS with responsive design
- **Preview API**: Microlink API for website previews
- **Tile Layer**: CartoDB Voyager tiles

## Language Support

### Current Languages
- **Chinese (中文)**: Simplified Chinese descriptions
- **English (EN)**: Full English translations

### All Museum Descriptions
Every heritage site includes:
- Museum/site name
- Complete address
- Historical description in both languages
- External website link
- Preview image from the website

## How Language Switching Works

The application implements a sophisticated language switching system:

1. **State Management**: Global `currentLanguage` variable tracks selected language
2. **Popup Tracking**: `currentOpenMarker` remembers which popup is currently open
3. **Real-Time Update**: When language is changed:
   - Open popups close briefly
   - Language state updates
   - Popups reopen with new language descriptions
4. **Dynamic Rendering**: Descriptions are generated on-the-fly using `getDescription()` function

For technical details, see [FEATURE_DOCUMENTATION.md](FEATURE_DOCUMENTATION.md)

## Browser Requirements

- Modern browsers (Chrome, Firefox, Safari, Edge)
- JavaScript ES6+ support
- Internet connection (for map tiles and preview images)
- Cookies enabled for optimal experience

## Responsive Design

The application adapts to different screen sizes:

- **Desktop**: Full sidebar, detailed descriptions
- **Tablet**: Optimized sidebar and map layout
- **Mobile**: Collapsible sidebar, touch-friendly controls

## Performance

- **Map**: Optimized tile loading for smooth performance
- **Images**: Lazy-loaded preview images
- **Data**: All 26 museum entries load quickly
- **Language Switching**: Instant updates with smooth animations

## Data Storage

This is a client-side application. No data is transmitted to external servers except:
- Map tiles from CartoDB
- Preview images from website preview API
- External links to heritage site websites

## Customization

To add more heritage sites or change descriptions:

1. Open `index.html` in a text editor
2. Find the `museums` array (around line 330)
3. Add new museum entries with format:
```javascript
{
  name: "Site Name",
  lat: -37.8129,
  lng: 144.9722,
  address: "Full Address",
  description: {
    zh: "中文描述",
    en: "English description"
  },
  link: "https://website.url",
  region: "VIC"
}
```

## License

This project showcases Victoria's rich heritage. Images and descriptions are sourced from respective heritage organizations and museums.

## Support

For issues or suggestions:
1. Check that JavaScript is enabled
2. Ensure you're using a modern browser
3. Clear browser cache if experiencing display issues
4. Test on a different device if problems persist

## About

This interactive map celebrates Victoria's architectural and cultural heritage, making it accessible to visitors and locals in multiple languages.

---

**Last Updated**: 2024  
**Version**: 1.0  
**Museums**: 26 Victoria Heritage Sites
