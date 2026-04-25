import { describe, it, expect } from '@jest/globals';

describe('Flux MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/flux.json');
    expect(config.flux).toHaveProperty('command');
    expect(config.flux).toHaveProperty('args');
    expect(config.flux).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/flux.json');
    expect(config.flux.command).toBe('npx');
    expect(Array.isArray(config.flux.args)).toBe(true);
  });

  it('should have flux package reference in args', async () => {
    const config = require('../../configs/flux.json');
    const argsStr = config.flux.args.join(' ');
    expect(argsStr).toMatch(/flux/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/flux.json');
    expect(config.flux.env).toHaveProperty('FLUX_NS');
  });
});