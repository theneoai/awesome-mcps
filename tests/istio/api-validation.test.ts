import { describe, it, expect } from '@jest/globals';

describe('Istio MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/istio.json');
    expect(config.istio).toHaveProperty('command');
    expect(config.istio).toHaveProperty('args');
    expect(config.istio).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/istio.json');
    expect(config.istio.env.ISTIOD_URL).toBeDefined();
    expect(config.istio.env.ISTIO_NAMESPACE).toBeDefined();
  });

  it('should validate Istiod URL format', async () => {
    const config = require('../../configs/istio.json');
    const url = config.istio.env.ISTIOD_URL;
    try {
      new URL(url);
      expect(true).toBe(true);
    } catch {
      expect.fail('Invalid URL format');
    }
  });
});