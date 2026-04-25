import { describe, it, expect } from '@jest/globals';

describe('Klaviyo MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/klaviyo.json');
    expect(config.klaviyo).toHaveProperty('command');
    expect(config.klaviyo).toHaveProperty('args');
    expect(config.klaviyo).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/klaviyo.json');
    expect(config.klaviyo.env.KLAVIYO_API_KEY).toBeDefined();
  });
});