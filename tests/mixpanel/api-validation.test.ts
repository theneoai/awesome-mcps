import { describe, it, expect } from '@jest/globals';

describe('Mixpanel MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/mixpanel.json');
    expect(config.mixpanel).toHaveProperty('command');
    expect(config.mixpanel).toHaveProperty('args');
    expect(config.mixpanel).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/mixpanel.json');
    expect(config.mixpanel.env.MIXPANEL_TOKEN).toBeDefined();
  });
});