import { describe, it, expect } from '@jest/globals';

describe('Redmine MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/redmine.json');
    expect(config.redmine).toHaveProperty('command');
    expect(config.redmine).toHaveProperty('args');
    expect(config.redmine).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/redmine.json');
    expect(config.redmine.env.REDMINE_URL).toBeDefined();
    expect(config.redmine.env.REDMINE_API_KEY).toBeDefined();
  });

  it('should validate Redmine URL format is valid', async () => {
    const config = require('../../configs/redmine.json');
    const url = config.redmine.env.REDMINE_URL;
    try {
      new URL(url);
      expect(true).toBe(true);
    } catch {
      expect.fail('Invalid URL format');
    }
  });
});