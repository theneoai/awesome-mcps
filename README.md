# Universal Skill Manager (USM)

Manage agent skills across multiple AI coding tools with a single, unified interface.

## Features

- **Universal**: Install once, use everywhere (OpenCode, Claude Code, Gemini CLI)
- **GitHub Integration**: Install skills directly from GitHub repositories
- **Auto-Sync**: Automatically sync skills to all your agent tools
- **Standards Compliant**: Follows [agentskills.io](https://agentskills.io) specification

## Installation

```bash
npm install -g @universal-skills/usm
```

## Quick Start

```bash
# Search for skills
usm search brainstorming

# Install from GitHub
usm install github.com/anthropics/skills

# List installed skills
usm list

# Sync to all tools
usm sync

# Check status
usm status
```

## Commands

- `usm install <source>` - Install a skill from registry, GitHub, or local path
- `usm uninstall <skill>` - Uninstall a skill
- `usm update [skill]` - Update a skill (or all with --all)
- `usm search <keyword>` - Search for skills
- `usm list` - List installed skills
- `usm sync [skill]` - Sync skills to agent tools
- `usm status` - Show sync status
- `usm config` - Manage configuration

## Supported Tools

- OpenCode (via symlinks)
- Claude Code (via config)
- Gemini CLI (via config)

## Configuration

USM stores configuration in `~/.skills/config.json`:

```json
{
  "registry": {
    "official": "https://github.com/universal-skills/registry"
  },
  "sync": {
    "autoSync": true,
    "tools": ["opencode", "claude-code", "gemini-cli"]
  }
}
```

## License

MIT