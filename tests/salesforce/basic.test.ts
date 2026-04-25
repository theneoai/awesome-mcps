import { describe, it, expect } from '@jest/globals';

describe('Salesforce MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/salesforce.json');
    expect(config.salesforce).toHaveProperty('command');
    expect(config.salesforce).toHaveProperty('args');
    expect(config.salesforce).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/salesforce.json');
    expect(config.salesforce.command).toBe('npx');
    expect(Array.isArray(config.salesforce.args)).toBe(true);
  });

  it('should have salesforce package reference in args', async () => {
    const config = require('../../configs/salesforce.json');
    const argsStr = config.salesforce.args.join(' ');
    expect(argsStr).toMatch(/salesforce/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/salesforce.json');
    expect(config.salesforce.env).toHaveProperty('SALESFORCE_INSTANCE_URL');
  });
});