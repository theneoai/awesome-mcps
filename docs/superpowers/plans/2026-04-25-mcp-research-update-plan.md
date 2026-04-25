# MCP Research and Documentation Update Plan

> **For agented execution:** Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task.

**Goal:** Research latest MCP servers across all 10 categories, update documentation and configs

**Architecture:** Update existing Jekyll-based GitHub Pages site with new MCP listings

**Tech Stack:** Jekyll, Markdown, JSON

---

## Task 1: Research Development Tools MCPs

**Files:**
- Modify: `categories/development/README.md:1-78`
- Create: `configs/jetbrains.json` (if JetBrains MCP found)

- [ ] **Step 1: Research GitHub Trending for dev-related MCPs**

Search for MCP servers in: github.com, mcpservers.org, Glama.ai

Expected new MCPs to consider:
- JetBrains MCP (official)
- VS Code MCP
- Azure DevOps MCP
- GitHub CLI MCP
- Terraform MCP
- Ansible MCP

- [ ] **Step 2: Update categories/development/README.md**

Add any newly discovered development MCPs to the appropriate subsections (Version Control, CI/CD, Containers, IDEs, etc.)

Format:
```markdown
| [Name](URL) | Vendor | Description | Language | Stars |
```

- [ ] **Step 3: Create config file for new MCPs requiring API keys**

Add JSON config to `configs/` directory if applicable

- [ ] **Step 4: Commit**

```bash
git add categories/development/ configs/
git commit -m "docs: update development MCPs with latest additions"
```

---

## Task 2: Research Data & Database MCPs

**Files:**
- Modify: `categories/data/README.md:1-83`

- [ ] **Step 1: Research database-related MCPs**

New MCPs to consider:
- Databricks MCP
- Elasticsearch MCP
- Supabase MCP (if available)
- PlanetScale/MySQL Flex MCP
- ClickHouse MCP
- Apache Kafka MCP

- [ ] **Step 2: Update categories/data/README.md**

Add new MCPs to appropriate subsections (Relational, NoSQL, Vector, Data Warehouse)

- [ ] **Step 3: Commit**

```bash
git add categories/data/README.md
git commit -m "docs: add new database MCPs"
```

---

## Task 3: Research Communication MCPs

**Files:**
- Modify: `categories/communication/README.md`

- [ ] **Step 1: Research communication MCPs**

New MCPs to consider:
- Zoom MCP
- Mattermost MCP
- Signal MCP
- SendGrid MCP
- Mailgun MCP

- [ ] **Step 2: Update categories/communication/README.md**

- [ ] **Step 3: Commit**

---

## Task 4: Research Productivity MCPs

**Files:**
- Modify: `categories/productivity/README.md`

- [ ] **Step 1: Research productivity MCPs**

New MCPs to consider:
- Monday.com MCP
- ClickUp MCP
- Shortcut MCP
- Basecamp MCP
- Airtable MCP
- Roam Research MCP
- Apple Reminders MCP

- [ ] **Step 2: Update categories/productivity/README.md**

- [ ] **Step 3: Commit**

---

## Task 5: Research Cloud & Infrastructure MCPs

**Files:**
- Modify: `categories/cloud/README.md`
- Create: `configs/azure.json` (if not exists)

- [ ] **Step 1: Research cloud MCPs**

New MCPs to consider:
- DigitalOcean MCP
- Oracle Cloud MCP
- Alibaba Cloud MCP
- Vercel MCP (if separate from utilities)
- Netlify MCP
- Cloudflare Workers MCP (extend existing)

- [ ] **Step 2: Update categories/cloud/README.md**

- [ ] **Step 3: Commit**

---

## Task 6: Research AI & ML MCPs

**Files:**
- Modify: `categories/ai/README.md`
- Create: `configs/openai.json` (if new MCP)

- [ ] **Step 1: Research AI/ML MCPs**

New MCPs to consider:
- Groq MCP
- Mistral MCP
- Cohere MCP
- Anthropic Claude API MCP
- Google Gemini MCP
- AWS Bedrock MCP (if separate from AWS)

- [ ] **Step 2: Update categories/ai/README.md**

- [ ] **Step 3: Commit**

---

## Task 7: Research Enterprise MCPs

**Files:**
- Modify: `categories/enterprise/README.md`

- [ ] **Step 1: Research enterprise MCPs**

New MCPs to consider:
- SAP MCP
- Oracle ERP MCP
- Microsoft Dynamics MCP
- Workday MCP
- ServiceNow MCP
- Zendesk MCP (if updated)

- [ ] **Step 2: Update categories/enterprise/README.md**

- [ ] **Step 3: Commit**

---

## Task 8: Research Security MCPs

**Files:**
- Modify: `categories/security/README.md`

- [ ] **Step 1: Research security MCPs**

New MCPs to consider:
- GitGuardian MCP
- Dependabot MCP
- SonarQube MCP
- OWASP MCP
- CrowdStrike MCP

- [ ] **Step 2: Update categories/security/README.md**

- [ ] **Step 3: Commit**

---

## Task 9: Research Utilities MCPs

**Files:**
- Modify: `categories/utilities/README.md`

- [ ] **Step 1: Research utilities MCPs**

New MCPs to consider:
- Raycast MCP
- Alfred MCP
- Zapier MCP
- IFTTT MCP
- Browser Tools MCP

- [ ] **Step 2: Update categories/utilities/README.md**

- [ ] **Step 3: Commit**

---

## Task 10: Research Frameworks & SDKs

**Files:**
- Modify: `categories/frameworks/README.md`

- [ ] **Step 1: Research framework MCPs**

New MCPs to consider:
- Mastra MCP (if updated)
- Genkit MCP
- LangGraph MCP
- AutoGen Studio MCP

- [ ] **Step 2: Update categories/frameworks/README.md**

- [ ] **Step 3: Commit**

---

## Task 11: Update Main Documentation

**Files:**
- Modify: `README.md`
- Modify: `README.en.md`
- Modify: `CONTRIBUTING.md` (if needed)

- [ ] **Step 1: Update README.md statistics**

Update the 10,000+ servers and 97M+ downloads statistics if changed

- [ ] **Step 2: Add new MCPs to main README**

Add any significantly important new MCPs to the category tables in main README

- [ ] **Step 3: Update README.en.md**

Apply same changes to English version

- [ ] **Step 4: Update configs/README.md index**

Add any new config files to the index

- [ ] **Step 5: Commit**

```bash
git add README.md README.en.md CONTRIBUTING.md configs/README.md
git commit -m "docs: update main README with latest MCP additions"
```

---

## Task 12: Review GitHub Actions

**Files:**
- Modify: `.github/workflows/pages.yml`

- [ ] **Step 1: Verify GitHub Actions configuration**

Check if workflow is optimal and update if needed

- [ ] **Step 2: Commit if changes made**

---

## Task 13: Final Verification

- [ ] **Step 1: Run Jekyll build locally**

```bash
bundle exec jekyll build
```

Expected: Clean build with no errors

- [ ] **Step 2: Verify all links work**

Check that all GitHub links are valid

- [ ] **Step 3: Final commit if any fixes needed**

---

## Self-Review Checklist

- [ ] All 10 category README files updated
- [ ] All new MCPs have proper Vendor (官方/社区) designation
- [ ] All new MCPs have GitHub stars badge where applicable
- [ ] configs/ directory updated with new JSON files
- [ ] Main README.md and README.en.md synchronized
- [ ] CONTRIBUTING.md still accurate
- [ ] GitHub Actions pages.yml functional
- [ ] Jekyll build passes
