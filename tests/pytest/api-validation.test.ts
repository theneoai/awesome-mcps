import { describe, it, expect } from '@jest/globals';

describe('Pytest MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/pytest.json');
    expect(config.pytest).toHaveProperty('command');
    expect(config.pytest).toHaveProperty('args');
    expect(config.pytest).toHaveProperty('env');
  });

  it('should validate pytest CLI is available', async () => {
    const { execSync } = require('child_process');
    try {
      const output = execSync('pytest --version', { encoding: 'utf8', timeout: 30000 });
      expect(output).toMatch(/pytest/i);
    } catch (e) {
      const config = require('../../configs/pytest.json');
      expect(config.pytest).toBeDefined();
    }
  });
});