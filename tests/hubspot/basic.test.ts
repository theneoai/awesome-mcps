import { describe, it, expect } from '@jest/globals';

describe('HubSpot MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/hubspot.json');
    expect(config.hubspot).toHaveProperty('command');
    expect(config.hubspot).toHaveProperty('args');
    expect(config.hubspot).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/hubspot.json');
    expect(config.hubspot.command).toBe('npx');
    expect(Array.isArray(config.hubspot.args)).toBe(true);
  });

  it('should have hubspot package reference in args', async () => {
    const config = require('../../configs/hubspot.json');
    const argsStr = config.hubspot.args.join(' ');
    expect(argsStr).toMatch(/hubspot/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/hubspot.json');
    expect(config.hubspot.env).toHaveProperty('HUBSPOT_ACCESS_TOKEN');
  });
});