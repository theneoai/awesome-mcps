import { describe, it, expect } from '@jest/globals';

describe('npm MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/npm.json');
    expect(config.npm).toHaveProperty('command');
    expect(config.npm).toHaveProperty('args');
    expect(config.npm).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/npm.json');
    expect(config.npm.env.NPM_TOKEN).toBeDefined();
  });
});