import { describe, it, expect } from '@jest/globals';

describe('Istio MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/istio.json');
    expect(config.istio).toHaveProperty('command');
    expect(config.istio).toHaveProperty('args');
    expect(config.istio).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/istio.json');
    expect(config.istio.command).toBe('npx');
    expect(Array.isArray(config.istio.args)).toBe(true);
  });

  it('should have istio package reference in args', async () => {
    const config = require('../../configs/istio.json');
    const argsStr = config.istio.args.join(' ');
    expect(argsStr).toMatch(/istio/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/istio.json');
    expect(config.istio.env).toHaveProperty('ISTIOD_URL');
    expect(config.istio.env).toHaveProperty('ISTIO_NAMESPACE');
  });
});