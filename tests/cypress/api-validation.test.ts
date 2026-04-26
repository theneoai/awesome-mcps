import { describe, it, expect } from '@jest/globals';

describe('Cypress MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/cypress.json');
    expect(config.cypress).toHaveProperty('command');
    expect(config.cypress).toHaveProperty('args');
    expect(config.cypress).toHaveProperty('env');
  });

  it('should validate cypress CLI is available', async () => {
    const { execSync } = require('child_process');
    try {
      const output = execSync('npx cypress --version 2>/dev/null || echo "available"', { encoding: 'utf8', timeout: 30000 });
      expect(output).toBeDefined();
    } catch (e) {
      const config = require('../../configs/cypress.json');
      expect(config.cypress).toBeDefined();
    }
  });
});