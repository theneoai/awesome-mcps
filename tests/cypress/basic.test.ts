import { describe, it, expect } from '@jest/globals';

describe('Cypress MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/cypress.json');
    expect(config.cypress).toHaveProperty('command');
    expect(config.cypress).toHaveProperty('args');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/cypress.json');
    expect(config.cypress.command).toBe('npx');
    expect(Array.isArray(config.cypress.args)).toBe(true);
  });

  it('should have cypress package reference in args', async () => {
    const config = require('../../configs/cypress.json');
    const argsStr = config.cypress.args.join(' ');
    expect(argsStr).toMatch(/cypress/i);
  });
});