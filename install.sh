#!/usr/bin/env bash
# MCP 交互式安装向导
# 用法: bash install.sh
# 支持: macOS / Linux (Windows 用户请用 WSL 或直接编辑配置文件)

set -euo pipefail

# ── 颜色 ────────────────────────────────────────────────────────────────────
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
BLUE='\033[0;34m'; CYAN='\033[0;36m'; BOLD='\033[1m'; NC='\033[0m'

# ── 工具函数 ─────────────────────────────────────────────────────────────────
info()    { echo -e "${BLUE}ℹ ${NC}$*"; }
success() { echo -e "${GREEN}✓ ${NC}$*"; }
warn()    { echo -e "${YELLOW}⚠ ${NC}$*"; }
error()   { echo -e "${RED}✗ ${NC}$*" >&2; }
header()  { echo -e "\n${BOLD}${CYAN}$*${NC}\n"; }
ask()     { echo -en "${YELLOW}? ${NC}$* "; }

command_exists() { command -v "$1" &>/dev/null; }

# ── 检测 Claude Desktop 配置路径 ────────────────────────────────────────────
detect_config_path() {
  case "$(uname -s)" in
    Darwin)  echo "$HOME/Library/Application Support/Claude/claude_desktop_config.json" ;;
    Linux)   echo "$HOME/.config/Claude/claude_desktop_config.json" ;;
    MINGW*|CYGWIN*|MSYS*) echo "$APPDATA/Claude/claude_desktop_config.json" ;;
    *)       echo "$HOME/.config/Claude/claude_desktop_config.json" ;;
  esac
}

CONFIG_PATH="$(detect_config_path)"

# ── MCP 目录 ─────────────────────────────────────────────────────────────────
# 格式: "序号|分类|名称|描述|运行方式|命令|参数模板|需要的环境变量(key:提示文字,...)"
declare -a MCP_LIST=(
  "1|开发工具|filesystem|读写本地文件系统|npx|-y @modelcontextprotocol/server-filesystem {PATH}||"
  "2|开发工具|github|GitHub 仓库/PR/Issue 管理|npx|-y @modelcontextprotocol/server-github||GITHUB_PERSONAL_ACCESS_TOKEN:GitHub Personal Access Token (https://github.com/settings/tokens)"
  "3|开发工具|git|Git 仓库操作 (commit/diff/log)|uvx|mcp-server-git --repository {PATH}||"
  "4|开发工具|playwright|浏览器自动化与截图|npx|-y @playwright/mcp@latest||"
  "5|实用工具|fetch|抓取任意网页内容|uvx|mcp-server-fetch||"
  "6|实用工具|brave-search|Brave 网页搜索|npx|-y @modelcontextprotocol/server-brave-search||BRAVE_API_KEY:Brave Search API Key (https://brave.com/search/api/)"
  "7|效率工具|notion|Notion 页面与数据库|npx|-y @notionhq/notion-mcp-server||NOTION_API_TOKEN:Notion Integration Token (https://www.notion.so/my-integrations)"
  "8|效率工具|linear|Linear 项目管理|npx|-y linear-mcp-server||LINEAR_API_KEY:Linear API Key (https://linear.app/settings/api)"
  "9|数据库|sqlite|SQLite 本地数据库|uvx|mcp-server-sqlite --db-path {PATH}||"
  "10|数据库|postgres|PostgreSQL 数据库|npx|-y @modelcontextprotocol/server-postgres {DSN}||"
  "11|通信|slack|Slack 消息与频道|npx|-y @modelcontextprotocol/server-slack||SLACK_BOT_TOKEN:Slack Bot Token,SLACK_TEAM_ID:Slack Team ID"
  "12|通信|gmail|Gmail 邮件管理|uvx|mcp-server-gmail||"
  "13|AI|huggingface|Hugging Face 模型推理|npx|-y @evalstate/mcp-hfspace||HF_TOKEN:Hugging Face API Token (https://huggingface.co/settings/tokens)"
  "14|安全|1password|1Password 密钥读取|npx|-y @1password/mcp||OP_SERVICE_ACCOUNT_TOKEN:1Password Service Account Token"
)

