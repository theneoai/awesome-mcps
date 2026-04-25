import { describe, it, expect } from '@jest/globals';

describe('Jest MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/jest.json');
    expect(config.jest).toHaveProperty('command');
    expect(config.jest).toHaveProperty('args');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/jest.json');
    expect(config.jest.command).toBe('npx');
    expect(Array.isArray(config.jest.args)).toBe(true);
  });

  it('should have jest package reference in args', async () => {
    const config = require('../../configs/jest.json');
    const argsStr = config.jest.args.join(' ');
    expect(argsStr).toMatch(/jest/i);
  });
});