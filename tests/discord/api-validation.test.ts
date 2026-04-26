import { describe, it, expect } from '@jest/globals';

describe('Discord MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/discord.json');
    expect(config.discord).toHaveProperty('command');
    expect(config.discord).toHaveProperty('args');
    expect(config.discord).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/discord.json');
    expect(config.discord.env.DISCORD_BOT_TOKEN).toBeDefined();
  });
});