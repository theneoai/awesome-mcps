import { describe, it, expect } from '@jest/globals';

describe('HubSpot MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/hubspot.json');
    expect(config.hubspot).toHaveProperty('command');
    expect(config.hubspot).toHaveProperty('args');
    expect(config.hubspot).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/hubspot.json');
    expect(config.hubspot.env.HUBSPOT_ACCESS_TOKEN).toBeDefined();
  });
});