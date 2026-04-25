# MCP Research and Documentation Update Plan

## Context

Awesome-mcps is a curated collection of Model Context Protocol (MCP) servers and tools. The project needs comprehensive updates to:
- Research and collect more MCPs across all 10 categories
- Update project documentation
- Enhance GitHub Actions deployment

## Scope

### Categories to Update
1. Development（开发工具）
2. Data（数据/数据库）
3. Communication（通信协作）
4. Productivity（生产力）
5. Cloud（云服务）
6. AI（AI/机器学习）
7. Enterprise（企业服务）
8. Security（安全）
9. Utilities（工具）
10. Frameworks（框架/SDK）

### Deliverables
- Updated MCP listings for all 10 categories
- New Claude Desktop config files where applicable
- Updated README.md (Chinese)
- Updated README.en.md (English)
- Updated CONTRIBUTING.md
- GitHub Actions pages.yml review/updates

## Research Approach

### Sources
1. Official MCP GitHub: github.com/modelcontextprotocol
2. MCP Registry: mcpservers.org
3. GitHub Trending (MCP-related repos)
4. HackerNews/MDEV discussions
5. Vendor official documentation

### MCP Data Points
- Name
- Vendor (Official/Community)
- Language (Go/Python/TypeScript/Rust/etc)
- API Key Required (Yes/No/Optional)
- GitHub URL
- Category

## File Structure Updates

### Category README.md
Each category will have structured MCP listings with:
- MCP name (linked to GitHub/docs)
- Vendor badge (Official/Community)
- Language badge
- API requirements
- Brief description

### Configs Directory
Add new JSON configs for newly added MCPs that require API keys.

### Main Documentation
- README.md: Update statistics, add new MCPs to appropriate sections
- README.en.md: Same updates in English
- CONTRIBUTING.md: Ensure contribution guidelines are current

## GitHub Actions
Review `.github/workflows/pages.yml` for any needed updates to deployment process.

## Verification
- All links verified working
- Jekyll build passes
- GitHub Pages deploys successfully
