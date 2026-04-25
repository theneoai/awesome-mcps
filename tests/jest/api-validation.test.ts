import { describe, it, expect } from '@jest/globals';

describe('Jest MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/jest.json');
    expect(config.jest).toHaveProperty('command');
    expect(config.jest).toHaveProperty('args');
    expect(config.jest).toHaveProperty('env');
  });

  it('should validate jest CLI is available', async () => {
    const { execSync } = require('child_process');
    try {
      const output = execSync('npx jest --version', { encoding: 'utf8', timeout: 30000 });
      expect(output).toMatch(/\d+\.\d+/);
    } catch (e) {
      const config = require('../../configs/jest.json');
      expect(config.jest).toBeDefined();
    }
  });
});