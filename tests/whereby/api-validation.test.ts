import { describe, it, expect } from '@jest/globals';

describe('Whereby MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/whereby.json');
    expect(config.whereby).toHaveProperty('command');
    expect(config.whereby).toHaveProperty('args');
    expect(config.whereby).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/whereby.json');
    expect(config.whereby.env.WHEREBY_API_KEY).toBeDefined();
  });
});
