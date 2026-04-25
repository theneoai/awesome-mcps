import { describe, it, expect } from '@jest/globals';

describe('Maven MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/maven.json');
    expect(config.maven).toHaveProperty('command');
    expect(config.maven).toHaveProperty('args');
    expect(config.maven).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/maven.json');
    expect(config.maven.env.MAVEN_REPO_URL).toBeDefined();
  });
});
