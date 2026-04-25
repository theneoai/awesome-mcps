# MCP 配置片段

每个文件是一个独立 MCP 的配置块，可直接复制粘贴到 Claude Desktop 的 `claude_desktop_config.json` 中。

## 使用方法

1. 找到你想要的 MCP 对应的 `.json` 文件
2. 复制其内容，粘贴到你的配置文件的 `"mcpServers": { ... }` 内
3. 替换 `YOUR_XXX_HERE` 为实际的密钥
4. 完全重启 Claude Desktop

## 配置文件位置

| 系统 | 路径 |
|------|------|
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |
| Linux | `~/.config/Claude/claude_desktop_config.json` |

## 目录 | Index

| 文件 | MCP | 分类 | 需要密钥 |
|------|-----|------|---------|
| [filesystem.json](filesystem.json) | 本地文件系统 | 开发工具 | 否 |
| [github.json](github.json) | GitHub | 开发工具 | 是 |
| [git.json](git.json) | Git | 开发工具 | 否 |
| [playwright.json](playwright.json) | 浏览器自动化 | 开发工具 | 否 |
| [fetch.json](fetch.json) | 网页抓取 | 实用工具 | 否 |
| [brave-search.json](brave-search.json) | Brave 搜索 | 实用工具 | 是 |
| [exa.json](exa.json) | Exa 语义搜索 | 实用工具 | 是 |
| [tavily.json](tavily.json) | Tavily AI 搜索 | 实用工具 | 是 |
| [firecrawl.json](firecrawl.json) | Firecrawl 网页爬取 | 实用工具 | 是 |
| [notion.json](notion.json) | Notion | 效率工具 | 是 |
| [linear.json](linear.json) | Linear | 效率工具 | 是 |
| [memory.json](memory.json) | 持久化记忆 | AI 工具 | 否 |
| [groq.json](groq.json) | Groq LLM 推理 | AI 工具 | 是 |
| [sqlite.json](sqlite.json) | SQLite | 数据库 | 否 |
| [postgres.json](postgres.json) | PostgreSQL | 数据库 | 是 |
| [qdrant.json](qdrant.json) | Qdrant 向量库 | 数据库 | 可选 |
| [slack.json](slack.json) | Slack | 通信 | 是 |
| [gmail.json](gmail.json) | Gmail | 通信 | 是 |
| [aws.json](aws.json) | AWS Bedrock KB | 云服务 | 是 |
| [cloudflare.json](cloudflare.json) | Cloudflare | 云服务 | 是 |
| [stripe.json](stripe.json) | Stripe 支付 | 企业 | 是 |

> 完整配置说明见 [../docs/deployment.md](../docs/deployment.md)
