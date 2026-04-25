import { describe, it, expect } from '@jest/globals';

describe('Selenium MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/selenium.json');
    expect(config.selenium).toHaveProperty('command');
    expect(config.selenium).toHaveProperty('args');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/selenium.json');
    expect(config.selenium.command).toBe('npx');
    expect(Array.isArray(config.selenium.args)).toBe(true);
  });

  it('should have selenium package reference in args', async () => {
    const config = require('../../configs/selenium.json');
    const argsStr = config.selenium.args.join(' ');
    expect(argsStr).toMatch(/selenium/i);
  });
});