import { describe, it, expect } from '@jest/globals';

describe('GitBook MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/gitbook.json');
    expect(config.gitbook).toHaveProperty('command');
    expect(config.gitbook).toHaveProperty('args');
    expect(config.gitbook).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/gitbook.json');
    expect(config.gitbook.command).toBe('npx');
    expect(Array.isArray(config.gitbook.args)).toBe(true);
  });

  it('should have gitbook package reference in args', async () => {
    const config = require('../../configs/gitbook.json');
    const argsStr = config.gitbook.args.join(' ');
    expect(argsStr).toMatch(/gitbook/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/gitbook.json');
    expect(config.gitbook.env).toHaveProperty('GITBOOK_TOKEN');
  });
});