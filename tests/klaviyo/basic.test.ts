import { describe, it, expect } from '@jest/globals';

describe('Klaviyo MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/klaviyo.json');
    expect(config.klaviyo).toHaveProperty('command');
    expect(config.klaviyo).toHaveProperty('args');
    expect(config.klaviyo).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/klaviyo.json');
    expect(config.klaviyo.command).toBe('npx');
    expect(Array.isArray(config.klaviyo.args)).toBe(true);
  });

  it('should have klaviyo package reference in args', async () => {
    const config = require('../../configs/klaviyo.json');
    const argsStr = config.klaviyo.args.join(' ');
    expect(argsStr).toMatch(/klaviyo/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/klaviyo.json');
    expect(config.klaviyo.env).toHaveProperty('KLAVIYO_API_KEY');
  });
});