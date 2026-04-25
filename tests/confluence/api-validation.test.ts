import { describe, it, expect } from '@jest/globals';

describe('Confluence MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/confluence.json');
    expect(config.confluence).toHaveProperty('command');
    expect(config.confluence).toHaveProperty('args');
    expect(config.confluence).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/confluence.json');
    expect(config.confluence.env.CONFLUENCE_URL).toBeDefined();
  });
});