let currentLang = localStorage.getItem('mcp-lang') || 'en';
let selectedMcps = new Set();
let allMcps = [];

const i18n = {
    zh: {
        heroTitle: 'Awesome MCPs',
        heroSubtitle: '115+ MCP 服务器，一键安装。',
        browseBtn: '浏览 MCPs',
        starBtn: 'GitHub 星标',
        statMCPs: 'MCPs',
        statCategories: '分类',
        statConfigs: '配置',
        quickInstall: '\u26A1 快速安装 - 所有 MCP',
        searchPlaceholder: '搜索 MCPs...',
        categoryAll: '全部分类',
        catDevelopment: '开发工具',
        catData: '数据',
        catCommunication: '通信',
        catProductivity: '效率',
        catCloud: '云服务',
        catAI: 'AI',
        catEnterprise: '企业',
        catSecurity: '安全',
        catUtilities: '工具',
        catFrameworks: '框架',
        vendorAll: '全部厂商',
        vendorOfficial: '官方',
        vendorCommunity: '社区',
        selectedLabel: '已选择',
        selectedSuffix: '个 MCP 已选择',
        clearBtn: '清除',
        downloadConfigs: '下载配置',
        generateCmd: '生成安装命令',
        copyText: '复制',
        copyBtn: '复制到剪贴板',
        closeBtn: '关闭',
        copied: '已复制',
        copyFailed: '复制失败',
        viewOnGithub: '在 GitHub 查看',
        resultsShowing: '显示',
        resultsTotal: '共',
        resultsMCPs: '个 MCP',
        resultsLoading: '加载中...',
        resultsFound: '找到',
        emptyTitle: '未找到 MCP',
        emptyDesc: '尝试调整搜索条件或筛选器',
        clearFilters: '清除筛选',
        emptyLoading: '加载中',
        emptyFetching: '正在获取 MCP 列表...',
        configRequires: '此 MCP 需要 API 密钥:',
        apiKeyPlaceholder: 'YOUR_API_KEY',
        donateTitle: '\u2764 支持我们',
        donateDesc: '如果这个项目对您有帮助，请考虑支持我们！',
        wechatPay: '微信支付',
        alipay: '支付宝',
        donateThanks: '感谢您的支持！',
        footerDate: '2026 年 4 月'
    },
    en: {
        heroTitle: 'Awesome MCPs',
        heroSubtitle: '115+ MCP servers. One click to install.',
        browseBtn: 'Browse MCPs',
        starBtn: 'Star on GitHub',
        statMCPs: 'MCPs',
        statCategories: 'Categories',
        statConfigs: 'Configs',
        quickInstall: '\u26A1 Quick Install - All MCPs',
        searchPlaceholder: 'Search MCPs...',
        categoryAll: 'All Categories',
        catDevelopment: 'Development',
        catData: 'Data',
        catCommunication: 'Communication',
        catProductivity: 'Productivity',
        catCloud: 'Cloud',
        catAI: 'AI',
        catEnterprise: 'Enterprise',
        catSecurity: 'Security',
        catUtilities: 'Utilities',
        catFrameworks: 'Frameworks',
        vendorAll: 'All Vendors',
        vendorOfficial: 'Official',
        vendorCommunity: 'Community',
        selectedLabel: 'Selected',
        selectedSuffix: 'MCPs selected',
        clearBtn: 'Clear',
        downloadConfigs: 'Download Configs',
        generateCmd: 'Generate Install',
        copyText: 'Copy',
        copyBtn: 'Copy to Clipboard',
        closeBtn: 'Close',
        copied: 'Copied',
        copyFailed: 'Copy failed',
        viewOnGithub: 'View on GitHub',
        resultsShowing: 'Showing',
        resultsTotal: 'of',
        resultsMCPs: 'MCPs',
        resultsLoading: 'Loading MCPs...',
        resultsFound: 'Found',
        emptyTitle: 'No MCPs found',
        emptyDesc: 'Try adjusting your search or filters',
        clearFilters: 'Clear filters',
        emptyLoading: 'Loading',
        emptyFetching: 'Fetching MCPs from the library...',
        configRequires: 'This MCP requires an API key:',
        apiKeyPlaceholder: 'YOUR_API_KEY',
        donateTitle: '\u2764 Support Us',
        donateDesc: 'If this project helps you, consider supporting us!',
        wechatPay: 'WeChat Pay',
        alipay: 'Alipay',
        donateThanks: 'Thank you for your support!',
        footerDate: 'April 2026'
    }
};

