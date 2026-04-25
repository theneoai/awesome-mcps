import { describe, it, expect } from '@jest/globals';

describe('Salesforce MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/salesforce.json');
    expect(config.salesforce).toHaveProperty('command');
    expect(config.salesforce).toHaveProperty('args');
    expect(config.salesforce).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/salesforce.json');
    expect(config.salesforce.env.SALESFORCE_INSTANCE_URL).toBeDefined();
  });
});