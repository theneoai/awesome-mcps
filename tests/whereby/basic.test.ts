import { describe, it, expect } from '@jest/globals';

describe('Whereby MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/whereby.json');
    expect(config.whereby).toHaveProperty('command');
    expect(config.whereby).toHaveProperty('args');
    expect(config.whereby).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/whereby.json');
    expect(config.whereby.command).toBe('npx');
    expect(Array.isArray(config.whereby.args)).toBe(true);
  });

  it('should have whereby package reference in args', async () => {
    const config = require('../../configs/whereby.json');
    const argsStr = config.whereby.args.join(' ');
    expect(argsStr).toMatch(/whereby/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/whereby.json');
    expect(config.whereby.env).toHaveProperty('WHEREBY_API_KEY');
  });
});
