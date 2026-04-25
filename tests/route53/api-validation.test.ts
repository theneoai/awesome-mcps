import { describe, it, expect } from '@jest/globals';

describe('Route53 MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/route53.json');
    expect(config.route53).toHaveProperty('command');
    expect(config.route53).toHaveProperty('args');
    expect(config.route53).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/route53.json');
    expect(config.route53.env.AWS_ACCESS_KEY_ID).toBeDefined();
    expect(config.route53.env.AWS_SECRET_ACCESS_KEY).toBeDefined();
  });
});