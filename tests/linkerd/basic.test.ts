import { describe, it, expect } from '@jest/globals';

describe('Linkerd MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/linkerd.json');
    expect(config.linkerd).toHaveProperty('command');
    expect(config.linkerd).toHaveProperty('args');
    expect(config.linkerd).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/linkerd.json');
    expect(config.linkerd.command).toBe('npx');
    expect(Array.isArray(config.linkerd.args)).toBe(true);
  });

  it('should have linkerd package reference in args', async () => {
    const config = require('../../configs/linkerd.json');
    const argsStr = config.linkerd.args.join(' ');
    expect(argsStr).toMatch(/linkerd/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/linkerd.json');
    expect(config.linkerd.env).toHaveProperty('LINKERD_CONTROL_PLANE_URL');
  });
});