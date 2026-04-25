import { describe, it, expect } from '@jest/globals';

describe('Shortcut MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/shortcut.json');
    expect(config.shortcut).toHaveProperty('command');
    expect(config.shortcut).toHaveProperty('args');
    expect(config.shortcut).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/shortcut.json');
    expect(config.shortcut.command).toBe('npx');
    expect(Array.isArray(config.shortcut.args)).toBe(true);
  });

  it('should have shortcut package reference in args', async () => {
    const config = require('../../configs/shortcut.json');
    const argsStr = config.shortcut.args.join(' ');
    expect(argsStr).toMatch(/shortcut/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/shortcut.json');
    expect(config.shortcut.env).toHaveProperty('SHORTCUT_API_TOKEN');
  });
});
