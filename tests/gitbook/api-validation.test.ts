import { describe, it, expect } from '@jest/globals';

describe('GitBook MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/gitbook.json');
    expect(config.gitbook).toHaveProperty('command');
    expect(config.gitbook).toHaveProperty('args');
    expect(config.gitbook).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/gitbook.json');
    expect(config.gitbook.env.GITBOOK_TOKEN).toBeDefined();
  });
});