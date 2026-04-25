import { describe, it, expect } from '@jest/globals';

describe('Microsoft Teams MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/teams.json');
    expect(config.teams).toHaveProperty('command');
    expect(config.teams).toHaveProperty('args');
    expect(config.teams).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/teams.json');
    expect(config.teams.command).toBe('npx');
    expect(Array.isArray(config.teams.args)).toBe(true);
  });

  it('should have teams package reference in args', async () => {
    const config = require('../../configs/teams.json');
    const argsStr = config.teams.args.join(' ');
    expect(argsStr).toMatch(/teams/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/teams.json');
    expect(config.teams.env).toHaveProperty('TEAMS_TENANT_ID');
    expect(config.teams.env).toHaveProperty('TEAMS_CLIENT_ID');
    expect(config.teams.env).toHaveProperty('TEAMS_CLIENT_SECRET');
  });
});