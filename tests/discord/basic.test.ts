import { describe, it, expect } from '@jest/globals';

describe('Discord MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/discord.json');
    expect(config.discord).toHaveProperty('command');
    expect(config.discord).toHaveProperty('args');
    expect(config.discord).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/discord.json');
    expect(config.discord.command).toBe('npx');
    expect(Array.isArray(config.discord.args)).toBe(true);
  });

  it('should have discord package reference in args', async () => {
    const config = require('../../configs/discord.json');
    const argsStr = config.discord.args.join(' ');
    expect(argsStr).toMatch(/discord/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/discord.json');
    expect(config.discord.env).toHaveProperty('DISCORD_BOT_TOKEN');
  });
});