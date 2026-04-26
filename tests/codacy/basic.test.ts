import { describe, it, expect } from '@jest/globals';

describe('Codacy MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/codacy.json');
    expect(config.codacy).toHaveProperty('command');
    expect(config.codacy).toHaveProperty('args');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/codacy.json');
    expect(config.codacy.command).toBe('npx');
    expect(Array.isArray(config.codacy.args)).toBe(true);
  });

  it('should have codacy package reference in args', async () => {
    const config = require('../../configs/codacy.json');
    const argsStr = config.codacy.args.join(' ');
    expect(argsStr).toMatch(/codacy/i);
  });
});