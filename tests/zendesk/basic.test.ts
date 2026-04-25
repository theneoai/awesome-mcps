import { describe, it, expect } from '@jest/globals';

describe('Zendesk MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/zendesk.json');
    expect(config.zendesk).toHaveProperty('command');
    expect(config.zendesk).toHaveProperty('args');
    expect(config.zendesk).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/zendesk.json');
    expect(config.zendesk.command).toBe('npx');
    expect(Array.isArray(config.zendesk.args)).toBe(true);
  });

  it('should have zendesk package reference in args', async () => {
    const config = require('../../configs/zendesk.json');
    const argsStr = config.zendesk.args.join(' ');
    expect(argsStr).toMatch(/zendesk/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/zendesk.json');
    expect(config.zendesk.env).toHaveProperty('ZENDESK_SUBDOMAIN');
    expect(config.zendesk.env).toHaveProperty('ZENDESK_EMAIL');
    expect(config.zendesk.env).toHaveProperty('ZENDESK_API_TOKEN');
  });
});