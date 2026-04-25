import { describe, it, expect } from '@jest/globals';

describe('Maven MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/maven.json');
    expect(config.maven).toHaveProperty('command');
    expect(config.maven).toHaveProperty('args');
    expect(config.maven).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/maven.json');
    expect(config.maven.command).toBe('npx');
    expect(Array.isArray(config.maven.args)).toBe(true);
  });

  it('should have maven package reference in args', async () => {
    const config = require('../../configs/maven.json');
    const argsStr = config.maven.args.join(' ');
    expect(argsStr).toMatch(/maven/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/maven.json');
    expect(config.maven.env).toHaveProperty('MAVEN_REPO_URL');
  });
});
