import { describe, it, expect } from '@jest/globals';

describe('Amplitude MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/amplitude.json');
    expect(config.amplitude).toHaveProperty('command');
    expect(config.amplitude).toHaveProperty('args');
    expect(config.amplitude).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/amplitude.json');
    expect(config.amplitude.env.AMPLITUDE_API_KEY).toBeDefined();
  });
});