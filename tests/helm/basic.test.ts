import { describe, it, expect } from '@jest/globals';

describe('Helm MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/helm.json');
    expect(config.helm).toHaveProperty('command');
    expect(config.helm).toHaveProperty('args');
    expect(config.helm).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/helm.json');
    expect(config.helm.command).toBe('npx');
    expect(Array.isArray(config.helm.args)).toBe(true);
  });

  it('should have helm package reference in args', async () => {
    const config = require('../../configs/helm.json');
    const argsStr = config.helm.args.join(' ');
    expect(argsStr).toMatch(/helm/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/helm.json');
    expect(config.helm.env).toHaveProperty('HELM_HOME');
  });
});