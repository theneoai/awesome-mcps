import { describe, it, expect } from '@jest/globals';

describe('Phabricator MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/phabricator.json');
    expect(config.phabricator).toHaveProperty('command');
    expect(config.phabricator).toHaveProperty('args');
    expect(config.phabricator).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/phabricator.json');
    expect(config.phabricator.env.PHABRICATOR_URL).toBeDefined();
    expect(config.phabricator.env.PHABRICATOR_TOKEN).toBeDefined();
  });
});