import { describe, it, expect } from '@jest/globals';

describe('Jenkins MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/jenkins.json');
    expect(config.jenkins).toHaveProperty('command');
    expect(config.jenkins).toHaveProperty('args');
    expect(config.jenkins).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/jenkins.json');
    expect(config.jenkins.env.JENKINS_URL).toBeDefined();
    expect(config.jenkins.env.JENKINS_USER).toBeDefined();
    expect(config.jenkins.env.JENKINS_API_TOKEN).toBeDefined();
  });

  it('should validate Jenkins URL format is valid', async () => {
    const config = require('../../configs/jenkins.json');
    const url = config.jenkins.env.JENKINS_URL;
    try {
      new URL(url);
      expect(true).toBe(true);
    } catch {
      expect.fail('Invalid URL format');
    }
  });
});