import { describe, it, expect } from '@jest/globals';

describe('Mattermost MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/mattermost.json');
    expect(config.mattermost).toHaveProperty('command');
    expect(config.mattermost).toHaveProperty('args');
    expect(config.mattermost).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/mattermost.json');
    expect(config.mattermost.command).toBe('npx');
    expect(Array.isArray(config.mattermost.args)).toBe(true);
  });

  it('should have mattermost package reference in args', async () => {
    const config = require('../../configs/mattermost.json');
    const argsStr = config.mattermost.args.join(' ');
    expect(argsStr).toMatch(/mattermost/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/mattermost.json');
    expect(config.mattermost.env).toHaveProperty('MATTERMOST_URL');
    expect(config.mattermost.env).toHaveProperty('MATTERMOST_TOKEN');
  });
});