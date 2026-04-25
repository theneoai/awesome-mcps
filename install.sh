#!/usr/bin/env bash
# Awesome MCPs - Simple Installation Script
# Usage: bash install.sh [--all|--ai]
# For AI agents: bash install.sh --ai

set -e

CONFIG_PATH=""
PLATFORM=$(uname -s)

# Detect config path
detect_config_path() {
    case "$PLATFORM" in
        Darwin)  echo "$HOME/Library/Application Support/Claude/claude_desktop_config.json" ;;
        Linux)    echo "$HOME/.config/Claude/claude_desktop_config.json" ;;
        MINGW*|CYGWIN*|MSYS*) echo "$APPDATA/Claude/claude_desktop_config.json" ;;
        *)        echo "$HOME/.config/Claude/claude_desktop_config.json" ;;
    esac
}

CONFIG_PATH="$(detect_config_path)"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

info()    { echo -e "${BLUE}ℹ${NC} $*"; }
success() { echo -e "${GREEN}✓${NC} $*"; }
warn()    { echo -e "${YELLOW}⚠${NC} $*"; }
error()   { echo -e "${RED}✗${NC} $*" >&2; }

# Check dependencies
check_deps() {
    if ! command -v node &>/dev/null; then
        warn "Node.js not found. Some MCPs require npx."
    fi
    if ! command -v uvx &>/dev/null; then
        info "Installing uv for Python-based MCPs..."
        curl -LsSf https://astral.sh/uv/install.sh | sh 2>/dev/null || true
    fi
}

# Backup existing config
backup_config() {
    if [[ -f "$CONFIG_PATH" ]]; then
        cp "$CONFIG_PATH" "${CONFIG_PATH}.bak.$(date +%Y%m%d%H%M%S)"
        success "Backed up existing config"
    fi
}

# Read existing config or create new
read_or_create_config() {
    mkdir -p "$(dirname "$CONFIG_PATH")"
    if [[ -f "$CONFIG_PATH" ]] && command -v jq &>/dev/null; then
        EXISTING_SERVERS=$(jq -r '.mcpServers // {}' "$CONFIG_PATH" 2>/dev/null || echo '{}')
    else
        EXISTING_SERVERS='{}'
    fi
}

# Add MCP to config
add_mcp() {
    local name="$1"
    local command="$2"
    local args="$3"
    local env_json="${4:-{}}"

    info "Adding $name..."
}

# Install all MCPs (for AI agents)
install_all() {
    info "Installing all MCPs to $CONFIG_PATH"
    backup_config

    cat > "$CONFIG_PATH" << 'EOF'
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "YOUR_GITHUB_TOKEN"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users"],
      "env": {}
    },
    "gitlab": {
      "command": "npx",
      "args": ["-y", "gitlab-mcp"],
      "env": {
        "GITLAB_TOKEN": "YOUR_GITLAB_TOKEN"
      }
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "POSTGRES_DSN": "postgresql://user:password@localhost/database"
      }
    },
    "slack": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "YOUR_SLACK_BOT_TOKEN"
      }
    },
    "notion": {
      "command": "npx",
      "args": ["-y", "@notionhq/notion-mcp-server"],
      "env": {
        "NOTION_API_TOKEN": "YOUR_NOTION_TOKEN"
      }
    },
    "linear": {
      "command": "npx",
      "args": ["-y", "linear-mcp-server"],
      "env": {
        "LINEAR_API_KEY": "YOUR_LINEAR_API_KEY"
      }
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "YOUR_BRAVE_API_KEY"
      }
    },
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"],
      "env": {}
    },
    "aws-kb": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-aws-kb-retrieval"],
      "env": {
        "AWS_ACCESS_KEY_ID": "YOUR_AWS_KEY",
        "AWS_SECRET_ACCESS_KEY": "YOUR_AWS_SECRET"
      }
    },
    "sqlite": {
      "command": "uvx",
      "args": ["mcp-server-sqlite", "--db-path", "./data.db"],
      "env": {}
    },
    "gdrive": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-gdrive"],
      "env": {}
    },
    "sentry": {
      "command": "npx",
      "args": ["-y", "@sentry/mcp"],
      "env": {
        "SENTRY_AUTH_TOKEN": "YOUR_SENTRY_AUTH_TOKEN"
      }
    }
  }
}
EOF

    success "Installed all MCPs!"
    echo ""
    echo "⚠️  IMPORTANT: Edit $CONFIG_PATH and replace YOUR_* tokens with real values"
    echo ""
}

