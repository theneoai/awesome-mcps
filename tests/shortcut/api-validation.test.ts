import { describe, it, expect } from '@jest/globals';

describe('Shortcut MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/shortcut.json');
    expect(config.shortcut).toHaveProperty('command');
    expect(config.shortcut).toHaveProperty('args');
    expect(config.shortcut).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/shortcut.json');
    expect(config.shortcut.env.SHORTCUT_API_TOKEN).toBeDefined();
  });
});
