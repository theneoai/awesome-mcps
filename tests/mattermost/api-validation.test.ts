import { describe, it, expect } from '@jest/globals';

describe('Mattermost MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/mattermost.json');
    expect(config.mattermost).toHaveProperty('command');
    expect(config.mattermost).toHaveProperty('args');
    expect(config.mattermost).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/mattermost.json');
    expect(config.mattermost.env.MATTERMOST_URL).toBeDefined();
    expect(config.mattermost.env.MATTERMOST_TOKEN).toBeDefined();
  });

  it('should validate Mattermost URL format', async () => {
    const config = require('../../configs/mattermost.json');
    const url = config.mattermost.env.MATTERMOST_URL;
    try {
      new URL(url);
      expect(true).toBe(true);
    } catch {
      expect.fail('Invalid URL format');
    }
  });
});