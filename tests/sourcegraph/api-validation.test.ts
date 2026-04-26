import { describe, it, expect } from '@jest/globals';

describe('Sourcegraph MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/sourcegraph.json');
    expect(config.sourcegraph).toHaveProperty('command');
    expect(config.sourcegraph).toHaveProperty('args');
    expect(config.sourcegraph).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/sourcegraph.json');
    expect(config.sourcegraph.env.SRC_ENDPOINT).toBeDefined();
  });
});
