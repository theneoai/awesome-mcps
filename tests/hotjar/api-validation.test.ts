import { describe, it, expect } from '@jest/globals';

describe('Hotjar MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/hotjar.json');
    expect(config.hotjar).toHaveProperty('command');
    expect(config.hotjar).toHaveProperty('args');
    expect(config.hotjar).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/hotjar.json');
    expect(config.hotjar.env.HOTJAR_SITE_ID).toBeDefined();
    expect(config.hotjar.env.HOTJAR_API_KEY).toBeDefined();
  });

  it('should validate HOTJAR_SITE_ID is numeric string', async () => {
    const config = require('../../configs/hotjar.json');
    const siteId = config.hotjar.env.HOTJAR_SITE_ID;
    expect(siteId).toMatch(/^\d+$/);
  });
});