import { describe, it, expect } from '@jest/globals';

describe('GitLab CI MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/gitlab-ci.json');
    expect(config['gitlab-ci']).toHaveProperty('command');
    expect(config['gitlab-ci']).toHaveProperty('args');
    expect(config['gitlab-ci']).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/gitlab-ci.json');
    expect(config['gitlab-ci'].command).toBe('npx');
    expect(Array.isArray(config['gitlab-ci'].args)).toBe(true);
  });

  it('should have gitlab package reference in args', async () => {
    const config = require('../../configs/gitlab-ci.json');
    const argsStr = config['gitlab-ci'].args.join(' ');
    expect(argsStr).toMatch(/gitlab/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/gitlab-ci.json');
    expect(config['gitlab-ci'].env).toHaveProperty('GITLAB_URL');
    expect(config['gitlab-ci'].env).toHaveProperty('GITLAB_TOKEN');
  });
});