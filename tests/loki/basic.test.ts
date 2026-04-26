import { describe, it, expect } from '@jest/globals';

describe('Grafana Loki MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/loki.json');
    expect(config.loki).toHaveProperty('command');
    expect(config.loki).toHaveProperty('args');
    expect(config.loki).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/loki.json');
    expect(config.loki.command).toBe('npx');
    expect(Array.isArray(config.loki.args)).toBe(true);
  });

  it('should have loki package reference in args', async () => {
    const config = require('../../configs/loki.json');
    const argsStr = config.loki.args.join(' ');
    expect(argsStr).toMatch(/loki/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/loki.json');
    expect(config.loki.env).toHaveProperty('LOKI_URL');
  });
});