# ── 打印 MCP 选择菜单 ─────────────────────────────────────────────────────────
print_menu() {
  header "═══ 可用 MCP 列表 ═══"
  local cur_cat=""
  for entry in "${MCP_LIST[@]}"; do
    IFS='|' read -r num cat name desc _ _ _ _ <<< "$entry"
    if [[ "$cat" != "$cur_cat" ]]; then
      echo -e "\n  ${BOLD}[ $cat ]${NC}"
      cur_cat="$cat"
    fi
    printf "  ${CYAN}%3s${NC}. %-20s %s\n" "$num" "$name" "$desc"
  done
  echo
}

# ── 收集用户选择 ─────────────────────────────────────────────────────────────
get_user_selections() {
  echo -e "${BOLD}输入序号选择要安装的 MCP（多个用空格隔开，输入 all 全部安装）${NC}"
  ask "你的选择:"
  read -r raw_input

  if [[ "$raw_input" == "all" || "$raw_input" == "ALL" ]]; then
    SELECTIONS=()
    for entry in "${MCP_LIST[@]}"; do
      IFS='|' read -r num _ <<< "$entry"
      SELECTIONS+=("$num")
    done
  else
    read -ra SELECTIONS <<< "$raw_input"
  fi
}

# ── 询问路径或 DSN ────────────────────────────────────────────────────────────
ask_path() {
  local name="$1" placeholder="$2" default="$3"
  ask "${name} 路径/地址 [默认: ${default}]:"
  read -r val
  echo "${val:-$default}"
}

# ── 构建单个 MCP 的 JSON 配置块 ──────────────────────────────────────────────
build_mcp_json() {
  local name="$1" runner="$2" args_template="$3" env_spec="$4"
  local resolved_args="$args_template"

  # 处理占位符
  if [[ "$args_template" == *"{PATH}"* ]]; then
    local default_path="$HOME"
    [[ "$name" == "sqlite" ]] && default_path="$HOME/data.sqlite"
    [[ "$name" == "git" ]]    && default_path="$HOME/projects"
    local path_val
    path_val="$(ask_path "$name" "{PATH}" "$default_path")"
    resolved_args="${args_template/\{PATH\}/$path_val}"
  fi
  if [[ "$args_template" == *"{DSN}"* ]]; then
    ask "PostgreSQL 连接字符串 [例: postgresql://user:pass@localhost/mydb]:"
    read -r dsn_val
    resolved_args="${args_template/\{DSN\}/$dsn_val}"
  fi

  # 构建 args 数组
  local args_json
  IFS=' ' read -ra arg_parts <<< "$resolved_args"
  args_json="$(printf '"%s",' "${arg_parts[@]}")"
  args_json="[${args_json%,}]"

  # 构建 env 对象
  local env_json="{}"
  if [[ -n "$env_spec" ]]; then
    local pairs=()
    IFS=',' read -ra env_items <<< "$env_spec"
    for item in "${env_items[@]}"; do
      IFS=':' read -r key prompt_text <<< "$item"
      # 检查环境变量是否已存在
      local existing="${!key:-}"
      if [[ -n "$existing" ]]; then
        info "检测到环境变量 $key 已设置，直接使用"
        pairs+=("\"$key\": \"$existing\"")
      else
        ask "$prompt_text:"
        read -rs secret_val
        echo
        pairs+=("\"$key\": \"$secret_val\"")
      fi
    done
    local joined
    joined="$(printf '%s, ' "${pairs[@]}")"
    env_json="{${joined%, }}"
  fi

  cat <<JSON
    "$name": {
      "command": "$runner",
      "args": $args_json,
      "env": $env_json
    }
JSON
}

