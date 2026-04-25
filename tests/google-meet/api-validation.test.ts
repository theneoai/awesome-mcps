import { describe, it, expect } from '@jest/globals';

describe('Google Meet MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/google-meet.json');
    expect(config['google-meet']).toHaveProperty('command');
    expect(config['google-meet']).toHaveProperty('args');
    expect(config['google-meet']).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/google-meet.json');
    expect(config['google-meet'].env.GOOGLE_CALENDAR_ID).toBeDefined();
  });
});