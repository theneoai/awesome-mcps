import { describe, it, expect } from '@jest/globals';

describe('Pytest MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/pytest.json');
    expect(config.pytest).toHaveProperty('command');
    expect(config.pytest).toHaveProperty('args');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/pytest.json');
    expect(config.pytest.command).toBe('pip');
    expect(Array.isArray(config.pytest.args)).toBe(true);
  });

  it('should have pytest package reference in args', async () => {
    const config = require('../../configs/pytest.json');
    const argsStr = config.pytest.args.join(' ');
    expect(argsStr).toMatch(/pytest/i);
  });
});