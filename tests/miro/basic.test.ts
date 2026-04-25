import { describe, it, expect } from '@jest/globals';

describe('Miro MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/miro.json');
    expect(config.miro).toHaveProperty('command');
    expect(config.miro).toHaveProperty('args');
    expect(config.miro).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/miro.json');
    expect(config.miro.command).toBe('npx');
    expect(Array.isArray(config.miro.args)).toBe(true);
  });

  it('should have miro package reference in args', async () => {
    const config = require('../../configs/miro.json');
    const argsStr = config.miro.args.join(' ');
    expect(argsStr).toMatch(/miro/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/miro.json');
    expect(config.miro.env).toHaveProperty('MIRO_ACCESS_TOKEN');
  });
});
