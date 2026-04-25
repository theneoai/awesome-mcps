import { describe, it, expect } from '@jest/globals';

describe('Argo CD MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/argocd.json');
    expect(config.argocd).toHaveProperty('command');
    expect(config.argocd).toHaveProperty('args');
    expect(config.argocd).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/argocd.json');
    expect(config.argocd.env.ARGOCD_SERVER).toBeDefined();
    expect(config.argocd.env.ARGOCD_AUTH_TOKEN).toBeDefined();
  });

  it('should validate ARGOCD_INSECURE is boolean string', async () => {
    const config = require('../../configs/argocd.json');
    const insecure = config.argocd.env.ARGOCD_INSECURE;
    expect(insecure === 'true' || insecure === 'false').toBe(true);
  });
});