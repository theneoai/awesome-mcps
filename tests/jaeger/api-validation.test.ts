import { describe, it, expect } from '@jest/globals';

describe('Jaeger MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/jaeger.json');
    expect(config.jaeger).toHaveProperty('command');
    expect(config.jaeger).toHaveProperty('args');
    expect(config.jaeger).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/jaeger.json');
    expect(config.jaeger.env.JAEGER_QUERY_URL).toBeDefined();
  });

  it('should validate Jaeger URL format', async () => {
    const config = require('../../configs/jaeger.json');
    const url = config.jaeger.env.JAEGER_QUERY_URL;
    try {
      new URL(url);
      expect(true).toBe(true);
    } catch {
      expect.fail('Invalid URL format');
    }
  });
});