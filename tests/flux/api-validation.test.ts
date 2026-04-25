import { describe, it, expect } from '@jest/globals';

describe('Flux MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/flux.json');
    expect(config.flux).toHaveProperty('command');
    expect(config.flux).toHaveProperty('args');
    expect(config.flux).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/flux.json');
    expect(config.flux.env.FLUX_NS).toBeDefined();
  });
});