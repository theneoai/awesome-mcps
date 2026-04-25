import { describe, it, expect } from '@jest/globals';

describe('Jitsi MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/jitsi.json');
    expect(config.jitsi).toHaveProperty('command');
    expect(config.jitsi).toHaveProperty('args');
    expect(config.jitsi).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/jitsi.json');
    expect(config.jitsi.command).toBe('npx');
    expect(Array.isArray(config.jitsi.args)).toBe(true);
  });

  it('should have jitsi package reference in args', async () => {
    const config = require('../../configs/jitsi.json');
    const argsStr = config.jitsi.args.join(' ');
    expect(argsStr).toMatch(/jitsi/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/jitsi.json');
    expect(config.jitsi.env).toHaveProperty('JITSI_URL');
  });
});