# ── 写入配置文件 ──────────────────────────────────────────────────────────────
write_config() {
  local entries=("$@")

  # 若已有配置，备份
  if [[ -f "$CONFIG_PATH" ]]; then
    cp "$CONFIG_PATH" "${CONFIG_PATH}.bak.$(date +%Y%m%d%H%M%S)"
    warn "已将原配置备份"
  fi

  mkdir -p "$(dirname "$CONFIG_PATH")"

  # 读取已有 mcpServers（若有）
  local existing_servers="{}"
  if [[ -f "$CONFIG_PATH" ]] && command_exists jq; then
    existing_servers="$(jq '.mcpServers // {}' "$CONFIG_PATH" 2>/dev/null || echo '{}')"
  fi

  # 拼接新条目
  local new_block
  new_block="$(printf '%s\n' "${entries[@]}" | paste -sd ',' -)"

  # 写入
  if command_exists jq; then
    jq --argjson new "{$new_block}" \
      '.mcpServers = (.mcpServers // {}) + $new' \
      "${CONFIG_PATH}" 2>/dev/null > "${CONFIG_PATH}.tmp" \
      && mv "${CONFIG_PATH}.tmp" "${CONFIG_PATH}" \
      || write_fresh_config "${entries[@]}"
  else
    write_fresh_config "${entries[@]}"
  fi
}

write_fresh_config() {
  local entries=("$@")
  local joined
  joined="$(printf '%s,\n' "${entries[@]}")"
  joined="${joined%,*}"  # 去掉最后一个逗号
  cat > "$CONFIG_PATH" <<CONF
{
  "mcpServers": {
$joined
  }
}
CONF
}

# ── 检查依赖 ──────────────────────────────────────────────────────────────────
check_deps() {
  header "检查依赖"
  local need_node=false need_uv=false

  for entry in "${MCP_LIST[@]}"; do
    IFS='|' read -r num _ _ _ runner _ _ _ <<< "$entry"
    for sel in "${SELECTIONS[@]}"; do
      if [[ "$sel" == "$num" ]]; then
        [[ "$runner" == "npx" ]] && need_node=true
        [[ "$runner" == "uvx" ]] && need_uv=true
      fi
    done
  done

  if $need_node; then
    if command_exists node; then
      success "Node.js $(node -v) 已安装"
    else
      error "未检测到 Node.js，请先安装: https://nodejs.org"
      exit 1
    fi
  fi

  if $need_uv; then
    if command_exists uvx; then
      success "uv $(uvx --version 2>/dev/null || echo '') 已安装"
    else
      warn "未检测到 uv，正在安装..."
      curl -LsSf https://astral.sh/uv/install.sh | sh
      export PATH="$HOME/.cargo/bin:$PATH"
      success "uv 安装完成"
    fi
  fi
}

# ── 主流程 ────────────────────────────────────────────────────────────────────
main() {
  clear
  echo -e "${BOLD}${CYAN}"
  echo "  ╔═══════════════════════════════════╗"
  echo "  ║       Awesome MCPs 安装向导       ║"
  echo "  ╚═══════════════════════════════════╝"
  echo -e "${NC}"
  info "配置文件将写入: $CONFIG_PATH"

  print_menu
  get_user_selections

  if [[ ${#SELECTIONS[@]} -eq 0 ]]; then
    warn "未选择任何 MCP，退出"
    exit 0
  fi

  check_deps

  header "配置各 MCP 参数"

  declare -a json_entries=()
  for sel in "${SELECTIONS[@]}"; do
    for entry in "${MCP_LIST[@]}"; do
      IFS='|' read -r num cat name desc runner args_tpl _ env_spec <<< "$entry"
      if [[ "$sel" == "$num" ]]; then
        echo -e "\n${BOLD}▶ 配置: $name${NC} — $desc"
        block="$(build_mcp_json "$name" "$runner" "$args_tpl" "$env_spec")"
        json_entries+=("$block")
        success "$name 配置完成"
      fi
    done
  done

  header "写入配置文件"
  write_config "${json_entries[@]}"
  success "配置已写入: $CONFIG_PATH"

  echo
  echo -e "${BOLD}${GREEN}═══ 安装完成！═══${NC}"
  echo -e "请${BOLD}完全退出并重启 Claude Desktop${NC}以加载新的 MCP。"
  echo
  echo -e "如需查看 MCP 运行日志："
  case "$(uname -s)" in
    Darwin) echo "  tail -f ~/Library/Logs/Claude/mcp*.log" ;;
    Linux)  echo "  journalctl --user -u claude-desktop -f" ;;
  esac
  echo
}

main "$@"
