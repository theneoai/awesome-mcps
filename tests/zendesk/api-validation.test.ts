import { describe, it, expect } from '@jest/globals';

describe('Zendesk MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/zendesk.json');
    expect(config.zendesk).toHaveProperty('command');
    expect(config.zendesk).toHaveProperty('args');
    expect(config.zendesk).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/zendesk.json');
    expect(config.zendesk.env.ZENDESK_SUBDOMAIN).toBeDefined();
    expect(config.zendesk.env.ZENDESK_EMAIL).toBeDefined();
    expect(config.zendesk.env.ZENDESK_API_TOKEN).toBeDefined();
  });
});