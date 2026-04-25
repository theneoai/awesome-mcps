import { describe, it, expect } from '@jest/globals';

describe('Route53 MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/route53.json');
    expect(config.route53).toHaveProperty('command');
    expect(config.route53).toHaveProperty('args');
    expect(config.route53).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/route53.json');
    expect(config.route53.command).toBe('npx');
    expect(Array.isArray(config.route53.args)).toBe(true);
  });

  it('should have route53 package reference in args', async () => {
    const config = require('../../configs/route53.json');
    const argsStr = config.route53.args.join(' ');
    expect(argsStr).toMatch(/route53/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/route53.json');
    expect(config.route53.env).toHaveProperty('AWS_ACCESS_KEY_ID');
    expect(config.route53.env).toHaveProperty('AWS_SECRET_ACCESS_KEY');
  });
});