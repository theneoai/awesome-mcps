import { describe, it, expect } from '@jest/globals';

describe('Kong MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/kong.json');
    expect(config.kong).toHaveProperty('command');
    expect(config.kong).toHaveProperty('args');
    expect(config.kong).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/kong.json');
    expect(config.kong.env.KONG_ADMIN_URL).toBeDefined();
  });

  it('should validate Kong Admin URL format', async () => {
    const config = require('../../configs/kong.json');
    const url = config.kong.env.KONG_ADMIN_URL;
    try {
      new URL(url);
      expect(true).toBe(true);
    } catch {
      expect.fail('Invalid URL format');
    }
  });
});