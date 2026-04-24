# Awesome MCPs [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> 精选优秀的 Model Context Protocol (MCP) 服务器与工具合集

[English](README.en.md) | 中文

[MCP](https://modelcontextprotocol.io) 是 Anthropic 推出的开放协议，已获 Google、Microsoft、AWS、Cloudflare 等主流厂商支持，目前已有 **10,000+** 生产级服务器、**97M+** 月下载量。

## 快速开始

```bash
git clone https://github.com/theneoai/awesome-mcps.git
cd awesome-mcps
bash install.sh
```

或直接复制 [`configs/`](configs/) 目录下的 JSON 片段到你的 `claude_desktop_config.json`。

---

## 目录

| 分类 | 说明 |
|------|------|
| [🔧 开发工具](#开发工具) | 代码托管、CI/CD、容器、浏览器自动化 |
| [📊 数据与数据库](#数据与数据库) | SQL、NoSQL、向量数据库、数据仓库 |
| [💬 通信与协作](#通信与协作) | 消息、邮件、会议、团队协作 |
| [✅ 效率与工作流](#效率与工作流) | 项目管理、日历、笔记、任务 |
| [☁️ 云服务与基础设施](#云服务与基础设施) | AWS、GCP、Azure、Cloudflare |
| [🤖 AI 与机器学习](#ai-与机器学习) | 模型推理、向量检索、Agent 框架 |
| [🏢 企业与商业](#企业与商业) | CRM、ERP、金融、支付 |
| [🔒 安全](#安全) | 密钥管理、代码扫描、漏洞检测 |
| [🛠️ 实用工具](#实用工具) | 搜索、爬虫、文件处理 |
| [🖥️ 客户端](#客户端) | 支持 MCP 的 AI 客户端与工具 |

---

## 开发工具

详见 [categories/development/](categories/development/README.md)

| 名称 | 作者/厂商 | 描述 | Stars |
|------|----------|------|-------|
| [GitHub MCP](https://github.com/github/github-mcp-server) | GitHub 官方 | 仓库、PR、Issue、Actions 完整操作，51 个工具 | ![](https://img.shields.io/github/stars/github/github-mcp-server?style=flat-square) |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | Microsoft 官方 | 跨浏览器自动化、截图、表单操作 | ![](https://img.shields.io/github/stars/microsoft/playwright-mcp?style=flat-square) |
| [Filesystem MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) | Anthropic 官方 | 本地文件读写、目录树、搜索 | — |
| [Git MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/git) | Anthropic 官方 | commit、diff、log、branch 操作 | — |
| [GitLab MCP](https://github.com/zereight/gitlab-mcp) | 社区 | GitLab MR、流水线、Wiki | ![](https://img.shields.io/github/stars/zereight/gitlab-mcp?style=flat-square) |
| [Kubernetes MCP](https://github.com/containers/kubernetes-mcp-server) | Red Hat | Pod、Deployment、Service 管理 | ![](https://img.shields.io/github/stars/containers/kubernetes-mcp-server?style=flat-square) |
| [Docker MCP](https://github.com/ckreiling/mcp-server-docker) | 社区 | 容器、镜像、网络、卷管理 | ![](https://img.shields.io/github/stars/ckreiling/mcp-server-docker?style=flat-square) |
| [Puppeteer MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/puppeteer) | Anthropic 官方 | Puppeteer 浏览器控制 | — |
| [Firebase MCP](https://github.com/gannonh/firebase-mcp) | 社区 | Firebase Auth、Firestore、Storage | ![](https://img.shields.io/github/stars/gannonh/firebase-mcp?style=flat-square) |
| [Nomad MCP](https://github.com/kocierik/mcp-nomad) | 社区 | HashiCorp Nomad 作业编排 | ![](https://img.shields.io/github/stars/kocierik/mcp-nomad?style=flat-square) |

---

## 数据与数据库

详见 [categories/data/](categories/data/README.md)

| 名称 | 作者/厂商 | 描述 | Stars |
|------|----------|------|-------|
| [PostgreSQL MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/postgres) | Anthropic 官方 | PostgreSQL 查询与结构分析 | — |
| [SQLite MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite) | Anthropic 官方 | SQLite 本地数据库操作 | — |
| [MCP Toolbox for Databases](https://github.com/googleapis/mcp-toolbox-for-databases) | Google 官方 | PostgreSQL、MySQL、AlloyDB、Spanner 多库支持 | ![](https://img.shields.io/github/stars/googleapis/mcp-toolbox-for-databases?style=flat-square) |
| [Redis MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/redis) | Anthropic 官方 | Redis 键值存储操作 | — |
| [MySQL MCP](https://github.com/benborla/mcp-server-mysql) | 社区 | MySQL 数据库连接与查询 | ![](https://img.shields.io/github/stars/benborla/mcp-server-mysql?style=flat-square) |
| [BigQuery MCP](https://github.com/LucasHild/mcp-server-bigquery) | 社区 | Google BigQuery 数据分析 | ![](https://img.shields.io/github/stars/LucasHild/mcp-server-bigquery?style=flat-square) |
| [Qdrant MCP](https://github.com/qdrant/mcp-server-qdrant) | Qdrant 官方 | 向量数据库搜索与嵌入管理 | ![](https://img.shields.io/github/stars/qdrant/mcp-server-qdrant?style=flat-square) |
| [MongoDB MCP](https://github.com/mongodb-labs/mongodb-mcp-server) | MongoDB 官方 | MongoDB 文档读写与聚合 | ![](https://img.shields.io/github/stars/mongodb-labs/mongodb-mcp-server?style=flat-square) |
| [Tableau MCP](https://github.com/tableau/tableau-mcp) | Tableau 官方 | 数据可视化与报表访问 | ![](https://img.shields.io/github/stars/tableau/tableau-mcp?style=flat-square) |

---

## 通信与协作

详见 [categories/communication/](categories/communication/README.md)

| 名称 | 作者/厂商 | 描述 | Stars |
|------|----------|------|-------|
| [Slack MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/slack) | Anthropic 官方 | Slack 消息收发、频道管理 | — |
| [Gmail MCP](https://github.com/GongRzhe/Gmail-MCP-Server) | 社区 | Gmail 邮件读写与管理 | ![](https://img.shields.io/github/stars/GongRzhe/Gmail-MCP-Server?style=flat-square) |
| [Discord MCP](https://github.com/SasePriv/mcp-discord) | 社区 | Discord 消息与频道操作 | ![](https://img.shields.io/github/stars/SasePriv/mcp-discord?style=flat-square) |
| [Twilio MCP](https://github.com/twilio-labs/mcp) | Twilio 官方 | 短信、语音通话、WhatsApp | ![](https://img.shields.io/github/stars/twilio-labs/mcp?style=flat-square) |
| [Microsoft Teams MCP](https://github.com/softeria-ss/ms-teams-mcp-server) | 社区 | Teams 消息与会议管理 | ![](https://img.shields.io/github/stars/softeria-ss/ms-teams-mcp-server?style=flat-square) |
| [Telegram MCP](https://github.com/chigwell/telegram-mcp) | 社区 | Telegram 消息收发 | ![](https://img.shields.io/github/stars/chigwell/telegram-mcp?style=flat-square) |

---

## 效率与工作流

详见 [categories/productivity/](categories/productivity/README.md)

| 名称 | 作者/厂商 | 描述 | Stars |
|------|----------|------|-------|
| [Notion MCP](https://github.com/makenotion/notion-mcp-server) | Notion 官方 | 读写页面与数据库，22 个工具 | ![](https://img.shields.io/github/stars/makenotion/notion-mcp-server?style=flat-square) |
| [Linear MCP](https://github.com/jerhadf/linear-mcp-server) | 社区 | Linear Issue 与项目管理 | ![](https://img.shields.io/github/stars/jerhadf/linear-mcp-server?style=flat-square) |
| [Asana MCP](https://github.com/Asana/asana-mcp-server) | Asana 官方 | 任务、项目、工作区管理 | ![](https://img.shields.io/github/stars/Asana/asana-mcp-server?style=flat-square) |
| [Jira MCP](https://github.com/sooperset/mcp-atlassian) | 社区 | Jira/Confluence 完整操作 | ![](https://img.shields.io/github/stars/sooperset/mcp-atlassian?style=flat-square) |
| [Google Calendar MCP](https://github.com/nspady/google-calendar-mcp) | 社区 | 日历事件创建与管理 | ![](https://img.shields.io/github/stars/nspady/google-calendar-mcp?style=flat-square) |
| [Todoist MCP](https://github.com/abhiz123/todoist-mcp-server) | 社区 | 任务管理与提醒 | ![](https://img.shields.io/github/stars/abhiz123/todoist-mcp-server?style=flat-square) |
| [Google Drive MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive) | Anthropic 官方 | 文档搜索、读取与管理 | — |
| [Memory MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/memory) | Anthropic 官方 | 跨会话持久化知识图谱 | — |

---

## 云服务与基础设施

详见 [categories/cloud/](categories/cloud/README.md)

| 名称 | 作者/厂商 | 描述 | Stars |
|------|----------|------|-------|
| [AWS MCP Servers](https://github.com/awslabs/mcp) | AWS 官方 | 60+ AWS 服务，含 EC2、S3、Lambda、Bedrock | ![](https://img.shields.io/github/stars/awslabs/mcp?style=flat-square) |
| [Azure MCP](https://github.com/Azure/azure-mcp) | Microsoft 官方 | Azure 资源管理与服务集成 | ![](https://img.shields.io/github/stars/Azure/azure-mcp?style=flat-square) |
| [Google Cloud MCP](https://github.com/GoogleCloudPlatform/mcp-toolbox-for-databases) | Google 官方 | GCP 数据库、BigQuery、GKE 集成 | — |
| [Cloudflare MCP](https://github.com/cloudflare/mcp-server-cloudflare) | Cloudflare 官方 | DNS、Workers、R2、Zero Trust，2500+ 接口 | ![](https://img.shields.io/github/stars/cloudflare/mcp-server-cloudflare?style=flat-square) |
| [AWS KB Retrieval](https://github.com/modelcontextprotocol/servers/tree/main/src/aws-kb-retrieval-server) | Anthropic 官方 | AWS Bedrock 知识库检索 | — |
| [IBM MCP](https://github.com/IBM/mcp) | IBM 官方 | IBM Cloud 服务集成 | ![](https://img.shields.io/github/stars/IBM/mcp?style=flat-square) |

---

## AI 与机器学习

详见 [categories/ai/](categories/ai/README.md)

| 名称 | 作者/厂商 | 描述 | Stars |
|------|----------|------|-------|
| [LangChain MCP Adapters](https://github.com/langchain-ai/langchain-mcp-adapters) | LangChain 官方 | 将 MCP 工具接入 LangChain Agent | ![](https://img.shields.io/github/stars/langchain-ai/langchain-mcp-adapters?style=flat-square) |
| [OpenAI Agents MCP](https://github.com/openai/openai-agents-python) | OpenAI 官方 | OpenAI Agents SDK 原生 MCP 支持 | ![](https://img.shields.io/github/stars/openai/openai-agents-python?style=flat-square) |
| [Hugging Face MCP](https://github.com/evalstate/mcp-hfspace) | 社区 | Hugging Face Spaces 模型推理 | ![](https://img.shields.io/github/stars/evalstate/mcp-hfspace?style=flat-square) |
| [Perplexity MCP](https://github.com/perplexityai/modelcontextprotocol) | Perplexity 官方 | 实时 AI 搜索与问答 | ![](https://img.shields.io/github/stars/perplexityai/modelcontextprotocol?style=flat-square) |
| [Sequential Thinking MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking) | Anthropic 官方 | 结构化推理与思维链工具 | — |
| [Qdrant MCP](https://github.com/qdrant/mcp-server-qdrant) | Qdrant 官方 | 向量语义搜索 | ![](https://img.shields.io/github/stars/qdrant/mcp-server-qdrant?style=flat-square) |

---

## 企业与商业

详见 [categories/enterprise/](categories/enterprise/README.md)

| 名称 | 作者/厂商 | 描述 | Stars |
|------|----------|------|-------|
| [Stripe MCP](https://github.com/stripe/agent-toolkit) | Stripe 官方 | 支付、订阅、账单操作 | ![](https://img.shields.io/github/stars/stripe/agent-toolkit?style=flat-square) |
| [Salesforce MCP](https://github.com/tsmztech/mcp-server-salesforce) | 社区 | Salesforce CRM 数据访问 | ![](https://img.shields.io/github/stars/tsmztech/mcp-server-salesforce?style=flat-square) |
| [Xero MCP](https://github.com/XeroAPI/xero-mcp-server) | Xero 官方 | 会计、发票、财务报表 | ![](https://img.shields.io/github/stars/XeroAPI/xero-mcp-server?style=flat-square) |
| [HubSpot MCP](https://github.com/HubSpot/mcp-server) | HubSpot 官方 | CRM 联系人、交易、营销 | ![](https://img.shields.io/github/stars/HubSpot/mcp-server?style=flat-square) |
| [DataForSEO MCP](https://github.com/dataforseo/mcp-server-typescript) | DataForSEO 官方 | SEO 数据与搜索分析 | ![](https://img.shields.io/github/stars/dataforseo/mcp-server-typescript?style=flat-square) |

---

## 安全

详见 [categories/security/](categories/security/README.md)

| 名称 | 作者/厂商 | 描述 | Stars |
|------|----------|------|-------|
| [1Password MCP](https://github.com/1Password/mcp-server) | 1Password 官方 | 密钥与凭证安全访问 | ![](https://img.shields.io/github/stars/1Password/mcp-server?style=flat-square) |
| [Semgrep MCP](https://github.com/semgrep/mcp) | Semgrep 官方 | 代码静态安全扫描 | ![](https://img.shields.io/github/stars/semgrep/mcp?style=flat-square) |
| [Snyk MCP](https://github.com/snyk/snyk-mcp) | Snyk 官方 | 依赖漏洞检测与修复 | ![](https://img.shields.io/github/stars/snyk/snyk-mcp?style=flat-square) |
| [Infisical MCP](https://github.com/Infisical/mcp) | Infisical 官方 | 开源密钥管理与注入 | ![](https://img.shields.io/github/stars/Infisical/mcp?style=flat-square) |

---

## 实用工具

详见 [categories/utilities/](categories/utilities/README.md)

| 名称 | 作者/厂商 | 描述 | Stars |
|------|----------|------|-------|
| [Brave Search MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search) | Anthropic 官方 | Brave 隐私搜索引擎 | — |
| [Fetch MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) | Anthropic 官方 | 网页内容抓取与转换 | — |
| [Exa Search MCP](https://github.com/exa-labs/exa-mcp-server) | Exa 官方 | 神经语义搜索 | ![](https://img.shields.io/github/stars/exa-labs/exa-mcp-server?style=flat-square) |
| [Excel MCP](https://github.com/haris-musa/excel-mcp-server) | 社区 | Excel/CSV 文件读写处理 | ![](https://img.shields.io/github/stars/haris-musa/excel-mcp-server?style=flat-square) |
| [Time MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/time) | Anthropic 官方 | 时区与时间转换工具 | — |
| [MCP Proxy](https://github.com/tbxark/mcp-proxy) | 社区 | 聚合多个 MCP 为单一 HTTP 端点 | ![](https://img.shields.io/github/stars/tbxark/mcp-proxy?style=flat-square) |

---

## 客户端

| 名称 | 类型 | 描述 |
|------|------|------|
| [Claude Desktop](https://claude.ai/download) | 桌面 | Anthropic 官方桌面客户端 |
| [Claude Code](https://claude.ai/code) | CLI | Anthropic 官方命令行工具 |
| [Continue](https://github.com/continuedev/continue) | IDE 插件 | VS Code / JetBrains AI 编程助手 |
| [Cursor](https://cursor.com) | 编辑器 | AI 优先代码编辑器 |
| [Zed](https://zed.dev) | 编辑器 | 高性能编辑器，内置 MCP 支持 |
| [LibreChat](https://github.com/danny-avila/LibreChat) | Web | 开源多模型聊天界面 |
| [Cline](https://github.com/cline/cline) | IDE 插件 | VS Code 自主编码 Agent |
| [Jan](https://github.com/janhq/jan) | 桌面 | 开源本地 AI 桌面客户端 |

---

## 资源

- [MCP 官方文档](https://modelcontextprotocol.io/docs) — 协议规范与开发指南
- [官方参考实现](https://github.com/modelcontextprotocol/servers) — Anthropic 维护
- [MCP 注册表](https://registry.modelcontextprotocol.io/) — 官方服务器目录
- [Smithery](https://smithery.ai) — GUI 安装平台
- [Glama](https://glama.ai/mcp/servers) — 21,000+ 开源 MCP 目录
- [PulseMCP](https://pulsemcp.com/servers) — 每日更新，12,000+ 服务器
- [mcp.so](https://mcp.so) — 社区驱动目录
- [MCP SDK TypeScript](https://github.com/modelcontextprotocol/typescript-sdk)
- [MCP SDK Python](https://github.com/modelcontextprotocol/python-sdk)
- [MCP SDK Kotlin](https://github.com/modelcontextprotocol/kotlin-sdk)
- [MCP SDK C#](https://github.com/modelcontextprotocol/csharp-sdk) — Microsoft 协作开发

---

## 贡献指南

欢迎 PR！请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。入选标准：有清晰文档、开源许可明确、近 6 个月活跃维护。

---

<p align="center">
  <sub>Maintained with ❤️ by <a href="https://github.com/theneoai">theneoai</a> | <a href="README.en.md">English</a> | <a href="CONTRIBUTING.md">Contributing</a> | <a href="LICENSE">MIT</a></sub>
</p>
