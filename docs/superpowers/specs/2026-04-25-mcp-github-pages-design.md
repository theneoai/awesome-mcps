# Awesome MCPs GitHub Pages Design

## Context

The current awesome-mcps uses Jekyll with Markdown files. The user wants a modern GitHub Pages site similar to https://theneoai.github.io/awesome-skills with:
- Search functionality
- Category filtering
- Download/install for MCP configs
- Bilingual support (Chinese/English)

## Design Reference

**Reference site:** https://theneoai.github.io/awesome-skills

**Key features from reference:**
- Dark theme with gradient accents
- Hero section with stats
- Quick install code block
- Search input with animated border
- Category dropdown filter
- Card grid with hover tooltips
- Batch selection with generate command
- Language switcher (zh/en)
- Modal for commands
- Toast notifications
- Responsive design

## Architecture

### Pages Structure
```
/
├── index.html          # Main search page
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── main.js
│   │   └── mcp-data.js  # Generated MCP data
│   └── wechat_qr.png
│   └── alipay_qr.png
├── _layouts/
│   └── default.html
├── _includes/
│   ├── header.html
│   ├── footer.html
│   └── ...
├── _config.yml
└── _data/
    └── mcp-data.yml  # Source of truth for MCPs
```

### Data Structure (mcp-data.yml)
```yaml
- name: GitHub MCP
  name_zh: GitHub MCP
  category: development
  subcategory: version-control
  vendor: official  # official | community
  language: Go
  description: Repository, PR, Issue, Actions operations
  description_zh: 仓库、PR、Issue、Actions 完整操作
  github_url: https://github.com/github/github-mcp-server
  stars: 12000
  config_required: true
  config_file: github.json
  api_key: YOUR_GITHUB_TOKEN
  tags: [github, git, ci-cd]
```

### Features

#### 1. Hero Section
- Title: "Awesome MCPs"
- Subtitle: Bilingual tagline
- Stats: MCP count, categories count, downloads
- Quick install code block
- CTA buttons

#### 2. Search & Filter Toolbar
- Search input with animated gradient border
- Category dropdown (10 categories)
- Vendor filter (Official / Community / All)
- Language filter (Go / Python / TypeScript / Rust / All)
- Results count display

#### 3. MCP Grid
- Card-based layout
- Each card shows:
  - Icon/emoji
  - Name (bilingual)
  - Vendor badge
  - Language badge
  - Stars count
  - Quick description
- Hover tooltip with full details
- Click to expand config

#### 4. Card Actions
- Select for batch download
- Quick copy config
- View details modal
- Link to GitHub

#### 5. Batch Operations
- Select multiple MCPs
- Generate combined install script
- Download selected configs as ZIP
- Copy all configs at once

#### 6. Language Switching
- Toggle between zh/en
- Persisted in localStorage
- All content switches

#### 7. Config Modal
- Shows full JSON config
- Copy button
- Download button
- API key instructions

## Implementation Plan

### Phase 1: Core Pages
1. Create Jekyll layout structure
2. Implement hero section
3. Add search/filter functionality
4. Create MCP data generation script
5. Build card grid component

### Phase 2: Interactive Features
1. Batch selection
2. Config modal
3. Copy to clipboard
4. Language switching

### Phase 3: Polish
1. Animations and transitions
2. Responsive design
3. Empty states
4. Loading states

## Technical Notes

- Use Jekyll's data files (`_data/`) for MCP source
- Generate `assets/js/mcp-data.js` from data for easy loading
- Use CSS custom properties for theming
- Vanilla JS for interactivity (no framework needed)
- Service worker for offline capability (optional)
