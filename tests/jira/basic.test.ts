import { describe, it, expect } from '@jest/globals';

describe('Jira MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/jira.json');
    expect(config.jira).toHaveProperty('command');
    expect(config.jira).toHaveProperty('args');
    expect(config.jira).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/jira.json');
    expect(config.jira.command).toBe('npx');
    expect(Array.isArray(config.jira.args)).toBe(true);
  });

  it('should have jira package reference in args', async () => {
    const config = require('../../configs/jira.json');
    const argsStr = config.jira.args.join(' ');
    expect(argsStr).toMatch(/jira/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/jira.json');
    expect(config.jira.env).toHaveProperty('JIRA_URL');
    expect(config.jira.env).toHaveProperty('JIRA_USER');
    expect(config.jira.env).toHaveProperty('JIRA_API_TOKEN');
  });

  it('should validate Jira URL format', async () => {
    const config = require('../../configs/jira.json');
    const url = config.jira.env.JIRA_URL;
    expect(url).toMatch(/^https?:\/\/.+/);
    expect(url).toMatch(/atlassian\.net$/);
  });
});