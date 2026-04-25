import { describe, it, expect } from '@jest/globals';

describe('Argo CD MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/argocd.json');
    expect(config.argocd).toHaveProperty('command');
    expect(config.argocd).toHaveProperty('args');
    expect(config.argocd).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/argocd.json');
    expect(config.argocd.command).toBe('npx');
    expect(Array.isArray(config.argocd.args)).toBe(true);
  });

  it('should have argocd package reference in args', async () => {
    const config = require('../../configs/argocd.json');
    const argsStr = config.argocd.args.join(' ');
    expect(argsStr).toMatch(/argocd/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/argocd.json');
    expect(config.argocd.env).toHaveProperty('ARGOCD_SERVER');
    expect(config.argocd.env).toHaveProperty('ARGOCD_AUTH_TOKEN');
  });
});