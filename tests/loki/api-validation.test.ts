import { describe, it, expect } from '@jest/globals';

describe('Grafana Loki MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/loki.json');
    expect(config.loki).toHaveProperty('command');
    expect(config.loki).toHaveProperty('args');
    expect(config.loki).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/loki.json');
    expect(config.loki.env.LOKI_URL).toBeDefined();
  });

  it('should validate Loki URL format', async () => {
    const config = require('../../configs/loki.json');
    const url = config.loki.env.LOKI_URL;
    try {
      new URL(url);
      expect(true).toBe(true);
    } catch {
      expect.fail('Invalid URL format');
    }
  });
});