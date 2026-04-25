import { describe, it, expect } from '@jest/globals';

describe('Amplitude MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/amplitude.json');
    expect(config.amplitude).toHaveProperty('command');
    expect(config.amplitude).toHaveProperty('args');
    expect(config.amplitude).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/amplitude.json');
    expect(config.amplitude.command).toBe('npx');
    expect(Array.isArray(config.amplitude.args)).toBe(true);
  });

  it('should have amplitude package reference in args', async () => {
    const config = require('../../configs/amplitude.json');
    const argsStr = config.amplitude.args.join(' ');
    expect(argsStr).toMatch(/amplitude/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/amplitude.json');
    expect(config.amplitude.env).toHaveProperty('AMPLITUDE_API_KEY');
  });
});