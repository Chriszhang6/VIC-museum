# Real-Time Language Switching Feature

## Overview
The Victoria Heritage Map now supports real-time language switching for popup cards. When a user has a museum card open, clicking the language toggle button (EN/中文) in the top-right corner immediately updates the card to display descriptions in the selected language.

## How It Works

### 1. Language State Management
- Global variable `currentLanguage` tracks the current language setting ('zh' for Chinese, 'en' for English)
- Defaults to Chinese ('zh') on page load
- Updated when user clicks EN or 中文 buttons

### 2. Popup Tracking
- Global variable `currentOpenMarker` tracks which museum marker's popup is currently open
- Set to `null` initially
- Updated when popup opens via `popupopen` event
- Cleared when popup closes via `popupclose` event

### 3. Language Switching Mechanism
When user clicks the language toggle button:
1. `currentLanguage` is updated to the new language
2. `refreshUI()` function is called
3. `refreshUI()` checks if `currentOpenMarker` exists (popup is open)
4. If yes: closes the popup, waits 50ms, then reopens it
5. When popup reopens, `getDescription()` is re-evaluated with the NEW language
6. Popup displays description in the selected language

### 4. Dynamic Description Function
```javascript
const getDescription = () => {
  if (typeof m.description === 'object') {
    return m.description[currentLanguage] || m.description.zh || m.description.en;
  }
  return m.description;
};
```

This function:
- Checks if description is an object with language keys
- Returns description for `currentLanguage`
- Falls back to Chinese if specified language unavailable
- Is called each time popup is rendered, ensuring latest language is used

### 5. Event Handlers
```javascript
// Track marker when popup opens
marker.on('popupopen', () => {
  currentOpenMarker = marker;
  // Also loads preview image...
});

// Clear tracking when popup closes
marker.on('popupclose', () => {
  if (currentOpenMarker === marker) {
    currentOpenMarker = null;
  }
});
```

## Data Structure

All 26 Victoria museums have bilingual descriptions:
```javascript
{
  name: "Museum Name",
  description: {
    zh: "中文描述...",
    en: "English description..."
  },
  // ... other fields
}
```

## User Experience

1. User navigates map and clicks on a museum marker
2. Popup card opens showing museum name, address, and description in current language
3. Preview image loads asynchronously
4. If user clicks language toggle button (EN or 中文):
   - Popup animates closed
   - Description updates to new language
   - Popup animates open with new description
   - All other card content (name, address, image, link) remains unchanged

## Technical Implementation Details

### Files Modified
- `index.html` - Main application file with all implementation

### Key Code Sections
- **Line 285-286**: Language state variables initialization
- **Lines 290-307**: Language button event listeners and refreshUI() function
- **Lines 316-321**: Popup close/reopen logic in refreshUI()
- **Lines 536-542**: getDescription() function definition
- **Lines 543-557**: Popup binding with dynamic content
- **Lines 558-565**: popupopen event handler with marker tracking
- **Lines 568-571**: popupclose event handler with cleanup

### Why 50ms Delay?
The `setTimeout(..., 50)` delay ensures:
1. Popup close animation completes
2. Leaflet DOM cleanup finishes
3. currentLanguage state is fully applied
4. Reopen triggers fresh popup content generation

## Testing the Feature

1. Open `index.html` in a web browser
2. The map loads showing all 26 Victorian heritage sites
3. Click any blue marker on the map
4. A popup card opens showing the museum information in Chinese
5. Click the "EN" button in top-right corner
6. The popup card immediately updates to show English description
7. Click "中文" button to switch back to Chinese
8. Repeat with different museums - feature works consistently

## Browser Compatibility

Requires:
- Modern browser with ES6 JavaScript support
- Leaflet.js 1.9.4+ (included via CDN)
- JavaScript enabled
- Works on desktop and mobile devices

## Future Enhancements

Possible improvements:
- Add more languages (Spanish, French, etc.)
- Persist language preference in localStorage
- Add language selector dropdown instead of just two buttons
- Implement lazy loading of descriptions to reduce initial file size
- Add animations to description text when it changes
