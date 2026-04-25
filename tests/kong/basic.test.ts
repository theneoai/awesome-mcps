import { describe, it, expect } from '@jest/globals';

describe('Kong MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/kong.json');
    expect(config.kong).toHaveProperty('command');
    expect(config.kong).toHaveProperty('args');
    expect(config.kong).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/kong.json');
    expect(config.kong.command).toBe('npx');
    expect(Array.isArray(config.kong.args)).toBe(true);
  });

  it('should have kong package reference in args', async () => {
    const config = require('../../configs/kong.json');
    const argsStr = config.kong.args.join(' ');
    expect(argsStr).toMatch(/kong/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/kong.json');
    expect(config.kong.env).toHaveProperty('KONG_ADMIN_URL');
  });
});