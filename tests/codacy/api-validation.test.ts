import { describe, it, expect } from '@jest/globals';

describe('Codacy MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/codacy.json');
    expect(config.codacy).toHaveProperty('command');
    expect(config.codacy).toHaveProperty('args');
    expect(config.codacy).toHaveProperty('env');
  });

  it('should validate API token is defined in env', async () => {
    const config = require('../../configs/codacy.json');
    expect(config.codacy.env).toHaveProperty('CODACY_API_TOKEN');
    expect(config.codacy.env).toHaveProperty('CODACY_PROJECT_TOKEN');
  });
});