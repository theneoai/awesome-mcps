import { describe, it, expect } from '@jest/globals';

describe('Google Analytics MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/google-analytics.json');
    expect(config['google-analytics']).toHaveProperty('command');
    expect(config['google-analytics']).toHaveProperty('args');
    expect(config['google-analytics']).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/google-analytics.json');
    expect(config['google-analytics'].command).toBe('npx');
    expect(Array.isArray(config['google-analytics'].args)).toBe(true);
  });

  it('should have google analytics package reference in args', async () => {
    const config = require('../../configs/google-analytics.json');
    const argsStr = config['google-analytics'].args.join(' ');
    expect(argsStr).toMatch(/google/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/google-analytics.json');
    expect(config['google-analytics'].env).toHaveProperty('GA_PROPERTY_ID');
  });
});