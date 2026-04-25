import { describe, it, expect } from '@jest/globals';

describe('Jenkins MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/jenkins.json');
    expect(config.jenkins).toHaveProperty('command');
    expect(config.jenkins).toHaveProperty('args');
    expect(config.jenkins).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/jenkins.json');
    expect(config.jenkins.command).toBe('npx');
    expect(Array.isArray(config.jenkins.args)).toBe(true);
  });

  it('should have jenkins package reference in args', async () => {
    const config = require('../../configs/jenkins.json');
    const argsStr = config.jenkins.args.join(' ');
    expect(argsStr).toMatch(/jenkins/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/jenkins.json');
    expect(config.jenkins.env).toHaveProperty('JENKINS_URL');
    expect(config.jenkins.env).toHaveProperty('JENKINS_USER');
    expect(config.jenkins.env).toHaveProperty('JENKINS_API_TOKEN');
  });

  it('should validate Jenkins URL format', async () => {
    const config = require('../../configs/jenkins.json');
    const url = config.jenkins.env.JENKINS_URL;
    expect(url).toMatch(/^https?:\/\/.+/);
  });
});