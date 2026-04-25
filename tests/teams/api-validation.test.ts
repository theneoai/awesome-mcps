import { describe, it, expect } from '@jest/globals';

describe('Microsoft Teams MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/teams.json');
    expect(config.teams).toHaveProperty('command');
    expect(config.teams).toHaveProperty('args');
    expect(config.teams).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/teams.json');
    expect(config.teams.env.TEAMS_TENANT_ID).toBeDefined();
    expect(config.teams.env.TEAMS_CLIENT_ID).toBeDefined();
    expect(config.teams.env.TEAMS_CLIENT_SECRET).toBeDefined();
  });
});