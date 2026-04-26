import { describe, it, expect } from '@jest/globals';

describe('Telegram MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/telegram.json');
    expect(config.telegram).toHaveProperty('command');
    expect(config.telegram).toHaveProperty('args');
    expect(config.telegram).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/telegram.json');
    expect(config.telegram.env.TELEGRAM_BOT_TOKEN).toBeDefined();
  });
});
