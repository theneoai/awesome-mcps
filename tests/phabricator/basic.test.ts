import { describe, it, expect } from '@jest/globals';

describe('Phabricator MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/phabricator.json');
    expect(config.phabricator).toHaveProperty('command');
    expect(config.phabricator).toHaveProperty('args');
    expect(config.phabricator).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/phabricator.json');
    expect(config.phabricator.command).toBe('npx');
    expect(Array.isArray(config.phabricator.args)).toBe(true);
  });

  it('should have phabricator package reference in args', async () => {
    const config = require('../../configs/phabricator.json');
    const argsStr = config.phabricator.args.join(' ');
    expect(argsStr).toMatch(/phabricator/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/phabricator.json');
    expect(config.phabricator.env).toHaveProperty('PHABRICATOR_URL');
    expect(config.phabricator.env).toHaveProperty('PHABRICATOR_TOKEN');
  });
});