import { describe, it, expect } from '@jest/globals';

describe('Prometheus MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/prometheus.json');
    expect(config.prometheus).toHaveProperty('command');
    expect(config.prometheus).toHaveProperty('args');
    expect(config.prometheus).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/prometheus.json');
    expect(config.prometheus.command).toBe('npx');
    expect(Array.isArray(config.prometheus.args)).toBe(true);
  });

  it('should have prometheus package reference in args', async () => {
    const config = require('../../configs/prometheus.json');
    const argsStr = config.prometheus.args.join(' ');
    expect(argsStr).toMatch(/prometheus/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/prometheus.json');
    expect(config.prometheus.env).toHaveProperty('PROMETHEUS_URL');
  });
});
