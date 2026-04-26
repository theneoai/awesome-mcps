import { describe, it, expect } from '@jest/globals';

describe('Confluence MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/confluence.json');
    expect(config.confluence).toHaveProperty('command');
    expect(config.confluence).toHaveProperty('args');
    expect(config.confluence).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/confluence.json');
    expect(config.confluence.command).toBe('npx');
    expect(Array.isArray(config.confluence.args)).toBe(true);
  });

  it('should have confluence package reference in args', async () => {
    const config = require('../../configs/confluence.json');
    const argsStr = config.confluence.args.join(' ');
    expect(argsStr).toMatch(/confluence/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/confluence.json');
    expect(config.confluence.env).toHaveProperty('CONFLUENCE_URL');
    expect(config.confluence.env).toHaveProperty('CONFLUENCE_EMAIL');
  });
});