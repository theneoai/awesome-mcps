import { describe, it, expect } from '@jest/globals';

describe('Linkerd MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/linkerd.json');
    expect(config.linkerd).toHaveProperty('command');
    expect(config.linkerd).toHaveProperty('args');
    expect(config.linkerd).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/linkerd.json');
    expect(config.linkerd.env.LINKERD_CONTROL_PLANE_URL).toBeDefined();
  });

  it('should validate Linkerd URL format', async () => {
    const config = require('../../configs/linkerd.json');
    const url = config.linkerd.env.LINKERD_CONTROL_PLANE_URL;
    try {
      new URL(url);
      expect(true).toBe(true);
    } catch {
      expect.fail('Invalid URL format');
    }
  });
});