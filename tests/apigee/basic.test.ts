import { describe, it, expect } from '@jest/globals';

describe('Apigee MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/apigee.json');
    expect(config.apigee).toHaveProperty('command');
    expect(config.apigee).toHaveProperty('args');
    expect(config.apigee).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/apigee.json');
    expect(config.apigee.command).toBe('npx');
    expect(Array.isArray(config.apigee.args)).toBe(true);
  });

  it('should have apigee package reference in args', async () => {
    const config = require('../../configs/apigee.json');
    const argsStr = config.apigee.args.join(' ');
    expect(argsStr).toMatch(/apigee/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/apigee.json');
    expect(config.apigee.env).toHaveProperty('APIGEE_ORG');
    expect(config.apigee.env).toHaveProperty('APIGEE_TOKEN');
  });
});