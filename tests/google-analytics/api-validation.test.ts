import { describe, it, expect } from '@jest/globals';

describe('Google Analytics MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/google-analytics.json');
    expect(config['google-analytics']).toHaveProperty('command');
    expect(config['google-analytics']).toHaveProperty('args');
    expect(config['google-analytics']).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/google-analytics.json');
    expect(config['google-analytics'].env.GA_PROPERTY_ID).toBeDefined();
  });
});