import { describe, it, expect } from '@jest/globals';

describe('Prometheus MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/prometheus.json');
    expect(config.prometheus).toHaveProperty('command');
    expect(config.prometheus).toHaveProperty('args');
    expect(config.prometheus).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/prometheus.json');
    expect(config.prometheus.env.PROMETHEUS_URL).toBeDefined();
  });

  it('should validate Prometheus URL format', async () => {
    const config = require('../../configs/prometheus.json');
    const url = config.prometheus.env.PROMETHEUS_URL;
    try {
      new URL(url);
      expect(true).toBe(true);
    } catch {
      expect.fail('Invalid URL format');
    }
  });
});
