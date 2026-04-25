import { describe, it, expect } from '@jest/globals';

describe('npm MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/npm.json');
    expect(config.npm).toHaveProperty('command');
    expect(config.npm).toHaveProperty('args');
    expect(config.npm).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/npm.json');
    expect(config.npm.command).toBe('npx');
    expect(Array.isArray(config.npm.args)).toBe(true);
  });

  it('should have npm package reference in args', async () => {
    const config = require('../../configs/npm.json');
    const argsStr = config.npm.args.join(' ');
    expect(argsStr).toMatch(/npm/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/npm.json');
    expect(config.npm.env).toHaveProperty('NPM_TOKEN');
  });
});