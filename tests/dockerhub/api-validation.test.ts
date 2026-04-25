import { describe, it, expect } from '@jest/globals';

describe('Docker Hub MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/dockerhub.json');
    expect(config.dockerhub).toHaveProperty('command');
    expect(config.dockerhub).toHaveProperty('args');
    expect(config.dockerhub).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/dockerhub.json');
    expect(config.dockerhub.env.DOCKERHUB_TOKEN).toBeDefined();
    expect(config.dockerhub.env.DOCKERHUB_USERNAME).toBeDefined();
  });
});