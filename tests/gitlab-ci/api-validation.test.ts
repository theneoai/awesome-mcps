import { describe, it, expect } from '@jest/globals';

describe('GitLab CI MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/gitlab-ci.json');
    expect(config['gitlab-ci']).toHaveProperty('command');
    expect(config['gitlab-ci']).toHaveProperty('args');
    expect(config['gitlab-ci']).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/gitlab-ci.json');
    expect(config['gitlab-ci'].env.GITLAB_URL).toBeDefined();
    expect(config['gitlab-ci'].env.GITLAB_TOKEN).toBeDefined();
  });

  it('should validate GitLab URL format is valid', async () => {
    const config = require('../../configs/gitlab-ci.json');
    const url = config['gitlab-ci'].env.GITLAB_URL;
    try {
      new URL(url);
      expect(true).toBe(true);
    } catch {
      expect.fail('Invalid URL format');
    }
  });
});