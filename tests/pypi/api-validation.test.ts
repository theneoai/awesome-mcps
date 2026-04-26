import { describe, it, expect } from '@jest/globals';

describe('PyPI MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/pypi.json');
    expect(config.pypi).toHaveProperty('command');
    expect(config.pypi).toHaveProperty('args');
    expect(config.pypi).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/pypi.json');
    expect(config.pypi.env.PYPI_TOKEN).toBeDefined();
  });
});
