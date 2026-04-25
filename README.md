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
| [Azure DevOps MCP](https://github.com/microsoft/azure-devops-mcp) | Microsoft 官方 | Boards、Repos、Pipelines、Artefacts | ![](https://img.shields.io/github/stars/microsoft/azure-devops-mcp?style=flat-square) |
| [CircleCI MCP](https://github.com/CircleCI-Public/mcp-server-circleci) | CircleCI 官方 | Pipelines、Jobs、Workflows | ![](https://img.shields.io/github/stars/CircleCI-Public/mcp-server-circleci?style=flat-square) |
| [JetBrains MCP](https://github.com/JetBrains/mcp-jetbrains) | JetBrains 官方 | IntelliJ、PyCharm、WebStorm 等 IDE | ![](https://img.shields.io/github/stars/JetBrains/mcp-jetbrains?style=flat-square) |
| [Filesystem MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) | Anthropic 官方 | 本地文件读写、目录树、搜索 | — |
| [Git MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/git) | Anthropic 官方 | commit、diff、log、branch 操作 | — |
| [GitLab MCP](https://github.com/zereight/gitlab-mcp) | 社区 | GitLab MR、流水线、Wiki | ![](https://img.shields.io/github/stars/zereight/gitlab-mcp?style=flat-square) |
| [Kubernetes MCP](https://github.com/containers/kubernetes-mcp-server) | Red Hat | Pod、Deployment、Service 管理 | ![](https://img.shields.io/github/stars/containers/kubernetes-mcp-server?style=flat-square) |
| [Docker MCP](https://github.com/ckreiling/mcp-server-docker) | 社区 | 容器、镜像、网络、卷管理 | ![](https://img.shields.io/github/stars/ckreiling/mcp-server-docker?style=flat-square) |
| [Datadog MCP](https://github.com/winor30/mcp-server-datadog) | 社区 | Metrics、Logs、Monitors、APM | ![](https://img.shields.io/github/stars/winor30/mcp-server-datadog?style=flat-square) |
| [Sentry MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/sentry) | Anthropic 官方 | 错误跟踪与性能监控 | — |
| [Grafana MCP](https://github.com/grafana/mcp-grafana) | Grafana 官方 | 仪表盘、指标、告警 | ![](https://img.shields.io/github/stars/grafana/mcp-grafana?style=flat-square) |
| [New Relic MCP](https://github.com/newrelic/mcp) | New Relic 官方 | APM、应用性能监控 | ![](https://img.shields.io/github/stars/newrelic/mcp?style=flat-square) |
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
| [Supabase MCP](https://github.com/supabase-community/supabase-mcp) | Supabase 社区 | PostgreSQL 数据库、认证、Edge Functions | ![](https://img.shields.io/github/stars/supabase-community/supabase-mcp?style=flat-square) |
| [Elasticsearch MCP](https://github.com/elastic/mcp-server-elasticsearch) | Elastic 官方 | 全文搜索、聚合分析、索引管理 | ![](https://img.shields.io/github/stars/elastic/mcp-server-elasticsearch?style=flat-square) |
| [Neo4j MCP](https://github.com/neo4j-contrib/mcp-neo4j) | Neo4j Labs 社区 | 图数据库与知识图谱，支持向量搜索 | ![](https://img.shields.io/github/stars/neo4j-contrib/mcp-neo4j?style=flat-square) |
| [ClickHouse MCP](https://github.com/ClickHouse/mcp-clickhouse) | ClickHouse 官方 | OLAP 数据库查询与分析 | ![](https://img.shields.io/github/stars/ClickHouse/mcp-clickhouse?style=flat-square) |
| [Databricks MCP](https://github.com/JordiNeil/mcp-databricks-server) | 社区 | Databricks 数据仓库与 Unity Catalog | ![](https://img.shields.io/github/stars/JordiNeil/mcp-databricks-server?style=flat-square) |
| [InfluxDB MCP](https://github.com/influxdata/influxdb3_mcp_server) | InfluxData 官方 | 时序数据存储与查询 | ![](https://img.shields.io/github/stars/influxdata/influxdb3_mcp_server?style=flat-square) |
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
| [Zoom MCP](https://github.com/echelon-ai-labs/zoom-mcp) | 社区 | Zoom 会议管理、消息收发 | ![](https://img.shields.io/github/stars/echelon-ai-labs/zoom-mcp?style=flat-square) |
| [Intercom MCP](https://github.com/intercom/intercom-mcp-server) | Intercom 官方 | Intercom 客服聊天集成 | ![](https://img.shields.io/github/stars/intercom/intercom-mcp-server?style=flat-square) |
| [SendGrid MCP](https://github.com/Garoth/sendgrid-mcp) | 社区 | SendGrid 邮件发送、联系人管理、模板 | ![](https://img.shields.io/github/stars/Garoth/sendgrid-mcp?style=flat-square) |
| [Mailgun MCP](https://github.com/mailgun/mailgun-mcp-server) | Mailgun 官方 | Mailgun 邮件发送服务 | ![](https://img.shields.io/github/stars/mailgun/mailgun-mcp-server?style=flat-square) |
| [Discord MCP](https://github.com/SasePriv/mcp-discord) | 社区 | Discord 消息与频道操作 | ![](https://img.shields.io/github/stars/SasePriv/mcp-discord?style=flat-square) |
| [Twilio MCP](https://github.com/twilio-labs/mcp) | Twilio 官方 | 短信、语音通话、WhatsApp | ![](https://img.shields.io/github/stars/twilio-labs/mcp?style=flat-square) |
| [Microsoft Teams MCP](https://github.com/softeria-ss/ms-teams-mcp-server) | 社区 | Teams 消息与会议管理 | ![](https://img.shields.io/github/stars/softeria-ss/ms-teams-mcp-server?style=flat-square) |
| [Microsoft 365 MCP](https://github.com/softeria-ss/ms-teams-mcp-server) | Microsoft 官方 | Outlook、SharePoint、OneDrive | ![](https://img.shields.io/github/stars/softeria-ss/ms-teams-mcp-server?style=flat-square) |
| [Telegram MCP](https://github.com/chigwell/telegram-mcp) | 社区 | Telegram 消息收发 | ![](https://img.shields.io/github/stars/chigwell/telegram-mcp?style=flat-square) |
| [Feishu/Lark MCP](https://github.com/larksuite/oapi-mcp) | 飞书官方 | 飞书消息、日历、文档 | ![](https://img.shields.io/github/stars/larksuite/oapi-mcp?style=flat-square) |
| [Zulip MCP](https://github.com/zulip/zulip-mcp) | Zulip 官方 | 开源团队聊天 | ![](https://img.shields.io/github/stars/zulip/zulip-mcp?style=flat-square) |
| [Webex MCP](https://github.com/cisco-zbx/webex-mcp) | Cisco 官方 | Webex 会议与消息 | ![](https://img.shields.io/github/stars/cisco-zbx/webex-mcp?style=flat-square) |
| [Twitter/X MCP](https://github.com/twitter/twitter-mcp) | Twitter 官方 | Twitter/X API 集成 | ![](https://img.shields.io/github/stars/twitter/twitter-mcp?style=flat-square) |
| [LinkedIn MCP](https://github.com/linkedin/mcp) | LinkedIn 官方 | LinkedIn API 集成 | ![](https://img.shields.io/github/stars/linkedin/mcp?style=flat-square) |
| [Bluesky MCP](https://github.com/bluesky-social/mcp) | Bluesky 官方 | Bluesky 社交平台 | ![](https://img.shields.io/github/stars/bluesky-social/mcp?style=flat-square) |

---

## 效率与工作流

详见 [categories/productivity/](categories/productivity/README.md)

| 名称 | 作者/厂商 | 描述 | Stars |
|------|----------|------|-------|
| [Notion MCP](https://github.com/makenotion/notion-mcp-server) | Notion 官方 | 读写页面与数据库，22 个工具 | ![](https://img.shields.io/github/stars/makenotion/notion-mcp-server?style=flat-square) |
| [Linear MCP](https://github.com/jerhadf/linear-mcp-server) | 社区 | Linear Issue 与项目管理 | ![](https://img.shields.io/github/stars/jerhadf/linear-mcp-server?style=flat-square) |
| [Monday.com MCP](https://github.com/mondaycom/mcp) | Monday.com 官方 | 看板、任务、项群组管理与动态 API 工具 | ![](https://img.shields.io/github/stars/mondaycom/mcp?style=flat-square) |
| [Plane MCP](https://github.com/makeplane/plane-mcp-server) | Plane 官方 | 项目、Issue、工作项状态管理 | ![](https://img.shields.io/github/stars/makeplane/plane-mcp-server?style=flat-square) |
| [Asana MCP](https://github.com/Asana/asana-mcp-server) | Asana 官方 | 任务、项目、工作区管理 | ![](https://img.shields.io/github/stars/Asana/asana-mcp-server?style=flat-square) |
| [Jira MCP](https://github.com/sooperset/mcp-atlassian) | 社区 | Jira/Confluence 完整操作 | ![](https://img.shields.io/github/stars/sooperset/mcp-atlassian?style=flat-square) |
| [Google Calendar MCP](https://github.com/nspady/google-calendar-mcp) | 社区 | 日历事件创建与管理 | ![](https://img.shields.io/github/stars/nspady/google-calendar-mcp?style=flat-square) |
| [Todoist MCP](https://github.com/abhiz123/todoist-mcp-server) | 社区 | 任务管理与提醒 | ![](https://img.shields.io/github/stars/abhiz123/todoist-mcp-server?style=flat-square) |
| [ClickUp MCP](https://github.com/clickup/mcp) | ClickUp 官方 | 任务、清单、目标管理 | ![](https://img.shields.io/github/stars/clickup/mcp?style=flat-square) |
| [Evernote MCP](https://github.com/evernote/mcp) | Evernote 官方 | 笔记、笔记本、标签 | ![](https://img.shields.io/github/stars/evernote/mcp?style=flat-square) |
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
| [AlibabaCloud MCP](https://github.com/aliyun/alibabacloud-core-mcp-server) | 阿里云 官方 | ECS、VPC、CloudMonitor 资源管理 | ![](https://img.shields.io/github/stars/aliyun/alibabacloud-core-mcp-server?style=flat-square) |
| [DigitalOcean MCP](https://github.com/digitalocean-labs/mcp-digitalocean) | DigitalOcean 官方 | Droplets、VPC、Storage、Domains | ![](https://img.shields.io/github/stars/digitalocean-labs/mcp-digitalocean?style=flat-square) |
| [Netlify MCP](https://github.com/netlify/netlify-mcp) | Netlify 官方 | 站点部署、函数、环境变量管理 | ![](https://img.shields.io/github/stars/netlify/netlify-mcp?style=flat-square) |
| [AWS KB Retrieval](https://github.com/modelcontextprotocol/servers/tree/main/src/aws-kb-retrieval-server) | Anthropic 官方 | AWS Bedrock 知识库检索 | — |
| [IBM MCP](https://github.com/IBM/mcp) | IBM 官方 | IBM Cloud 服务集成 | ![](https://img.shields.io/github/stars/IBM/mcp?style=flat-square) |

---

## AI 与机器学习

详见 [categories/ai/](categories/ai/README.md)

| 名称 | 作者/厂商 | 描述 | Stars |
|------|----------|------|-------|
| [LangChain MCP Adapters](https://github.com/langchain-ai/langchain-mcp-adapters) | LangChain 官方 | 将 MCP 工具接入 LangChain Agent | ![](https://img.shields.io/github/stars/langchain-ai/langchain-mcp-adapters?style=flat-square) |
| [OpenAI Agents MCP](https://github.com/openai/openai-agents-python) | OpenAI 官方 | OpenAI Agents SDK 原生 MCP 支持 | ![](https://img.shields.io/github/stars/openai/openai-agents-python?style=flat-square) |
| [Groq MCP](https://github.com/groq/groq-mcp-server) | Groq 官方 | Groq 硬件加速 LLM 推理 | ![](https://img.shields.io/github/stars/groq/groq-mcp-server?style=flat-square) |
| [Hugging Face MCP](https://github.com/evalstate/mcp-hfspace) | 社区 | Hugging Face Spaces 模型推理 | ![](https://img.shields.io/github/stars/evalstate/mcp-hfspace?style=flat-square) |
| [Perplexity MCP](https://github.com/perplexityai/modelcontextprotocol) | Perplexity 官方 | 实时 AI 搜索与问答 | ![](https://img.shields.io/github/stars/perplexityai/modelcontextprotocol?style=flat-square) |
| [Sequential Thinking MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking) | Anthropic 官方 | 结构化推理与思维链工具 | — |
| [Qdrant MCP](https://github.com/qdrant/mcp-server-qdrant) | Qdrant 官方 | 向量语义搜索 | ![](https://img.shields.io/github/stars/qdrant/mcp-server-qdrant?style=flat-square) |
| [Gemini MCP](https://github.com/google/mcp-gemini) | Google 官方 | Gemini AI 模型集成 | ![](https://img.shields.io/github/stars/google/mcp-gemini?style=flat-square) |
| [Cohere MCP](https://github.com/cohere-ai/mcp) | Cohere 官方 | 命令与嵌入模型 | ![](https://img.shields.io/github/stars/cohere-ai/mcp?style=flat-square) |
| [Mistral OCR MCP](https://github.com/mistralai/mcp-ocr) | Mistral 官方 | 文档 OCR 与文本提取 | ![](https://img.shields.io/github/stars/mistralai/mcp-ocr?style=flat-square) |

---

## 企业与商业

详见 [categories/enterprise/](categories/enterprise/README.md)

| 名称 | 作者/厂商 | 描述 | Stars |
|------|----------|------|-------|
| [Stripe MCP](https://github.com/stripe/agent-toolkit) | Stripe 官方 | 支付、订阅、账单操作 | ![](https://img.shields.io/github/stars/stripe/agent-toolkit?style=flat-square) |
| [Salesforce MCP](https://github.com/tsmztech/mcp-server-salesforce) | 社区 | Salesforce CRM 数据访问 | ![](https://img.shields.io/github/stars/tsmztech/mcp-server-salesforce?style=flat-square) |
| [Xero MCP](https://github.com/XeroAPI/xero-mcp-server) | Xero 官方 | 会计、发票、财务报表 | ![](https://img.shields.io/github/stars/XeroAPI/xero-mcp-server?style=flat-square) |
| [HubSpot MCP](https://github.com/HubSpot/mcp-server) | HubSpot 官方 | CRM 联系人、交易、营销 | ![](https://img.shields.io/github/stars/HubSpot/mcp-server?style=flat-square) |
| [ServiceNow MCP](https://github.com/aartiq/servicenow-mcp) | 社区 | 企业 ITSM、ITOM、HRSD 等 150+ 工具 | ![](https://img.shields.io/github/stars/aartiq/servicenow-mcp?style=flat-square) |
| [ERPNext MCP](https://github.com/optimusbasti/erpnext-mcp) | 社区 | 开源 ERP CRM 与项目管理 | ![](https://img.shields.io/github/stars/optimusbasti/erpnext-mcp?style=flat-square) |
| [Odoo MCP](https://github.com/aadilakbar/ad-mcp-bridge-server) | 社区 | Odoo ERP 集成 | ![](https://img.shields.io/github/stars/aadilakbar/ad-mcp-bridge-server?style=flat-square) |
| [Dynamics 365 MCP](https://github.com/srikanth-paladugula/mcp-dynamics365-server) | 社区 | Microsoft Dynamics 365 集成 | ![](https://img.shields.io/github/stars/srikanth-paladugula/mcp-dynamics365-server?style=flat-square) |
| [Zoho MCP](https://github.com/zoho/mcp) | Zoho 官方 | Zoho CRM、Books、Desk | ![](https://img.shields.io/github/stars/zoho/mcp?style=flat-square) |
| [SharePoint MCP](https://github.com/ SharePoint/mcp) | Microsoft 官方 | SharePoint、OneDrive 文件管理 | ![](https://img.shields.io/github/stars/SharePoint/mcp?style=flat-square) |
| [Paddle MCP](https://github.com/PaddleHQ/paddle-mcp-server) | Paddle 官方 | 支付、订阅计费管理 | ![](https://img.shields.io/github/stars/PaddleHQ/paddle-mcp-server?style=flat-square) |
| [DataForSEO MCP](https://github.com/dataforseo/mcp-server-typescript) | DataForSEO 官方 | SEO 数据与搜索分析 | ![](https://img.shields.io/github/stars/dataforseo/mcp-server-typescript?style=flat-square) |

---

## 安全

详见 [categories/security/](categories/security/README.md)

| 名称 | 作者/厂商 | 描述 | Stars |
|------|----------|------|-------|
| [1Password MCP](https://github.com/1Password/mcp-server) | 1Password 官方 | 密钥与凭证安全访问 | ![](https://img.shields.io/github/stars/1Password/mcp-server?style=flat-square) |
| [Semgrep MCP](https://github.com/semgrep/mcp) | Semgrep 官方 | 代码静态安全扫描 | ![](https://img.shields.io/github/stars/semgrep/mcp?style=flat-square) |
| [Snyk MCP](https://github.com/snyk/snyk-mcp) | Snyk 官方 | 依赖漏洞检测与修复 | ![](https://img.shields.io/github/stars/snyk/snyk-mcp?style=flat-square) |
| [OSV MCP](https://github.com/gleicon/mcp-osv) | 社区 | OSV.dev 漏洞数据库集成，依赖漏洞分析 | ![](https://img.shields.io/github/stars/gleicon/mcp-osv?style=flat-square) |
| [Infisical MCP](https://github.com/Infisical/mcp) | Infisical 官方 | 开源密钥管理与注入 | ![](https://img.shields.io/github/stars/Infisical/mcp?style=flat-square) |
| [Bolt MCP](https://github.com/bolt-sast/bolt-mcp) | 社区 | 安全攻击面扫描 | ![](https://img.shields.io/github/stars/bolt-sast/bolt-mcp?style=flat-square) |
| [Beagle Security MCP](https://github.com/beagle-security/mcp) | Beagle Security 官方 | Web 应用安全测试 | ![](https://img.shields.io/github/stars/beagle-security/mcp?style=flat-square) |
| [Tenzir MCP](https://github.com/tenzir/mcp) | Tenzir 官方 | 安全数据管道与威胁检测 | ![](https://img.shields.io/github/stars/tenzir/mcp?style=flat-square) |

---

## 实用工具

详见 [categories/utilities/](categories/utilities/README.md)

| 名称 | 作者/厂商 | 描述 | Stars |
|------|----------|------|-------|
| [Brave Search MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search) | Anthropic 官方 | Brave 隐私搜索引擎 | — |
| [Fetch MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) | Anthropic 官方 | 网页内容抓取与转换 | — |
| [Wikipedia MCP](https://github.com/Rudra-ravi/wikipedia-mcp) | 社区 | 维基百科搜索与内容检索 | ![](https://img.shields.io/github/stars/Rudra-ravi/wikipedia-mcp?style=flat-square) |
| [Markdownify MCP](https://github.com/zcaceres/markdownify-mcp) | 社区 | 将网页内容和文件转换为 Markdown | ![](https://img.shields.io/github/stars/zcaceres/markdownify-mcp?style=flat-square) |
| [Exa Search MCP](https://github.com/exa-labs/exa-mcp-server) | Exa 官方 | 神经语义搜索 | ![](https://img.shields.io/github/stars/exa-labs/exa-mcp-server?style=flat-square) |
| [Excel MCP](https://github.com/haris-musa/excel-mcp-server) | 社区 | Excel/CSV 文件读写处理 | ![](https://img.shields.io/github/stars/haris-musa/excel-mcp-server?style=flat-square) |
| [Time MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/time) | Anthropic 官方 | 时区与时间转换工具 | — |
| [Whois MCP](https://github.com/whois-api/mcp) | Whois 官方 | 域名 WHOIS 查询 | ![](https://img.shields.io/github/stars/whois-api/mcp?style=flat-square) |
| [IP2Location MCP](https://github.com/ip2location/mcp) | IP2Location 官方 | IP 地理位置查询 | ![](https://img.shields.io/github/stars/ip2location/mcp?style=flat-square) |
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
