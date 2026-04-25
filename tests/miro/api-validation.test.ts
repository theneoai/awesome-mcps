import { describe, it, expect } from '@jest/globals';

describe('Miro MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/miro.json');
    expect(config.miro).toHaveProperty('command');
    expect(config.miro).toHaveProperty('args');
    expect(config.miro).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/miro.json');
    expect(config.miro.env.MIRO_ACCESS_TOKEN).toBeDefined();
  });
});