# Interactive mode
interactive() {
    echo ""
    echo -e "${BLUE}╔══════════════════════════════════════════════╗${NC}"
    echo -e "${BLUE}║        Awesome MCPs Installation          ║${NC}"
    echo -e "${BLUE}╚══════════════════════════════════════════════╝${NC}"
    echo ""
    info "Config path: $CONFIG_PATH"
    echo ""

    echo "Options:"
    echo "  1) Install all MCPs (for AI agents)"
    echo "  2) Install specific MCPs"
    echo "  3) View documentation"
    echo "  4) Exit"
    echo ""

    read -p "Select option (1-4): " choice

    case $choice in
        1) install_all ;;
        2) install_specific ;;
        3) echo "Open https://github.com/theneoai/awesome-mcps/blob/main/INSTALL.md" ;;
        4) exit 0 ;;
        *) error "Invalid option" ;;
    esac
}

install_specific() {
    echo "Select MCPs to install (space-separated numbers):"
    echo "  1) GitHub"
    echo "  2) Filesystem"
    echo "  3) PostgreSQL"
    echo "  4) Slack"
    echo "  5) Notion"
    echo "  6) Linear"
    echo "  7) Brave Search"
    echo "  8) Memory"
    echo "  9) Google Drive"
    echo " 10) AWS Knowledge Base"
    echo " 11) SQLite"
    echo " 12) All above"
    echo ""

    read -p "Your selection: " selection

    backup_config

    # Create config with selected MCPs
    echo '{ "mcpServers": {' > "$CONFIG_PATH"

    if [[ "$selection" =~ "1" ]] || [[ "$selection" == "12" ]]; then
        echo '    "github": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-github"], "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "YOUR_TOKEN" } },' >> "$CONFIG_PATH"
    fi
    if [[ "$selection" =~ "2" ]] || [[ "$selection" == "12" ]]; then
        echo '    "filesystem": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users"], "env": {} },' >> "$CONFIG_PATH"
    fi
    if [[ "$selection" =~ "3" ]] || [[ "$selection" == "12" ]]; then
        echo '    "postgres": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-postgres"], "env": { "POSTGRES_DSN": "postgresql://localhost/db" } },' >> "$CONFIG_PATH"
    fi
    if [[ "$selection" =~ "4" ]] || [[ "$selection" == "12" ]]; then
        echo '    "slack": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-slack"], "env": { "SLACK_BOT_TOKEN": "YOUR_TOKEN" } },' >> "$CONFIG_PATH"
    fi
    if [[ "$selection" =~ "5" ]] || [[ "$selection" == "12" ]]; then
        echo '    "notion": { "command": "npx", "args": ["-y", "@notionhq/notion-mcp-server"], "env": { "NOTION_API_TOKEN": "YOUR_TOKEN" } },' >> "$CONFIG_PATH"
    fi
    if [[ "$selection" =~ "6" ]] || [[ "$selection" == "12" ]]; then
        echo '    "linear": { "command": "npx", "args": ["-y", "linear-mcp-server"], "env": { "LINEAR_API_KEY": "YOUR_KEY" } },' >> "$CONFIG_PATH"
    fi
    if [[ "$selection" =~ "7" ]] || [[ "$selection" == "12" ]]; then
        echo '    "brave-search": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-brave-search"], "env": { "BRAVE_API_KEY": "YOUR_KEY" } },' >> "$CONFIG_PATH"
    fi
    if [[ "$selection" =~ "8" ]] || [[ "$selection" == "12" ]]; then
        echo '    "memory": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-memory"], "env": {} },' >> "$CONFIG_PATH"
    fi
    if [[ "$selection" =~ "9" ]] || [[ "$selection" == "12" ]]; then
        echo '    "gdrive": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-gdrive"], "env": {} },' >> "$CONFIG_PATH"
    fi
    if [[ "$selection" =~ "10" ]] || [[ "$selection" == "12" ]]; then
        echo '    "aws-kb": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-aws-kb-retrieval"], "env": { "AWS_ACCESS_KEY_ID": "YOUR_KEY", "AWS_SECRET_ACCESS_KEY": "YOUR_SECRET" } },' >> "$CONFIG_PATH"
    fi
    if [[ "$selection" =~ "11" ]] || [[ "$selection" == "12" ]]; then
        echo '    "sqlite": { "command": "uvx", "args": ["mcp-server-sqlite", "--db-path", "./data.db"], "env": {} },' >> "$CONFIG_PATH"
    fi

    # Remove trailing comma and close
    sed -i.bak '$ s/,$//' "$CONFIG_PATH"
    rm -f "$CONFIG_PATH.bak"
    echo '  }' >> "$CONFIG_PATH"
    echo '}' >> "$CONFIG_PATH"

    success "Installed selected MCPs to $CONFIG_PATH"
}

# Main
main() {
    check_deps

    if [[ "${1:-}" == "--ai" ]] || [[ "${1:-}" == "--all" ]]; then
        install_all
    else
        interactive
    fi
}

main "$@"
