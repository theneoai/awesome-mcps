import { describe, it, expect } from '@jest/globals';

describe('Zipkin MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/zipkin.json');
    expect(config.zipkin).toHaveProperty('command');
    expect(config.zipkin).toHaveProperty('args');
    expect(config.zipkin).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/zipkin.json');
    expect(config.zipkin.env.ZIPKIN_URL).toBeDefined();
  });

  it('should validate Zipkin URL format', async () => {
    const config = require('../../configs/zipkin.json');
    const url = config.zipkin.env.ZIPKIN_URL;
    try {
      new URL(url);
      expect(true).toBe(true);
    } catch {
      expect.fail('Invalid URL format');
    }
  });
});
