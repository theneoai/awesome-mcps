# Awesome MCPs [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Curated list of awesome Model Context Protocol (MCP) servers and tools

[中文](README.md) | English

[MCP](https://modelcontextprotocol.io) is an open protocol by Anthropic that lets AI models securely connect to external tools and data sources. Supported by Google, Microsoft, AWS, Cloudflare, and more — with **10,000+** live servers and **97M+** monthly downloads.

## Quick Start

```bash
git clone https://github.com/theneoai/awesome-mcps.git
cd awesome-mcps
bash install.sh
```

Or copy any JSON snippet from [`configs/`](configs/) directly into your `claude_desktop_config.json`.

---

## Contents

| Category | Description |
|----------|-------------|
| [🔧 Development Tools](#development-tools) | Code hosting, CI/CD, containers, browser automation |
| [📊 Data & Databases](#data--databases) | SQL, NoSQL, vector DBs, data warehouses |
| [💬 Communication](#communication) | Messaging, email, meetings, team collaboration |
| [✅ Productivity](#productivity) | Project management, calendar, notes, tasks |
| [☁️ Cloud & Infrastructure](#cloud--infrastructure) | AWS, GCP, Azure, Cloudflare |
| [🤖 AI & Machine Learning](#ai--machine-learning) | Model inference, vector search, agent frameworks |
| [🏢 Enterprise & Business](#enterprise--business) | CRM, ERP, finance, payments |
| [🔒 Security](#security) | Secret management, code scanning, vulnerability detection |
| [🛠️ Utilities](#utilities) | Search, scraping, file processing |
| [🖥️ Clients](#clients) | MCP-compatible AI clients and tools |

---

## Development Tools

See [categories/development/](categories/development/README.md)

| Name | Vendor | Description | Stars |
|------|--------|-------------|-------|
| [GitHub MCP](https://github.com/github/github-mcp-server) | GitHub Official | Repos, PRs, Issues, Actions — 51 tools | ![](https://img.shields.io/github/stars/github/github-mcp-server?style=flat-square) |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | Microsoft Official | Cross-browser automation, screenshots, forms | ![](https://img.shields.io/github/stars/microsoft/playwright-mcp?style=flat-square) |
| [Azure DevOps MCP](https://github.com/microsoft/azure-devops-mcp) | Microsoft Official | Boards, Repos, Pipelines, Artefacts | ![](https://img.shields.io/github/stars/microsoft/azure-devops-mcp?style=flat-square) |
| [CircleCI MCP](https://github.com/CircleCI-Public/mcp-server-circleci) | CircleCI Official | Pipelines, Jobs, Workflows | ![](https://img.shields.io/github/stars/CircleCI-Public/mcp-server-circleci?style=flat-square) |
| [JetBrains MCP](https://github.com/JetBrains/mcp-jetbrains) | JetBrains Official | IntelliJ, PyCharm, WebStorm IDEs | ![](https://img.shields.io/github/stars/JetBrains/mcp-jetbrains?style=flat-square) |
| [Filesystem MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) | Anthropic Official | Local file read/write, directory tree, search | — |
| [Git MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/git) | Anthropic Official | commit, diff, log, branch operations | — |
| [GitLab MCP](https://github.com/zereight/gitlab-mcp) | Community | GitLab MRs, pipelines, Wiki | ![](https://img.shields.io/github/stars/zereight/gitlab-mcp?style=flat-square) |
| [Kubernetes MCP](https://github.com/containers/kubernetes-mcp-server) | Red Hat | Pod, Deployment, Service management | ![](https://img.shields.io/github/stars/containers/kubernetes-mcp-server?style=flat-square) |
| [Docker MCP](https://github.com/ckreiling/mcp-server-docker) | Community | Containers, images, networks, volumes | ![](https://img.shields.io/github/stars/ckreiling/mcp-server-docker?style=flat-square) |
| [Datadog MCP](https://github.com/winor30/mcp-server-datadog) | Community | Metrics, Logs, Monitors, APM | ![](https://img.shields.io/github/stars/winor30/mcp-server-datadog?style=flat-square) |
| [Sentry MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/sentry) | Anthropic Official | Error tracking and performance monitoring | — |
| [Grafana MCP](https://github.com/grafana/mcp-grafana) | Grafana Official | Dashboards, metrics, alerts | ![](https://img.shields.io/github/stars/grafana/mcp-grafana?style=flat-square) |
| [New Relic MCP](https://github.com/newrelic/mcp) | New Relic Official | APM, application performance monitoring | ![](https://img.shields.io/github/stars/newrelic/mcp?style=flat-square) |
| [Puppeteer MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/puppeteer) | Anthropic Official | Puppeteer browser control | — |
| [Firebase MCP](https://github.com/gannonh/firebase-mcp) | Community | Firebase Auth, Firestore, Storage | ![](https://img.shields.io/github/stars/gannonh/firebase-mcp?style=flat-square) |
| [Nomad MCP](https://github.com/kocierik/mcp-nomad) | Community | HashiCorp Nomad job orchestration | ![](https://img.shields.io/github/stars/kocierik/mcp-nomad?style=flat-square) |

---

## Data & Databases

See [categories/data/](categories/data/README.md)

| Name | Vendor | Description | Stars |
|------|--------|-------------|-------|
| [PostgreSQL MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/postgres) | Anthropic Official | PostgreSQL query and schema analysis | — |
| [SQLite MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite) | Anthropic Official | SQLite local database operations | — |
| [Supabase MCP](https://github.com/supabase-community/supabase-mcp) | Supabase Community | PostgreSQL database, auth, Edge Functions | ![](https://img.shields.io/github/stars/supabase-community/supabase-mcp?style=flat-square) |
| [Elasticsearch MCP](https://github.com/elastic/mcp-server-elasticsearch) | Elastic Official | Full-text search, aggregations, index management | ![](https://img.shields.io/github/stars/elastic/mcp-server-elasticsearch?style=flat-square) |
| [Neo4j MCP](https://github.com/neo4j-contrib/mcp-neo4j) | Neo4j Labs Community | Graph database and knowledge graph with vector search | ![](https://img.shields.io/github/stars/neo4j-contrib/mcp-neo4j?style=flat-square) |
| [ClickHouse MCP](https://github.com/ClickHouse/mcp-clickhouse) | ClickHouse Official | OLAP database queries and analytics | ![](https://img.shields.io/github/stars/ClickHouse/mcp-clickhouse?style=flat-square) |
| [Databricks MCP](https://github.com/JordiNeil/mcp-databricks-server) | Community | Databricks data warehouse and Unity Catalog | ![](https://img.shields.io/github/stars/JordiNeil/mcp-databricks-server?style=flat-square) |
| [InfluxDB MCP](https://github.com/influxdata/influxdb3_mcp_server) | InfluxData Official | Time-series data storage and queries | ![](https://img.shields.io/github/stars/influxdata/influxdb3_mcp_server?style=flat-square) |
| [MCP Toolbox for Databases](https://github.com/googleapis/mcp-toolbox-for-databases) | Google Official | PostgreSQL, MySQL, AlloyDB, Spanner | ![](https://img.shields.io/github/stars/googleapis/mcp-toolbox-for-databases?style=flat-square) |
| [Redis MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/redis) | Anthropic Official | Redis key-value store operations | — |
| [MySQL MCP](https://github.com/benborla/mcp-server-mysql) | Community | MySQL database connection and query | ![](https://img.shields.io/github/stars/benborla/mcp-server-mysql?style=flat-square) |
| [BigQuery MCP](https://github.com/LucasHild/mcp-server-bigquery) | Community | Google BigQuery data analysis | ![](https://img.shields.io/github/stars/LucasHild/mcp-server-bigquery?style=flat-square) |
| [Qdrant MCP](https://github.com/qdrant/mcp-server-qdrant) | Qdrant Official | Vector database search and embeddings | ![](https://img.shields.io/github/stars/qdrant/mcp-server-qdrant?style=flat-square) |
| [MongoDB MCP](https://github.com/mongodb-labs/mongodb-mcp-server) | MongoDB Official | Document read/write and aggregation | ![](https://img.shields.io/github/stars/mongodb-labs/mongodb-mcp-server?style=flat-square) |
| [Tableau MCP](https://github.com/tableau/tableau-mcp) | Tableau Official | Data visualization and report access | ![](https://img.shields.io/github/stars/tableau/tableau-mcp?style=flat-square) |

---

## Communication

See [categories/communication/](categories/communication/README.md)

| Name | Vendor | Description | Stars |
|------|--------|-------------|-------|
| [Slack MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/slack) | Anthropic Official | Slack messaging and channel management | — |
| [Gmail MCP](https://github.com/GongRzhe/Gmail-MCP-Server) | Community | Gmail read/write and management | ![](https://img.shields.io/github/stars/GongRzhe/Gmail-MCP-Server?style=flat-square) |
| [Zoom MCP](https://github.com/echelon-ai-labs/zoom-mcp) | Community | Zoom meeting management, messaging | ![](https://img.shields.io/github/stars/echelon-ai-labs/zoom-mcp?style=flat-square) |
| [Intercom MCP](https://github.com/intercom/intercom-mcp-server) | Intercom Official | Intercom customer chat integration | ![](https://img.shields.io/github/stars/intercom/intercom-mcp-server?style=flat-square) |
| [SendGrid MCP](https://github.com/Garoth/sendgrid-mcp) | Community | SendGrid email, contacts, templates, campaigns | ![](https://img.shields.io/github/stars/Garoth/sendgrid-mcp?style=flat-square) |
| [Mailgun MCP](https://github.com/mailgun/mailgun-mcp-server) | Mailgun Official | Mailgun email sending service | ![](https://img.shields.io/github/stars/mailgun/mailgun-mcp-server?style=flat-square) |
| [Discord MCP](https://github.com/SasePriv/mcp-discord) | Community | Discord messages and channel operations | ![](https://img.shields.io/github/stars/SasePriv/mcp-discord?style=flat-square) |
| [Twilio MCP](https://github.com/twilio-labs/mcp) | Twilio Official | SMS, voice calls, WhatsApp | ![](https://img.shields.io/github/stars/twilio-labs/mcp?style=flat-square) |
| [Microsoft Teams MCP](https://github.com/softeria-ss/ms-teams-mcp-server) | Community | Teams messages and meetings | ![](https://img.shields.io/github/stars/softeria-ss/ms-teams-mcp-server?style=flat-square) |
| [Microsoft 365 MCP](https://github.com/microsoft/m365-mcp) | Microsoft Official | Outlook, SharePoint, OneDrive | ![](https://img.shields.io/github/stars/microsoft/m365-mcp?style=flat-square) |
| [Telegram MCP](https://github.com/chigwell/telegram-mcp) | Community | Telegram message send/receive | ![](https://img.shields.io/github/stars/chigwell/telegram-mcp?style=flat-square) |
| [Feishu/Lark MCP](https://github.com/larksuite/oapi-mcp) | Feishu Official | Feishu messages, calendar, docs | ![](https://img.shields.io/github/stars/larksuite/oapi-mcp?style=flat-square) |
| [Zulip MCP](https://github.com/zulip/zulip-mcp) | Zulip Official | Open source team chat | ![](https://img.shields.io/github/stars/zulip/zulip-mcp?style=flat-square) |
| [Webex MCP](https://github.com/cisco-zbx/webex-mcp) | Cisco Official | Webex meetings and messaging | ![](https://img.shields.io/github/stars/cisco-zbx/webex-mcp?style=flat-square) |
| [Twitter/X MCP](https://github.com/twitter/twitter-mcp) | Twitter Official | Twitter/X API integration | ![](https://img.shields.io/github/stars/twitter/twitter-mcp?style=flat-square) |
| [LinkedIn MCP](https://github.com/linkedin/mcp) | LinkedIn Official | LinkedIn API integration | ![](https://img.shields.io/github/stars/linkedin/mcp?style=flat-square) |
| [Bluesky MCP](https://github.com/bluesky-social/mcp) | Bluesky Official | Bluesky social platform | ![](https://img.shields.io/github/stars/bluesky-social/mcp?style=flat-square) |

---

## Productivity

See [categories/productivity/](categories/productivity/README.md)

| Name | Vendor | Description | Stars |
|------|--------|-------------|-------|
| [Notion MCP](https://github.com/makenotion/notion-mcp-server) | Notion Official | Read/write pages & databases — 22 tools | ![](https://img.shields.io/github/stars/makenotion/notion-mcp-server?style=flat-square) |
| [Linear MCP](https://github.com/jerhadf/linear-mcp-server) | Community | Linear issue and project management | ![](https://img.shields.io/github/stars/jerhadf/linear-mcp-server?style=flat-square) |
| [Monday.com MCP](https://github.com/mondaycom/mcp) | Monday.com Official | Boards, tasks, item groups management and dynamic API tools | ![](https://img.shields.io/github/stars/mondaycom/mcp?style=flat-square) |
| [Plane MCP](https://github.com/makeplane/plane-mcp-server) | Plane Official | Projects, issues, work item states management | ![](https://img.shields.io/github/stars/makeplane/plane-mcp-server?style=flat-square) |
| [Asana MCP](https://github.com/Asana/asana-mcp-server) | Asana Official | Tasks, projects, workspaces | ![](https://img.shields.io/github/stars/Asana/asana-mcp-server?style=flat-square) |
| [Jira/Confluence MCP](https://github.com/sooperset/mcp-atlassian) | Community | Full Jira and Confluence operations | ![](https://img.shields.io/github/stars/sooperset/mcp-atlassian?style=flat-square) |
| [Google Calendar MCP](https://github.com/nspady/google-calendar-mcp) | Community | Calendar event creation and management | ![](https://img.shields.io/github/stars/nspady/google-calendar-mcp?style=flat-square) |
| [Todoist MCP](https://github.com/abhiz123/todoist-mcp-server) | Community | Task management and reminders | ![](https://img.shields.io/github/stars/abhiz123/todoist-mcp-server?style=flat-square) |
| [ClickUp MCP](https://github.com/clickup/mcp) | ClickUp Official | Tasks, lists, goals management | ![](https://img.shields.io/github/stars/clickup/mcp?style=flat-square) |
| [Evernote MCP](https://github.com/evernote/mcp) | Evernote Official | Notes, notebooks, tags | ![](https://img.shields.io/github/stars/evernote/mcp?style=flat-square) |
| [Google Drive MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive) | Anthropic Official | Document search, read and manage | — |
| [Memory MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/memory) | Anthropic Official | Cross-session persistent knowledge graph | — |

---

## Cloud & Infrastructure

See [categories/cloud/](categories/cloud/README.md)

| Name | Vendor | Description | Stars |
|------|--------|-------------|-------|
| [AWS MCP Servers](https://github.com/awslabs/mcp) | AWS Official | 60+ AWS services: EC2, S3, Lambda, Bedrock | ![](https://img.shields.io/github/stars/awslabs/mcp?style=flat-square) |
| [Azure MCP](https://github.com/Azure/azure-mcp) | Microsoft Official | Azure resource management and services | ![](https://img.shields.io/github/stars/Azure/azure-mcp?style=flat-square) |
| [Cloudflare MCP](https://github.com/cloudflare/mcp-server-cloudflare) | Cloudflare Official | DNS, Workers, R2, Zero Trust — 2,500+ endpoints | ![](https://img.shields.io/github/stars/cloudflare/mcp-server-cloudflare?style=flat-square) |
| [AlibabaCloud MCP](https://github.com/aliyun/alibabacloud-core-mcp-server) | Alibaba Cloud Official | ECS, VPC, CloudMonitor resource management | ![](https://img.shields.io/github/stars/aliyun/alibabacloud-core-mcp-server?style=flat-square) |
| [DigitalOcean MCP](https://github.com/digitalocean-labs/mcp-digitalocean) | DigitalOcean Official | Droplets, VPC, Storage, Domains | ![](https://img.shields.io/github/stars/digitalocean-labs/mcp-digitalocean?style=flat-square) |
| [Netlify MCP](https://github.com/netlify/netlify-mcp) | Netlify Official | Site deployments, functions, env vars | ![](https://img.shields.io/github/stars/netlify/netlify-mcp?style=flat-square) |
| [AWS KB Retrieval](https://github.com/modelcontextprotocol/servers/tree/main/src/aws-kb-retrieval-server) | Anthropic Official | AWS Bedrock knowledge base retrieval | — |
| [IBM MCP](https://github.com/IBM/mcp) | IBM Official | IBM Cloud services integration | ![](https://img.shields.io/github/stars/IBM/mcp?style=flat-square) |
| [Firebase MCP](https://github.com/gannonh/firebase-mcp) | Community | Firebase / GCP services | ![](https://img.shields.io/github/stars/gannonh/firebase-mcp?style=flat-square) |

---

## AI & Machine Learning

See [categories/ai/](categories/ai/README.md)

| Name | Vendor | Description | Stars |
|------|--------|-------------|-------|
| [LangChain MCP Adapters](https://github.com/langchain-ai/langchain-mcp-adapters) | LangChain Official | Load MCP tools into LangChain agents | ![](https://img.shields.io/github/stars/langchain-ai/langchain-mcp-adapters?style=flat-square) |
| [OpenAI Agents MCP](https://github.com/openai/openai-agents-python) | OpenAI Official | Native MCP support in OpenAI Agents SDK | ![](https://img.shields.io/github/stars/openai/openai-agents-python?style=flat-square) |
| [Groq MCP](https://github.com/groq/groq-mcp-server) | Groq Official | Hardware-accelerated LLM inference | ![](https://img.shields.io/github/stars/groq/groq-mcp-server?style=flat-square) |
| [Hugging Face MCP](https://github.com/evalstate/mcp-hfspace) | Community | Hugging Face Spaces model inference | ![](https://img.shields.io/github/stars/evalstate/mcp-hfspace?style=flat-square) |
| [Perplexity MCP](https://github.com/perplexityai/modelcontextprotocol) | Perplexity Official | Real-time AI search and Q&A | ![](https://img.shields.io/github/stars/perplexityai/modelcontextprotocol?style=flat-square) |
| [Sequential Thinking MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking) | Anthropic Official | Structured reasoning and chain-of-thought | — |
| [Qdrant MCP](https://github.com/qdrant/mcp-server-qdrant) | Qdrant Official | Vector semantic search | ![](https://img.shields.io/github/stars/qdrant/mcp-server-qdrant?style=flat-square) |
| [Gemini MCP](https://github.com/google/mcp-gemini) | Google Official | Gemini AI model integration | ![](https://img.shields.io/github/stars/google/mcp-gemini?style=flat-square) |
| [Cohere MCP](https://github.com/cohere-ai/mcp) | Cohere Official | Command and embedding models | ![](https://img.shields.io/github/stars/cohere-ai/mcp?style=flat-square) |
| [Mistral OCR MCP](https://github.com/mistralai/mcp-ocr) | Mistral Official | Document OCR and text extraction | ![](https://img.shields.io/github/stars/mistralai/mcp-ocr?style=flat-square) |

---

## Enterprise & Business

See [categories/enterprise/](categories/enterprise/README.md)

| Name | Vendor | Description | Stars |
|------|--------|-------------|-------|
| [Stripe MCP](https://github.com/stripe/agent-toolkit) | Stripe Official | Payments, subscriptions, billing | ![](https://img.shields.io/github/stars/stripe/agent-toolkit?style=flat-square) |
| [Salesforce MCP](https://github.com/tsmztech/mcp-server-salesforce) | Community | Salesforce CRM data access | ![](https://img.shields.io/github/stars/tsmztech/mcp-server-salesforce?style=flat-square) |
| [Xero MCP](https://github.com/XeroAPI/xero-mcp-server) | Xero Official | Accounting, invoices, financial reports | ![](https://img.shields.io/github/stars/XeroAPI/xero-mcp-server?style=flat-square) |
| [HubSpot MCP](https://github.com/HubSpot/mcp-server) | HubSpot Official | CRM contacts, deals, marketing | ![](https://img.shields.io/github/stars/HubSpot/mcp-server?style=flat-square) |
| [ServiceNow MCP](https://github.com/aartiq/servicenow-mcp) | Community | Enterprise ITSM, ITOM, HRSD - 150+ tools | ![](https://img.shields.io/github/stars/aartiq/servicenow-mcp?style=flat-square) |
| [ERPNext MCP](https://github.com/optimusbasti/erpnext-mcp) | Community | Open source ERP CRM and project management | ![](https://img.shields.io/github/stars/optimusbasti/erpnext-mcp?style=flat-square) |
| [Odoo MCP](https://github.com/aadilakbar/ad-mcp-bridge-server) | Community | Odoo ERP integration | ![](https://img.shields.io/github/stars/aadilakbar/ad-mcp-bridge-server?style=flat-square) |
| [Dynamics 365 MCP](https://github.com/srikanth-paladugula/mcp-dynamics365-server) | Community | Microsoft Dynamics 365 integration | ![](https://img.shields.io/github/stars/srikanth-paladugula/mcp-dynamics365-server?style=flat-square) |
| [Zoho MCP](https://github.com/zoho/mcp) | Zoho Official | Zoho CRM, Books, Desk | ![](https://img.shields.io/github/stars/zoho/mcp?style=flat-square) |
| [SharePoint MCP](https://github.com/SharePoint/mcp) | Microsoft Official | SharePoint, OneDrive file management | ![](https://img.shields.io/github/stars/SharePoint/mcp?style=flat-square) |
| [Paddle MCP](https://github.com/PaddleHQ/paddle-mcp-server) | Paddle Official | Payments, subscriptions, billing | ![](https://img.shields.io/github/stars/PaddleHQ/paddle-mcp-server?style=flat-square) |
| [DataForSEO MCP](https://github.com/dataforseo/mcp-server-typescript) | DataForSEO Official | SEO data and search analytics | ![](https://img.shields.io/github/stars/dataforseo/mcp-server-typescript?style=flat-square) |

---

## Security

See [categories/security/](categories/security/README.md)

| Name | Vendor | Description | Stars |
|------|--------|-------------|-------|
| [1Password MCP](https://github.com/1Password/mcp-server) | 1Password Official | Secrets and credential secure access | ![](https://img.shields.io/github/stars/1Password/mcp-server?style=flat-square) |
| [Semgrep MCP](https://github.com/semgrep/mcp) | Semgrep Official | Static code security scanning | ![](https://img.shields.io/github/stars/semgrep/mcp?style=flat-square) |
| [Snyk MCP](https://github.com/snyk/snyk-mcp) | Snyk Official | Dependency vulnerability detection | ![](https://img.shields.io/github/stars/snyk/snyk-mcp?style=flat-square) |
| [OSV MCP](https://github.com/gleicon/mcp-osv) | Community | OSV.dev vulnerability database integration | ![](https://img.shields.io/github/stars/gleicon/mcp-osv?style=flat-square) |
| [Infisical MCP](https://github.com/Infisical/mcp) | Infisical Official | Open-source secret management | ![](https://img.shields.io/github/stars/Infisical/mcp?style=flat-square) |
| [Bolt MCP](https://github.com/bolt-sast/bolt-mcp) | Community | Security attack surface scanning | ![](https://img.shields.io/github/stars/bolt-sast/bolt-mcp?style=flat-square) |
| [Beagle Security MCP](https://github.com/beagle-security/mcp) | Beagle Security Official | Web application security testing | ![](https://img.shields.io/github/stars/beagle-security/mcp?style=flat-square) |
| [Tenzir MCP](https://github.com/tenzir/mcp) | Tenzir Official | Security data pipelines and threat detection | ![](https://img.shields.io/github/stars/tenzir/mcp?style=flat-square) |

---

## Utilities

See [categories/utilities/](categories/utilities/README.md)

| Name | Vendor | Description | Stars |
|------|--------|-------------|-------|
| [Brave Search MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search) | Anthropic Official | Privacy-focused web search | — |
| [Fetch MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) | Anthropic Official | Web content fetching and conversion | — |
| [Wikipedia MCP](https://github.com/Rudra-ravi/wikipedia-mcp) | Community | Wikipedia search and content retrieval | ![](https://img.shields.io/github/stars/Rudra-ravi/wikipedia-mcp?style=flat-square) |
| [Markdownify MCP](https://github.com/zcaceres/markdownify-mcp) | Community | Convert web content and files to Markdown | ![](https://img.shields.io/github/stars/zcaceres/markdownify-mcp?style=flat-square) |
| [Exa Search MCP](https://github.com/exa-labs/exa-mcp-server) | Exa Official | Neural semantic search | ![](https://img.shields.io/github/stars/exa-labs/exa-mcp-server?style=flat-square) |
| [Excel MCP](https://github.com/haris-musa/excel-mcp-server) | Community | Excel/CSV file read and write | ![](https://img.shields.io/github/stars/haris-musa/excel-mcp-server?style=flat-square) |
| [Time MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/time) | Anthropic Official | Timezone and time conversion | — |
| [Whois MCP](https://github.com/whois-api/mcp) | Whois Official | Domain WHOIS lookup | ![](https://img.shields.io/github/stars/whois-api/mcp?style=flat-square) |
| [IP2Location MCP](https://github.com/ip2location/mcp) | IP2Location Official | IP geolocation lookup | ![](https://img.shields.io/github/stars/ip2location/mcp?style=flat-square) |
| [MCP Proxy](https://github.com/tbxark/mcp-proxy) | Community | Aggregate multiple MCPs into one HTTP endpoint | ![](https://img.shields.io/github/stars/tbxark/mcp-proxy?style=flat-square) |

---

## Clients

| Name | Type | Description |
|------|------|-------------|
| [Claude Desktop](https://claude.ai/download) | Desktop | Anthropic official desktop client |
| [Claude Code](https://claude.ai/code) | CLI | Anthropic official CLI tool |
| [Continue](https://github.com/continuedev/continue) | IDE Plugin | VS Code / JetBrains AI coding assistant |
| [Cursor](https://cursor.com) | Editor | AI-first code editor |
| [Zed](https://zed.dev) | Editor | High-performance editor with built-in MCP |
| [LibreChat](https://github.com/danny-avila/LibreChat) | Web App | Open-source multi-model chat interface |
| [Cline](https://github.com/cline/cline) | IDE Plugin | VS Code autonomous coding agent |
| [Jan](https://github.com/janhq/jan) | Desktop | Open-source local AI desktop client |

---

## Resources

- [MCP Official Docs](https://modelcontextprotocol.io/docs) — Protocol spec and developer guide
- [Official Reference Servers](https://github.com/modelcontextprotocol/servers) — Maintained by Anthropic
- [MCP Registry](https://registry.modelcontextprotocol.io/) — Official server registry
- [Smithery](https://smithery.ai) — GUI installation platform
- [Glama](https://glama.ai/mcp/servers) — 21,000+ open-source MCPs
- [PulseMCP](https://pulsemcp.com/servers) — Daily updated, 12,000+ servers
- [mcp.so](https://mcp.so) — Community-driven directory
- [TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [Python SDK](https://github.com/modelcontextprotocol/python-sdk)
- [Kotlin SDK](https://github.com/modelcontextprotocol/kotlin-sdk)
- [C# SDK](https://github.com/modelcontextprotocol/csharp-sdk) — Built with Microsoft

---

## Contributing

PRs welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first. Criteria: clear documentation, open-source license, active maintenance within 6 months.

---

<p align="center">
  <sub>Maintained with ❤️ by <a href="https://github.com/theneoai">theneoai</a> | <a href="README.md">中文</a> | <a href="CONTRIBUTING.md">Contributing</a> | <a href="LICENSE">MIT</a></sub>
</p>
