import { describe, it, expect } from '@jest/globals';

describe('Redmine MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/redmine.json');
    expect(config.redmine).toHaveProperty('command');
    expect(config.redmine).toHaveProperty('args');
    expect(config.redmine).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/redmine.json');
    expect(config.redmine.command).toBe('npx');
    expect(Array.isArray(config.redmine.args)).toBe(true);
  });

  it('should have redmine package reference in args', async () => {
    const config = require('../../configs/redmine.json');
    const argsStr = config.redmine.args.join(' ');
    expect(argsStr).toMatch(/redmine/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/redmine.json');
    expect(config.redmine.env).toHaveProperty('REDMINE_URL');
    expect(config.redmine.env).toHaveProperty('REDMINE_API_KEY');
  });
});