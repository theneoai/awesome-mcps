import { describe, it, expect } from '@jest/globals';

describe('Helm MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/helm.json');
    expect(config.helm).toHaveProperty('command');
    expect(config.helm).toHaveProperty('args');
    expect(config.helm).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/helm.json');
    expect(config.helm.env.HELM_HOME).toBeDefined();
  });
});