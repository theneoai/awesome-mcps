import { describe, it, expect } from '@jest/globals';

describe('Rocket.Chat MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/rocketchat.json');
    expect(config.rocketchat).toHaveProperty('command');
    expect(config.rocketchat).toHaveProperty('args');
    expect(config.rocketchat).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/rocketchat.json');
    expect(config.rocketchat.command).toBe('npx');
    expect(Array.isArray(config.rocketchat.args)).toBe(true);
  });

  it('should have rocketchat package reference in args', async () => {
    const config = require('../../configs/rocketchat.json');
    const argsStr = config.rocketchat.args.join(' ');
    expect(argsStr).toMatch(/rocketchat/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/rocketchat.json');
    expect(config.rocketchat.env).toHaveProperty('ROCKETCHAT_URL');
  });
});