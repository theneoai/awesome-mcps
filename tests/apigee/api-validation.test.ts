import { describe, it, expect } from '@jest/globals';

describe('Apigee MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/apigee.json');
    expect(config.apigee).toHaveProperty('command');
    expect(config.apigee).toHaveProperty('args');
    expect(config.apigee).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/apigee.json');
    expect(config.apigee.env.APIGEE_ORG).toBeDefined();
    expect(config.apigee.env.APIGEE_TOKEN).toBeDefined();
    expect(config.apigee.env.APIGEE_ENV).toBeDefined();
  });
});