import { describe, it, expect } from '@jest/globals';

describe('Telegram MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/telegram.json');
    expect(config.telegram).toHaveProperty('command');
    expect(config.telegram).toHaveProperty('args');
    expect(config.telegram).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/telegram.json');
    expect(config.telegram.command).toBe('npx');
    expect(Array.isArray(config.telegram.args)).toBe(true);
  });

  it('should have telegram package reference in args', async () => {
    const config = require('../../configs/telegram.json');
    const argsStr = config.telegram.args.join(' ');
    expect(argsStr).toMatch(/telegram/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/telegram.json');
    expect(config.telegram.env).toHaveProperty('TELEGRAM_BOT_TOKEN');
  });
});
