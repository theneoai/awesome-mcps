# Awesome MCPs [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> 精选优秀的 Model Context Protocol (MCP) 服务器与工具合集

[Model Context Protocol (MCP)](https://modelcontextprotocol.io) 是 Anthropic 推出的开放协议，让 AI 模型能够安全、标准化地连接各类外部工具和数据源。本项目收录质量优秀、维护活跃的 MCP 实现。

## 目录

- [开发工具](#开发工具)
- [效率与工作流](#效率与工作流)
- [数据与数据库](#数据与数据库)
- [通信与协作](#通信与协作)
- [AI 与机器学习](#ai-与机器学习)
- [安全](#安全)
- [实用工具](#实用工具)
- [客户端](#客户端)
- [资源](#资源)
- [贡献指南](#贡献指南)

---

## 开发工具

> 面向软件开发的 MCP 服务器

详见 [categories/development/](categories/development/README.md)

| 名称 | 描述 | 语言 | Stars |
|------|------|------|-------|
| [GitHub MCP](https://github.com/github/github-mcp-server) | GitHub 官方 MCP，支持仓库、PR、Issue 操作 | Go | ![](https://img.shields.io/github/stars/github/github-mcp-server?style=flat-square) |
| [GitLab MCP](https://github.com/zereight/gitlab-mcp) | GitLab 平台集成 | TypeScript | ![](https://img.shields.io/github/stars/zereight/gitlab-mcp?style=flat-square) |
| [Docker MCP](https://github.com/ckreiling/mcp-server-docker) | 管理 Docker 容器与镜像 | Python | ![](https://img.shields.io/github/stars/ckreiling/mcp-server-docker?style=flat-square) |
| [Kubernetes MCP](https://github.com/Flux159/mcp-server-kubernetes) | Kubernetes 集群管理 | TypeScript | ![](https://img.shields.io/github/stars/Flux159/mcp-server-kubernetes?style=flat-square) |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | 微软官方浏览器自动化 MCP | TypeScript | ![](https://img.shields.io/github/stars/microsoft/playwright-mcp?style=flat-square) |
| [Filesystem MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) | 本地文件系统读写操作（官方） | TypeScript | — |

---

## 效率与工作流

> 提升个人与团队效率的 MCP 服务器

详见 [categories/productivity/](categories/productivity/README.md)

| 名称 | 描述 | 语言 | Stars |
|------|------|------|-------|
| [Notion MCP](https://github.com/makenotion/notion-mcp-server) | Notion 官方 MCP，读写页面与数据库 | TypeScript | ![](https://img.shields.io/github/stars/makenotion/notion-mcp-server?style=flat-square) |
| [Linear MCP](https://github.com/jerhadf/linear-mcp-server) | Linear 项目管理与 Issue 跟踪 | TypeScript | ![](https://img.shields.io/github/stars/jerhadf/linear-mcp-server?style=flat-square) |
| [Google Calendar MCP](https://github.com/nspady/google-calendar-mcp) | Google 日历事件管理 | TypeScript | ![](https://img.shields.io/github/stars/nspady/google-calendar-mcp?style=flat-square) |
| [Todoist MCP](https://github.com/abhiz123/todoist-mcp-server) | Todoist 任务管理 | Python | ![](https://img.shields.io/github/stars/abhiz123/todoist-mcp-server?style=flat-square) |

---

## 数据与数据库

> 数据库连接、查询与数据处理 MCP 服务器

详见 [categories/data/](categories/data/README.md)

| 名称 | 描述 | 语言 | Stars |
|------|------|------|-------|
| [PostgreSQL MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/postgres) | PostgreSQL 数据库查询（官方） | TypeScript | — |
| [SQLite MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite) | SQLite 本地数据库操作（官方） | Python | — |
| [MySQL MCP](https://github.com/benborla/mcp-server-mysql) | MySQL 数据库连接与查询 | TypeScript | ![](https://img.shields.io/github/stars/benborla/mcp-server-mysql?style=flat-square) |
| [Redis MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/redis) | Redis 键值存储操作（官方） | TypeScript | — |
| [BigQuery MCP](https://github.com/LucasHild/mcp-server-bigquery) | Google BigQuery 数据分析 | Python | ![](https://img.shields.io/github/stars/LucasHild/mcp-server-bigquery?style=flat-square) |
| [Qdrant MCP](https://github.com/qdrant/mcp-server-qdrant) | Qdrant 向量数据库官方 MCP | Python | ![](https://img.shields.io/github/stars/qdrant/mcp-server-qdrant?style=flat-square) |

---

## 通信与协作

> 消息、邮件、会议等通信平台 MCP 服务器

详见 [categories/communication/](categories/communication/README.md)

| 名称 | 描述 | 语言 | Stars |
|------|------|------|-------|
| [Slack MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/slack) | Slack 消息收发（官方） | TypeScript | — |
| [Gmail MCP](https://github.com/GongRzhe/Gmail-MCP-Server) | Gmail 邮件读写与管理 | Python | ![](https://img.shields.io/github/stars/GongRzhe/Gmail-MCP-Server?style=flat-square) |
| [Discord MCP](https://github.com/SasePriv/mcp-discord) | Discord 消息与频道管理 | Python | ![](https://img.shields.io/github/stars/SasePriv/mcp-discord?style=flat-square) |
| [Twilio MCP](https://github.com/twilio-labs/mcp) | Twilio 官方短信与通话 MCP | TypeScript | ![](https://img.shields.io/github/stars/twilio-labs/mcp?style=flat-square) |

---

## AI 与机器学习

> 连接 AI 模型、向量搜索与机器学习平台的 MCP 服务器

详见 [categories/ai/](categories/ai/README.md)

| 名称 | 描述 | 语言 | Stars |
|------|------|------|-------|
| [Hugging Face MCP](https://github.com/evalstate/mcp-hfspace) | Hugging Face Spaces 模型推理 | TypeScript | ![](https://img.shields.io/github/stars/evalstate/mcp-hfspace?style=flat-square) |
| [LangChain MCP](https://github.com/langchain-ai/langchain-mcp-adapters) | LangChain 工具适配器 | Python | ![](https://img.shields.io/github/stars/langchain-ai/langchain-mcp-adapters?style=flat-square) |
| [OpenAI MCP](https://github.com/openai/openai-agents-python) | OpenAI Agents SDK MCP 支持 | Python | ![](https://img.shields.io/github/stars/openai/openai-agents-python?style=flat-square) |

---

## 安全

> 安全审计、漏洞扫描与凭证管理 MCP 服务器

详见 [categories/security/](categories/security/README.md)

| 名称 | 描述 | 语言 | Stars |
|------|------|------|-------|
| [1Password MCP](https://github.com/1Password/mcp-server) | 1Password 密钥与凭证安全访问 | Go | ![](https://img.shields.io/github/stars/1Password/mcp-server?style=flat-square) |
| [Semgrep MCP](https://github.com/semgrep/mcp) | Semgrep 代码安全扫描官方 MCP | Python | ![](https://img.shields.io/github/stars/semgrep/mcp?style=flat-square) |
| [Snyk MCP](https://github.com/snyk/snyk-mcp) | Snyk 依赖漏洞检测 | TypeScript | ![](https://img.shields.io/github/stars/snyk/snyk-mcp?style=flat-square) |

---

## 实用工具

> 搜索、爬虫、文件转换等通用工具 MCP 服务器

详见 [categories/utilities/](categories/utilities/README.md)

| 名称 | 描述 | 语言 | Stars |
|------|------|------|-------|
| [Brave Search MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search) | Brave 搜索引擎（官方） | TypeScript | — |
| [Fetch MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) | 网页内容抓取（官方） | Python | — |
| [Puppeteer MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/puppeteer) | Puppeteer 浏览器控制（官方） | TypeScript | — |
| [AWS KB Retrieval](https://github.com/modelcontextprotocol/servers/tree/main/src/aws-kb-retrieval-server) | AWS Bedrock 知识库检索（官方） | TypeScript | — |
| [Excel MCP](https://github.com/haris-musa/excel-mcp-server) | Excel/CSV 文件读写处理 | Python | ![](https://img.shields.io/github/stars/haris-musa/excel-mcp-server?style=flat-square) |

---

## 客户端

> 支持 MCP 协议的 AI 客户端与集成工具

| 名称 | 描述 | 类型 |
|------|------|------|
| [Claude Desktop](https://claude.ai/download) | Anthropic 官方桌面客户端 | 桌面应用 |
| [Claude Code](https://claude.ai/code) | Anthropic 官方 CLI 工具 | CLI |
| [Continue](https://github.com/continuedev/continue) | VS Code / JetBrains AI 编程助手 | IDE 插件 |
| [Cursor](https://cursor.com) | AI 优先的代码编辑器 | 编辑器 |
| [Zed](https://zed.dev) | 高性能编辑器，内置 MCP 支持 | 编辑器 |
| [LibreChat](https://github.com/danny-avila/LibreChat) | 开源多模型聊天界面 | Web 应用 |

---

## 资源

- [MCP 官方文档](https://modelcontextprotocol.io/docs) — 协议规范与开发指南
- [MCP 官方服务器仓库](https://github.com/modelcontextprotocol/servers) — Anthropic 维护的参考实现
- [MCP SDK (TypeScript)](https://github.com/modelcontextprotocol/typescript-sdk)
- [MCP SDK (Python)](https://github.com/modelcontextprotocol/python-sdk)
- [MCP SDK (Kotlin)](https://github.com/modelcontextprotocol/kotlin-sdk)
- [Smithery](https://smithery.ai) — MCP 服务器发现与托管平台
- [mcp.so](https://mcp.so) — MCP 社区目录

---

## 贡献指南

欢迎提交 PR 贡献优秀的 MCP！请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。

入选标准：
- 有清晰的文档与安装说明
- 代码开源且许可证明确
- 维护活跃（近 6 个月有提交或回应 issue）
- 功能聚焦、实用性强

---

<p align="center">
  <sub>Maintained with ❤️ | <a href="CONTRIBUTING.md">Contributing</a> | <a href="LICENSE">License</a></sub>
</p>
