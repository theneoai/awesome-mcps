import { describe, it, expect } from '@jest/globals';

describe('YouTrack MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/youtrack.json');
    expect(config.youtrack).toHaveProperty('command');
    expect(config.youtrack).toHaveProperty('args');
    expect(config.youtrack).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/youtrack.json');
    expect(config.youtrack.env.YOUTRACK_URL).toBeDefined();
    expect(config.youtrack.env.YOUTRACK_TOKEN).toBeDefined();
  });

  it('should validate YouTrack URL format is valid', async () => {
    const config = require('../../configs/youtrack.json');
    const url = config.youtrack.env.YOUTRACK_URL;
    try {
      new URL(url);
      expect(true).toBe(true);
    } catch {
      expect.fail('Invalid URL format');
    }
  });
});