function t(key) {
    return i18n[currentLang][key] || key;
}

function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('mcp-lang', lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (i18n[lang][key]) {
            if (el.tagName === 'INPUT') {
                el.placeholder = i18n[lang][key];
            } else {
                el.innerHTML = i18n[lang][key];
            }
        }
    });

    renderMcps();
    updateResultsInfo();
}

function copyText(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        btn.classList.add('copied');
        const original = btn.textContent;
        btn.textContent = t('copied');
        setTimeout(() => {
            btn.classList.remove('copied');
            btn.textContent = original;
        }, 2000);
    }).catch(() => {
        showToast(t('copyFailed'), 'error');
    });
}

function copyInstallCommand(btn) {
    const text = `git clone https://github.com/theneoai/awesome-mcps.git\ncd awesome-mcps\nbash install.sh --all`;
    copyText(text, btn);
}

function copyAiInstallCommand(btn) {
    const text = `read https://raw.githubusercontent.com/theneoai/awesome-mcps/main/configs/[mcp-name].json and install`;
    copyText(text, btn);
}

function switchQuickInstallTab(tab, btn) {
    document.querySelector('.quick-install-tabs .tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('userInstallSection').style.display = tab === 'user' ? 'block' : 'none';
    document.getElementById('aiInstallSection').style.display = tab === 'ai' ? 'block' : 'none';
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast ' + type + ' show';
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function renderMcps() {
    const grid = document.getElementById('mcpGrid');
    const search = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categorySelect').value;
    const vendor = document.getElementById('vendorSelect').value;

    const filtered = allMcps.filter(mcp => {
        const matchesSearch = !search ||
            mcp.name.toLowerCase().includes(search) ||
            (mcp.name_zh && mcp.name_zh.includes(search)) ||
            mcp.description.toLowerCase().includes(search) ||
            (mcp.description_zh && mcp.description_zh.includes(search)) ||
            (mcp.tags && mcp.tags.some(tag => tag.toLowerCase().includes(search)));

        const matchesCategory = category === 'all' || mcp.category === category;
        const matchesVendor = vendor === 'all' || mcp.vendor === vendor;

        return matchesSearch && matchesCategory && matchesVendor;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">&#128269;</div>
                <div class="empty-title">${t('emptyTitle')}</div>
                <div class="empty-desc">${t('emptyDesc')}</div>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(mcp => {
        const name = currentLang === 'zh' && mcp.name_zh ? mcp.name_zh : mcp.name;
        const description = currentLang === 'zh' && mcp.description_zh ? mcp.description_zh : mcp.description;
        const isSelected = selectedMcps.has(mcp.name);

        return `
            <div class="mcp-card ${isSelected ? 'selected' : ''}" data-name="${mcp.name}" onclick="toggleMcpSelection('${mcp.name}')">
                <span class="vendor-tag ${mcp.vendor}">${mcp.vendor === 'official' ? (currentLang === 'zh' ? '官方' : 'Official') : (currentLang === 'zh' ? '社区' : 'Community')}</span>
                <div class="mcp-header">
                    <div class="mcp-icon">${getCategoryEmoji(mcp.category)}</div>
                    <div class="mcp-title">
                        <div class="mcp-name">${name}</div>
                        <div class="mcp-subtitle">${getCategoryName(mcp.category)}</div>
                    </div>
                </div>
                <div class="mcp-description">${description}</div>
                <div class="mcp-meta">
                    ${mcp.language ? `<span class="language-badge">${mcp.language}</span>` : ''}
                    ${mcp.stars ? `<span class="stars-badge">\u2605 ${formatStars(mcp.stars)}</span>` : ''}
                    ${mcp.config_file ? `<span>\u270F ${currentLang === 'zh' ? '可配置' : 'Configurable'}</span>` : ''}
                </div>
                <div class="mcp-check">\u2713</div>
            </div>
        `;
    }).join('');
}

function getCategoryEmoji(category) {
    const emojis = {
        development: '\uD83D\uDD27',
        data: '\uD83D\uDCCA',
        communication: '\uD83D\uDCE2',
        productivity: '\u2705',
        cloud: '\u2601\uFE0F',
        ai: '\uD83E\uDD16',
        enterprise: '\uD83C\uDFE6',
        security: '\uD83D\uDD12',
        utilities: '\uD83D\uDEE0\uFE0F',
        frameworks: '\uD83D\uDCDA'
    };
    return emojis[category] || '\uD83D\uDCCB';
}

function getCategoryName(category) {
    const names = {
        development: currentLang === 'zh' ? '开发工具' : 'Development',
        data: currentLang === 'zh' ? '数据' : 'Data',
        communication: currentLang === 'zh' ? '通信' : 'Communication',
        productivity: currentLang === 'zh' ? '效率' : 'Productivity',
        cloud: currentLang === 'zh' ? '云服务' : 'Cloud',
        ai: currentLang === 'zh' ? 'AI' : 'AI',
        enterprise: currentLang === 'zh' ? '企业' : 'Enterprise',
        security: currentLang === 'zh' ? '安全' : 'Security',
        utilities: currentLang === 'zh' ? '工具' : 'Utilities',
        frameworks: currentLang === 'zh' ? '框架' : 'Frameworks'
    };
    return names[category] || category;
}

function formatStars(stars) {
    if (stars >= 1000) {
        return (stars / 1000).toFixed(1) + 'k';
    }
    return stars;
}

function toggleMcpSelection(name) {
    if (selectedMcps.has(name)) {
        selectedMcps.delete(name);
    } else {
        selectedMcps.add(name);
    }
    renderMcps();
    updateBatchBar();
}

function updateBatchBar() {
    const batchBar = document.getElementById('batchBar');
    const batchCount = document.getElementById('batchCount');
    const selectedBadge = document.getElementById('selectedBadge');
    const selectedCount = document.getElementById('selectedCount');

    if (selectedMcps.size > 0) {
        batchBar.classList.add('active');
        batchCount.textContent = selectedMcps.size;
        selectedBadge.style.display = 'inline-flex';
        selectedCount.textContent = selectedMcps.size;
    } else {
        batchBar.classList.remove('active');
        selectedBadge.style.display = 'none';
    }
}

function clearSelection() {
    selectedMcps.clear();
    renderMcps();
    updateBatchBar();
}

function updateResultsInfo() {
    const search = document.getElementById('searchInput').value;
    const category = document.getElementById('categorySelect').value;
    const vendor = document.getElementById('vendorSelect').value;
    const total = allMcps.length;

    const filtered = allMcps.filter(mcp => {
        const matchesSearch = !search ||
            mcp.name.toLowerCase().includes(search.toLowerCase()) ||
            (mcp.name_zh && mcp.name_zh.includes(search)) ||
            mcp.description.toLowerCase().includes(search.toLowerCase()) ||
            (mcp.description_zh && mcp.description_zh.includes(search));

        const matchesCategory = category === 'all' || mcp.category === category;
        const matchesVendor = vendor === 'all' || mcp.vendor === vendor;

        return matchesSearch && matchesCategory && matchesVendor;
    });

    document.getElementById('resultsInfo').textContent =
        `${t('resultsShowing')} ${filtered.length} ${t('resultsTotal')} ${total} ${t('resultsMCPs')}`;
}

function downloadSelectedConfigs() {
    if (selectedMcps.size === 0) return;

    const selectedData = allMcps.filter(mcp => selectedMcps.has(mcp.name));
    const configs = selectedData.map(mcp => {
        return {
            name: mcp.name,
            config: mcp.config || getDefaultConfig(mcp)
        };
    });

    const content = configs.map(c => {
        const name = c.name.toLowerCase().replace(/\s+/g, '-');
        return `// ${c.name}\n${JSON.stringify(c.config, null, 2)}`;
    }).join('\n\n');

    const blob = new Blob([content], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mcp-configs.json';
    a.click();
    URL.revokeObjectURL(url);

    showToast(`${selectedMcps.size} ${currentLang === 'zh' ? '个配置已下载' : 'configs downloaded'}`, 'success');
}

function getDefaultConfig(mcp) {
    if (!mcp.config_file) return {};

    const name = mcp.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const command = getMcpCommand(mcp);

    return {
        [name]: {
            command: command.split(' ')[0],
            args: command.split(' ').slice(1),
            env: mcp.api_key ? { [getApiKeyName(mcp)]: mcp.api_key } : {}
        }
    };
}

function getMcpCommand(mcp) {
    const commands = {
        'github': 'npx -y @modelcontextprotocol/server-github',
        'filesystem': 'npx -y @modelcontextprotocol/server-filesystem',
        'postgres': 'npx -y @modelcontextprotocol/server-postgres',
        'slack': 'npx -y @modelcontextprotocol/server-slack',
        'brave-search': 'npx -y @modelcontextprotocol/server-brave-search',
        'sqlite': 'npx -y @modelcontextprotocol/server-sqlite',
        'git': 'npx -y @modelcontextprotocol/server-git',
        'google-drive': 'npx -y @modelcontextprotocol/server-gdrive',
        'memory': 'npx -y @modelcontextprotocol/server-memory'
    };

    const key = Object.keys(commands).find(k => mcp.name.toLowerCase().includes(k));
    return commands[key] || 'npx -y mcp-server-unknown';
}

function getApiKeyName(mcp) {
    if (mcp.name.toLowerCase().includes('github')) return 'GITHUB_TOKEN';
    if (mcp.name.toLowerCase().includes('slack')) return 'SLACK_TOKEN';
    if (mcp.name.toLowerCase().includes('brave')) return 'BRAVE_API_KEY';
    return 'API_KEY';
}

function generateBatchCommand() {
    if (selectedMcps.size === 0) return;

    const selectedData = allMcps.filter(mcp => selectedMcps.has(mcp.name));

    let content = '{\n  "mcpServers": {\n';
    content += selectedData.map((mcp, i) => {
        const name = mcp.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        const command = getMcpCommand(mcp);
        const apiKeyName = getApiKeyName(mcp);
        const trailing = i < selectedData.length - 1 ? ',' : '';

        return `    "${name}": {\n      "command": "${command.split(' ')[0]}",\n      "args": ${JSON.stringify(command.split(' ').slice(1))}${mcp.api_key ? `,\n      "env": {\n        "${apiKeyName}": "${mcp.api_key}"\n      }` : ''}\n    }${trailing}`;
    }).join('\n');
    content += '\n  }\n}';

    document.getElementById('modalTitle').textContent = currentLang === 'zh' ? '\uD83D\uDCCB 批量安装配置' : '\uD83D\uDCCB Batch Install Config';
    document.getElementById('modalDescription').textContent = currentLang === 'zh'
        ? `${selectedMcps.size} 个 MCP 配置，复制到你的 claude_desktop_config.json`
        : `${selectedMcps.size} MCP configs, copy to your claude_desktop_config.json`;
    document.getElementById('modalContent').textContent = content;
    document.getElementById('modalGithubLink').style.display = 'none';

    openModal();
}

function openModal() {
    document.getElementById('modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    if (event && event.target !== event.currentTarget) return;
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = '';
}

function copyModalContent() {
    const content = document.getElementById('modalContent').textContent;
    navigator.clipboard.writeText(content).then(() => {
        showToast(t('copied'), 'success');
    }).catch(() => {
        showToast(t('copyFailed'), 'error');
    });
}

function openDonateModal() {
    document.getElementById('donateModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDonateModal(event) {
    if (event && event.target !== event.currentTarget) return;
    document.getElementById('donateModal').classList.remove('active');
    document.body.style.overflow = '';
}

function openQRPreview(src, type) {
    document.getElementById('qrPreviewImg').src = src;
    document.getElementById('qrPreviewLabel').textContent = type === 'wechat' ? t('wechatPay') : t('alipay');
    document.getElementById('qrPreviewModal').classList.add('active');
}

function closeQRPreview() {
    document.getElementById('qrPreviewModal').classList.remove('active');
}

function showMcpDetails(name) {
    const mcp = allMcps.find(m => m.name === name);
    if (!mcp) return;

    const nameDisplay = currentLang === 'zh' && mcp.name_zh ? mcp.name_zh : mcp.name;
    const description = currentLang === 'zh' && mcp.description_zh ? mcp.description_zh : mcp.description;

    document.getElementById('modalTitle').textContent = nameDisplay;
    document.getElementById('modalDescription').textContent = description;

    if (mcp.config_file) {
        const aiCommand = `read https://raw.githubusercontent.com/theneoai/awesome-mcps/main/configs/${mcp.config_file} and install`;
        const config = mcp.config || getDefaultConfig(mcp);
        const jsonContent = JSON.stringify(config, null, 2);
        document.getElementById('modalContent').innerHTML = `
<div class="install-tabs">
    <button class="tab-btn active" onclick="switchInstallTab('ai', this)">🤖 AI 命令</button>
    <button class="tab-btn" onclick="switchInstallTab('json', this)">⚙️ JSON 配置</button>
</div>
<div id="aiCommandSection" class="tab-content">
    <div class="code-block">
        <div class="code-header">
            <span class="code-dot red"></span>
            <span class="code-dot yellow"></span>
            <span class="code-dot green"></span>
            <span style="color: var(--gray); font-size: 0.75rem; margin-left: 0.5rem;">AI Agent</span>
            <button class="copy-btn" onclick="copyText(\`${aiCommand}\`, this)">复制</button>
        </div>
        <pre><code>${aiCommand}</code></pre>
    </div>
    <p style="color: var(--gray-light); font-size: 0.8125rem; margin-top: 0.75rem;">
        ${currentLang === 'zh' ? '复制此命令，粘贴到支持 MCP 的 AI 应用中即可安装' : 'Copy and paste into your AI app that supports MCP'}
    </p>
</div>
<div id="jsonConfigSection" class="tab-content" style="display:none;">
    <div class="code-block">
        <div class="code-header">
            <span class="code-dot red"></span>
            <span class="code-dot yellow"></span>
            <span class="code-dot green"></span>
            <span style="color: var(--gray); font-size: 0.75rem; margin-left: 0.5rem;">JSON</span>
            <button class="copy-btn" onclick="copyText(\`${jsonContent.replace(/`/g, '\\`')}\`, this)">复制</button>
        </div>
        <pre><code>${jsonContent}</code></pre>
    </div>
</div>`;
    } else {
        document.getElementById('modalContent').innerHTML = currentLang === 'zh'
            ? '// 此 MCP 无需配置\n// No configuration needed'
            : '// No configuration needed';
    }

    if (mcp.github_url) {
        document.getElementById('modalGithubLink').href = mcp.github_url;
        document.getElementById('modalGithubLink').style.display = 'inline-flex';
    } else {
        document.getElementById('modalGithubLink').style.display = 'none';
    }

    openModal();
}

function switchInstallTab(tab, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('aiCommandSection').style.display = tab === 'ai' ? 'block' : 'none';
    document.getElementById('jsonConfigSection').style.display = tab === 'json' ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    switchLang(currentLang);

    document.getElementById('searchInput').addEventListener('input', () => {
        renderMcps();
        updateResultsInfo();
    });

    document.getElementById('categorySelect').addEventListener('change', () => {
        renderMcps();
        updateResultsInfo();
    });

    document.getElementById('vendorSelect').addEventListener('change', () => {
        renderMcps();
        updateResultsInfo();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeDonateModal();
            closeQRPreview();
        }
    });

    if (typeof McpData !== 'undefined') {
        allMcps = McpData;
        renderMcps();
        updateResultsInfo();
    }
});
