import { describe, it, expect } from '@jest/globals';

describe('Jitsi MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/jitsi.json');
    expect(config.jitsi).toHaveProperty('command');
    expect(config.jitsi).toHaveProperty('args');
    expect(config.jitsi).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/jitsi.json');
    expect(config.jitsi.env.JITSI_URL).toBeDefined();
  });
});
