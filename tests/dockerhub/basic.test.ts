import { describe, it, expect } from '@jest/globals';

describe('Docker Hub MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/dockerhub.json');
    expect(config.dockerhub).toHaveProperty('command');
    expect(config.dockerhub).toHaveProperty('args');
    expect(config.dockerhub).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/dockerhub.json');
    expect(config.dockerhub.command).toBe('npx');
    expect(Array.isArray(config.dockerhub.args)).toBe(true);
  });

  it('should have dockerhub package reference in args', async () => {
    const config = require('../../configs/dockerhub.json');
    const argsStr = config.dockerhub.args.join(' ');
    expect(argsStr).toMatch(/docker/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/dockerhub.json');
    expect(config.dockerhub.env).toHaveProperty('DOCKERHUB_TOKEN');
    expect(config.dockerhub.env).toHaveProperty('DOCKERHUB_USERNAME');
  });
});