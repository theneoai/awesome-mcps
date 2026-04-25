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
| [jetbrains.json](jetbrains.json) | JetBrains | 开发工具 | 否 |
| [azure-devops.json](azure-devops.json) | Azure DevOps | 开发工具 | 是 |
| [circleci.json](circleci.json) | CircleCI | 开发工具 | 是 |
| [datadog.json](datadog.json) | Datadog | 开发工具 | 是 |
| [fetch.json](fetch.json) | 网页抓取 | 实用工具 | 否 |
| [brave-search.json](brave-search.json) | Brave 搜索 | 实用工具 | 是 |
| [exa.json](exa.json) | Exa 语义搜索 | 实用工具 | 是 |
| [tavily.json](tavily.json) | Tavily AI 搜索 | 实用工具 | 是 |
| [firecrawl.json](firecrawl.json) | Firecrawl 网页爬取 | 实用工具 | 是 |
| [notion.json](notion.json) | Notion | 效率工具 | 是 |
| [linear.json](linear.json) | Linear | 效率工具 | 是 |
| [monday.json](monday.json) | Monday.com | 效率工具 | 是 |
| [plane.json](plane.json) | Plane | 效率工具 | 是 |
| [memory.json](memory.json) | 持久化记忆 | AI 工具 | 否 |
| [groq.json](groq.json) | Groq LLM 推理 | AI 工具 | 是 |
| [sqlite.json](sqlite.json) | SQLite | 数据库 | 否 |
| [postgres.json](postgres.json) | PostgreSQL | 数据库 | 是 |
| [supabase.json](supabase.json) | Supabase | 数据库 | 是 |
| [elasticsearch.json](elasticsearch.json) | Elasticsearch | 数据库 | 是 |
| [neo4j.json](neo4j.json) | Neo4j | 数据库 | 是 |
| [clickhouse.json](clickhouse.json) | ClickHouse | 数据库 | 是 |
| [databricks.json](databricks.json) | Databricks | 数据库 | 是 |
| [influxdb.json](influxdb.json) | InfluxDB | 数据库 | 是 |
| [qdrant.json](qdrant.json) | Qdrant 向量库 | 数据库 | 可选 |
| [slack.json](slack.json) | Slack | 通信 | 是 |
| [gmail.json](gmail.json) | Gmail | 通信 | 是 |
| [zoom.json](zoom.json) | Zoom | 通信 | 是 |
| [intercom.json](intercom.json) | Intercom | 通信 | 是 |
| [sendgrid.json](sendgrid.json) | SendGrid | 通信 | 是 |
| [mailgun.json](mailgun.json) | Mailgun | 通信 | 是 |
| [aws.json](aws.json) | AWS Bedrock KB | 云服务 | 是 |
| [cloudflare.json](cloudflare.json) | Cloudflare | 云服务 | 是 |
| [alibabacloud.json](alibabacloud.json) | AlibabaCloud | 云服务 | 是 |
| [digitalocean.json](digitalocean.json) | DigitalOcean | 云服务 | 是 |
| [netlify.json](netlify.json) | Netlify | 云服务 | 是 |
| [stripe.json](stripe.json) | Stripe 支付 | 企业 | 是 |
| [servicenow.json](servicenow.json) | ServiceNow | 企业 | 是 |
| [erpnext.json](erpnext.json) | ERPNext | 企业 | 是 |
| [odoo.json](odoo.json) | Odoo | 企业 | 是 |
| [dynamics365.json](dynamics365.json) | Dynamics 365 | 企业 | 是 |
| [sap-abap.json](sap-abap.json) | SAP ABAP ADT | 企业 | 是 |
| [paddle.json](paddle.json) | Paddle | 企业 | 是 |
| [freshbooks.json](freshbooks.json) | FreshBooks | 企业 | 是 |
| [rippling.json](rippling.json) | Rippling | 企业 | 是 |
| [anaplan.json](anaplan.json) | Anaplan | 企业 | 是 |
| [custify.json](custify.json) | Custify | 企业 | 是 |
| [chartmogul.json](chartmogul.json) | ChartMogul | 企业 | 是 |
| [servicetitan.json](servicetitan.json) | ServiceTitan | 企业 | 是 |
| [1password.json](1password.json) | 1Password | 安全 | 是 |
| [snyk.json](snyk.json) | Snyk | 安全 | 是 |

> 完整配置说明见 [../docs/deployment.md](../docs/deployment.md)
