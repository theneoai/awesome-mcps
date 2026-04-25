import { describe, it, expect } from '@jest/globals';

describe('Jira MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/jira.json');
    expect(config.jira).toHaveProperty('command');
    expect(config.jira).toHaveProperty('args');
    expect(config.jira).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/jira.json');
    expect(config.jira.env.JIRA_URL).toBeDefined();
    expect(config.jira.env.JIRA_USER).toBeDefined();
    expect(config.jira.env.JIRA_API_TOKEN).toBeDefined();
  });

  it('should validate Jira URL format is valid', async () => {
    const config = require('../../configs/jira.json');
    const url = config.jira.env.JIRA_URL;
    try {
      new URL(url);
      expect(true).toBe(true);
    } catch {
      expect.fail('Invalid URL format');
    }
  });

  it('should validate JIRA_USER is email format', async () => {
    const config = require('../../configs/jira.json');
    const user = config.jira.env.JIRA_USER;
    expect(user).toMatch(/@.+\..+/);
  });
});