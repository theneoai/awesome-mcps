import { describe, it, expect } from '@jest/globals';

describe('Rocket.Chat MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/rocketchat.json');
    expect(config.rocketchat).toHaveProperty('command');
    expect(config.rocketchat).toHaveProperty('args');
    expect(config.rocketchat).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/rocketchat.json');
    expect(config.rocketchat.env.ROCKETCHAT_URL).toBeDefined();
  });

  it('should validate Rocket.Chat URL format', async () => {
    const config = require('../../configs/rocketchat.json');
    const url = config.rocketchat.env.ROCKETCHAT_URL;
    try {
      new URL(url);
      expect(true).toBe(true);
    } catch {
      expect.fail('Invalid URL format');
    }
  });
});