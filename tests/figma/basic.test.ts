import { describe, it, expect } from '@jest/globals';

describe('Figma MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/figma.json');
    expect(config.figma).toHaveProperty('command');
    expect(config.figma).toHaveProperty('args');
    expect(config.figma).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/figma.json');
    expect(config.figma.command).toBe('npx');
    expect(Array.isArray(config.figma.args)).toBe(true);
  });

  it('should have figma package reference in args', async () => {
    const config = require('../../configs/figma.json');
    const argsStr = config.figma.args.join(' ');
    expect(argsStr).toMatch(/figma/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/figma.json');
    expect(config.figma.env).toHaveProperty('FIGMA_ACCESS_TOKEN');
  });
});