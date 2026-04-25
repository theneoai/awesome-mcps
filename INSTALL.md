# Awesome MCPs Installation

> One-command installation for MCP servers

## Quick Install (Recommended)

```bash
git clone https://github.com/theneoai/awesome-mcps.git
cd awesome-mcps
bash install.sh
```

## For AI Agents

Copy the following to your `claude_desktop_config.json` `mcpServers` section:

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "YOUR_TOKEN"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/your/path"],
      "env": {}
    }
  }
}
```

## Individual MCP Installation

### Development Tools

**GitHub MCP** - Repos, PRs, Issues, Actions
```bash
npx -y @modelcontextprotocol/server-github
```
Config: `configs/github.json`

**Filesystem MCP** - File read/write, directory tree
```bash
npx -y @modelcontextprotocol/server-filesystem
```
Config: `configs/filesystem.json`

**Git MCP** - commit, diff, log, branch
```bash
uvx mcp-server-git --repository /path/to/repo
```
Config: `configs/git.json`

**Playwright MCP** - Cross-browser automation
```bash
npx -y @playwright/mcp@latest
```
Config: `configs/playwright.json`

**JetBrains MCP** - IntelliJ, PyCharm, WebStorm
```bash
npx -y @jetbrains/mcp-jetbrains
```
Config: `configs/jetbrains.json`

**Azure DevOps MCP** - Boards, Repos, Pipelines
```bash
npx -y @modelcontextprotocol/server-azure-devops
```
Config: `configs/azure-devops.json`

**CircleCI MCP** - Pipelines, Jobs, Workflows
```bash
npx -y @circleci/mcp-server-circleci
```
Config: `configs/circleci.json`

**Datadog MCP** - Metrics, Logs, Monitors
```bash
npx -y winor30/mcp-server-datadog
```
Config: `configs/datadog.json`

### Database & Data

**PostgreSQL MCP** - PostgreSQL query
```bash
npx -y @modelcontextprotocol/server-postgres
```
Config: `configs/postgres.json`

**SQLite MCP** - SQLite operations
```bash
uvx mcp-server-sqlite --db-path /path/to/database.db
```
Config: `configs/sqlite.json`

**Redis MCP** - Redis key-value operations
```bash
npx -y @modelcontextprotocol/server-redis
```

**MongoDB MCP** - Document CRUD
```bash
npx -y mongodb-labs/mongodb-mcp-server
```

**Qdrant MCP** - Vector search
```bash
uvx mcp-server-qdrant
```
Config: `configs/qdrant.json`

**Supabase MCP** - PostgreSQL, Auth, Edge Functions
```bash
npx -y supabase-community/supabase-mcp
```
Config: `configs/supabase.json`

**Elasticsearch MCP** - Full-text search
```bash
npx -y @elastic/mcp-server-elasticsearch
```
Config: `configs/elasticsearch.json`

**Neo4j MCP** - Graph database
```bash
uvx mcp-neo4j
```
Config: `configs/neo4j.json`

**ClickHouse MCP** - OLAP queries
```bash
uvx mcp-clickhouse
```
Config: `configs/clickhouse.json`

### Communication

**Slack MCP** - Messages, channels
```bash
npx -y @modelcontextprotocol/server-slack
```
Config: `configs/slack.json`

**Gmail MCP** - Email read/write
```bash
uvx mcp-server-gmail
```
Config: `configs/gmail.json`

**Discord MCP** - Messages, channels
```bash
npx -y SasePriv/mcp-discord
```

**Twilio MCP** - SMS, voice, WhatsApp
```bash
npx -y @twilio-labs/mcp
```

**Zoom MCP** - Meeting management
```bash
npx -y echelon-ai-labs/zoom-mcp
```
Config: `configs/zoom.json`

**Intercom MCP** - Customer chat
```bash
npx -y @intercom/mcp-server
```
Config: `configs/intercom.json`

### Productivity

**Notion MCP** - Pages and databases
```bash
npx -y @notionhq/notion-mcp-server
```
Config: `configs/notion.json`

**Linear MCP** - Issue tracking
```bash
npx -y linear-mcp-server
```
Config: `configs/linear.json`

**Google Drive MCP** - Document search
```bash
npx -y @modelcontextprotocol/server-gdrive
```

**Memory MCP** - Persistent knowledge graph
```bash
npx -y @modelcontextprotocol/server-memory
```
Config: `configs/memory.json`

**Monday.com MCP** - Boards, tasks
```bash
npx -y @mondaycom/mcp
```
Config: `configs/monday.json`

**Plane MCP** - Project management
```bash
npx -y @makeplane/plane-mcp-server
```
Config: `configs/plane.json`

### Cloud

**AWS MCP** - 60+ AWS services
```bash
npm install -g @aws/mcp-server-aws
```
Config: `configs/aws.json`

**Azure MCP** - Azure resource management
```bash
npx -y @azure/mcp
```

**Cloudflare MCP** - DNS, Workers, R2
```bash
npx -y @cloudflare/mcp-server-cloudflare
```
Config: `configs/cloudflare.json`

**DigitalOcean MCP** - Droplets, VPC
```bash
npx -y @digitalocean/mcp
```
Config: `configs/digitalocean.json`

**Netlify MCP** - Deployments, functions
```bash
npx -y netlify-mcp
```
Config: `configs/netlify.json`

### AI & ML

**Hugging Face MCP** - Model inference
```bash
npx -y @evalstate/mcp-hfspace
```

**Perplexity MCP** - Real-time AI search
```bash
pip install perplexity-mcp
```

**Groq MCP** - Hardware-accelerated LLM
```bash
npx -y groq-mcp-server
```
Config: `configs/groq.json`

**Sequential Thinking MCP** - Structured reasoning
```bash
npx -y @modelcontextprotocol/server-sequentialthinking
```

### Utilities

**Brave Search MCP** - Privacy search
```bash
npx -y @modelcontextprotocol/server-brave-search
```
Config: `configs/brave-search.json`

**Fetch MCP** - Web content
```bash
uvx mcp-server-fetch
```
Config: `configs/fetch.json`

**Exa Search MCP** - Neural semantic search
```bash
npx -y @exa-labs/mcp-server
```
Config: `configs/exa.json`

**Tavily MCP** - AI search
```bash
npx -y @tavily/mcp
```
Config: `configs/tavily.json`

**Firecrawl MCP** - Web crawling
```bash
npx -y @mendableai/firecrawl-mcp
```
Config: `configs/firecrawl.json`

### Security

**1Password MCP** - Secret access
```bash
npx -y @1password/mcp
```
Config: `configs/1password.json`

**Semgrep MCP** - Code scanning
```bash
npx -y @semgrep/mcp
```

**Snyk MCP** - Vulnerability detection
```bash
npx -y snyk-mcp
```
Config: `configs/snyk.json`

**Infisical MCP** - Secret management
```bash
npx -y infisical-mcp-server
```

### Enterprise

**Stripe MCP** - Payments
```bash
npx -y @stripe/mcp
```
Config: `configs/stripe.json`

**HubSpot MCP** - CRM
```bash
npx -y @hubspot/mcp-server
```

**Salesforce MCP** - CRM
```bash
npx -y salesforce-mcp-server
```

## Config File Locations

| OS | Path |
|----|------|
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Linux | `~/.config/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |

## After Installation

1. Copy the JSON config to your `mcpServers` section
2. Replace `YOUR_TOKEN` with your actual API key
3. **Restart Claude Desktop completely**

## Troubleshooting

View MCP logs:
```bash
# macOS
tail -f ~/Library/Logs/Claude/mcp*.log

# Linux
journalctl --user -u claude-desktop -f
```
