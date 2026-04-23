# MCP 部署指南

> 从零配置到生产级部署，按难度从低到高排列。推荐新手直接从 [方式一](#方式一smithery一键安装) 开始。

## 按需选择安装

### 交互式脚本（自动写入配置）

```bash
# 克隆仓库后一行启动向导
bash install.sh
```

向导会展示所有可用 MCP，输入序号选择（支持多选或全选），自动询问所需密钥并写入配置文件。

```
  ╔═══════════════════════════════════╗
  ║       Awesome MCPs 安装向导       ║
  ╚═══════════════════════════════════╝

  [ 开发工具 ]
    1. filesystem         读写本地文件系统
    2. github             GitHub 仓库/PR/Issue 管理
    3. git                Git 仓库操作
    4. playwright         浏览器自动化与截图

  [ 实用工具 ]
    5. fetch              抓取任意网页内容
    6. brave-search       Brave 网页搜索
  ...

? 你的选择: 1 2 5        ← 只装这三个
```

### 手动复制配置片段

`configs/` 目录下每个 JSON 文件对应一个 MCP。按需复制到你的配置文件中：

```bash
# 查看所有可用片段
ls configs/
# filesystem.json  github.json  playwright.json  fetch.json ...
```

将选中的片段内容合并到 `claude_desktop_config.json` 的 `mcpServers` 对象中，替换密钥占位符即可。详见 [configs/README.md](../configs/README.md)。

---

## 方式一：Smithery 一键安装（最简单 ⭐）

[Smithery](https://smithery.ai) 是 MCP 的图形化安装平台，无需命令行，点击即用。

**步骤：**

1. 打开 [smithery.ai](https://smithery.ai)，搜索你想要的 MCP
2. 点击 **Install** 按钮，选择你的客户端（Claude Desktop / VS Code 等）
3. 按提示填入 API Key 等参数
4. 重启客户端，完成

**适合：** 新手、不想碰命令行的用户  
**限制：** 仅支持 Smithery 收录的 MCP

---

## 方式二：npx / uvx 零安装运行（推荐 ⭐⭐）

无需全局安装，直接在 Claude Desktop 配置文件中声明即可。客户端启动时自动下载运行。

### TypeScript 系 MCP（npx）

编辑 Claude Desktop 配置文件：

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **Linux**: `~/.config/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token_here"
      }
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "your_key_here"
      }
    }
  }
}
```

### Python 系 MCP（uvx）

需先安装 [uv](https://docs.astral.sh/uv/getting-started/installation/)（一行命令）：

```bash
# macOS / Linux
curl -LsSf https://astral.sh/uv/install.sh | sh

# Windows
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"
```

配置示例：

```json
{
  "mcpServers": {
    "sqlite": {
      "command": "uvx",
      "args": ["mcp-server-sqlite", "--db-path", "/path/to/mydb.sqlite"]
    },
    "fetch": {
      "command": "uvx",
      "args": ["mcp-server-fetch"]
    }
  }
}
```

**适合：** 大多数用户，无需手动管理依赖  
**优点：** 自动版本管理，更新时只需改版本号

---

## 方式三：Docker 容器化运行（推荐生产 ⭐⭐⭐）

适合需要隔离环境、统一管理多个 MCP、或在服务器上部署的场景。

### 单个 MCP（docker run）

```bash
docker run -d \
  --name mcp-github \
  -e GITHUB_PERSONAL_ACCESS_TOKEN=your_token \
  ghcr.io/github/github-mcp-server
```

Claude Desktop 对接本地 Docker MCP：

```json
{
  "mcpServers": {
    "github": {
      "command": "docker",
      "args": [
        "run", "--rm", "-i",
        "-e", "GITHUB_PERSONAL_ACCESS_TOKEN",
        "ghcr.io/github/github-mcp-server"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token_here"
      }
    }
  }
}
```

### 多个 MCP（Docker Compose）

新建 `docker-compose.yml`：

```yaml
version: "3.9"

services:
  mcp-github:
    image: ghcr.io/github/github-mcp-server
    environment:
      GITHUB_PERSONAL_ACCESS_TOKEN: ${GITHUB_TOKEN}
    restart: unless-stopped

  mcp-fetch:
    image: mcp/fetch                  # 社区镜像
    restart: unless-stopped

  mcp-qdrant:
    image: qdrant/mcp-server-qdrant
    environment:
      QDRANT_URL: http://qdrant:6333
    restart: unless-stopped

  qdrant:
    image: qdrant/qdrant
    volumes:
      - qdrant_data:/qdrant/storage
    restart: unless-stopped

volumes:
  qdrant_data:
```

新建 `.env`（勿提交到 git）：

```
GITHUB_TOKEN=ghp_xxxxxxxxxxxx
```

启动：

```bash
docker compose up -d
```

**适合：** 团队共享、服务器部署、需要持久化数据  
**优点：** 环境隔离，重启自动恢复，统一日志管理

---

## 方式四：MCP Remote（远程托管）⭐⭐⭐

将 MCP 部署为 HTTP 服务，多端共享，无需每台机器单独配置。

### 使用 mcp-proxy 暴露为 HTTP

```bash
npx -y mcp-proxy --port 8080 -- npx -y @modelcontextprotocol/server-github
```

客户端连接远程 MCP：

```json
{
  "mcpServers": {
    "github-remote": {
      "url": "http://your-server:8080/sse",
      "headers": {
        "Authorization": "Bearer your_internal_token"
      }
    }
  }
}
```

### 托管平台推荐

| 平台 | 特点 | 定价 |
|------|------|------|
| [mcp.run](https://mcp.run) | 无服务器托管，按调用计费 | 免费额度 |
| [Smithery Cloud](https://smithery.ai) | 一键部署，GUI 管理 | 免费额度 |
| Cloudflare Workers | 边缘计算，延迟低，全球节点 | 免费额度 |
| Railway / Render | 普通 Node/Python 服务部署 | 免费额度 |

**适合：** 团队协作、多设备同步、不想在每台电脑上重复配置

---

## 快速配置模板

常用 MCP 的开箱即用配置，复制粘贴后填入自己的密钥即可。

```json
{
  "mcpServers": {

    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/your/allowed/path"]
    },

    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxx" }
    },

    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": { "BRAVE_API_KEY": "BSA_xxx" }
    },

    "notion": {
      "command": "npx",
      "args": ["-y", "@notionhq/notion-mcp-server"],
      "env": { "OPENAPI_MCP_HEADERS": "{\"Authorization\": \"Bearer ntn_xxx\"}" }
    },

    "sqlite": {
      "command": "uvx",
      "args": ["mcp-server-sqlite", "--db-path", "~/mydata.db"]
    },

    "fetch": {
      "command": "uvx",
      "args": ["mcp-server-fetch"]
    },

    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest"]
    }
  }
}
```

---

## 常见问题

**Q: 配置后 MCP 不出现怎么办？**  
A: 完全退出并重新打开 Claude Desktop（不是最小化）。确认 JSON 格式正确（可用 [jsonlint.com](https://jsonlint.com) 验证）。

**Q: npx 每次都重新下载吗？**  
A: 不会，npm 有本地缓存。使用 `-y` 参数跳过交互确认即可。

**Q: 如何查看 MCP 是否正常运行？**  
A: Claude Desktop → 设置 → 开发者 → 查看 MCP 连接状态。或查看日志：
```bash
# macOS
tail -f ~/Library/Logs/Claude/mcp*.log
```

**Q: 多个客户端（Claude Desktop + Cursor）想共用同一套 MCP？**  
A: 使用方式四（MCP Remote），部署一次，所有客户端指向同一 URL。

**Q: 如何安全存储 API Key，不写死在配置文件里？**  
A: 使用环境变量文件或系统密钥链：
```json
{
  "env": { "GITHUB_TOKEN": "${GITHUB_TOKEN}" }
}
```
然后在 shell 配置（`~/.zshrc`）中 `export GITHUB_TOKEN=xxx`。

---

## 推荐组合（新手入门套装）

以下 3 个 MCP 零成本、开箱即用，适合初次体验：

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "~/Desktop"]
    },
    "fetch": {
      "command": "uvx",
      "args": ["mcp-server-fetch"]
    },
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest"]
    }
  }
}
```

- **filesystem**: 让 Claude 读写你的桌面文件
- **fetch**: 让 Claude 访问任意网页
- **playwright**: 让 Claude 控制浏览器
