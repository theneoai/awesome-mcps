import { describe, it, expect } from '@jest/globals';

describe('Zipkin MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/zipkin.json');
    expect(config.zipkin).toHaveProperty('command');
    expect(config.zipkin).toHaveProperty('args');
    expect(config.zipkin).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/zipkin.json');
    expect(config.zipkin.command).toBe('npx');
    expect(Array.isArray(config.zipkin.args)).toBe(true);
  });

  it('should have zipkin package reference in args', async () => {
    const config = require('../../configs/zipkin.json');
    const argsStr = config.zipkin.args.join(' ');
    expect(argsStr).toMatch(/zipkin/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/zipkin.json');
    expect(config.zipkin.env).toHaveProperty('ZIPKIN_URL');
  });
});
