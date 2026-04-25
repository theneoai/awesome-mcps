import { describe, it, expect } from '@jest/globals';

describe('Mixpanel MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/mixpanel.json');
    expect(config.mixpanel).toHaveProperty('command');
    expect(config.mixpanel).toHaveProperty('args');
    expect(config.mixpanel).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/mixpanel.json');
    expect(config.mixpanel.command).toBe('npx');
    expect(Array.isArray(config.mixpanel.args)).toBe(true);
  });

  it('should have mixpanel package reference in args', async () => {
    const config = require('../../configs/mixpanel.json');
    const argsStr = config.mixpanel.args.join(' ');
    expect(argsStr).toMatch(/mixpanel/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/mixpanel.json');
    expect(config.mixpanel.env).toHaveProperty('MIXPANEL_TOKEN');
  });
});