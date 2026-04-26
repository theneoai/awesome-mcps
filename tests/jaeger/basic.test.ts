import { describe, it, expect } from '@jest/globals';

describe('Jaeger MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/jaeger.json');
    expect(config.jaeger).toHaveProperty('command');
    expect(config.jaeger).toHaveProperty('args');
    expect(config.jaeger).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/jaeger.json');
    expect(config.jaeger.command).toBe('npx');
    expect(Array.isArray(config.jaeger.args)).toBe(true);
  });

  it('should have jaeger package reference in args', async () => {
    const config = require('../../configs/jaeger.json');
    const argsStr = config.jaeger.args.join(' ');
    expect(argsStr).toMatch(/jaeger/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/jaeger.json');
    expect(config.jaeger.env).toHaveProperty('JAEGER_QUERY_URL');
  });
});