import { describe, it, expect } from '@jest/globals';

describe('Hotjar MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/hotjar.json');
    expect(config.hotjar).toHaveProperty('command');
    expect(config.hotjar).toHaveProperty('args');
    expect(config.hotjar).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/hotjar.json');
    expect(config.hotjar.command).toBe('npx');
    expect(Array.isArray(config.hotjar.args)).toBe(true);
  });

  it('should have hotjar package reference in args', async () => {
    const config = require('../../configs/hotjar.json');
    const argsStr = config.hotjar.args.join(' ');
    expect(argsStr).toMatch(/hotjar/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/hotjar.json');
    expect(config.hotjar.env).toHaveProperty('HOTJAR_SITE_ID');
    expect(config.hotjar.env).toHaveProperty('HOTJAR_API_KEY');
  });
});