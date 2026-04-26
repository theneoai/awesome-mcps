import { describe, it, expect } from '@jest/globals';

describe('YouTrack MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/youtrack.json');
    expect(config.youtrack).toHaveProperty('command');
    expect(config.youtrack).toHaveProperty('args');
    expect(config.youtrack).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/youtrack.json');
    expect(config.youtrack.command).toBe('npx');
    expect(Array.isArray(config.youtrack.args)).toBe(true);
  });

  it('should have youtrack package reference in args', async () => {
    const config = require('../../configs/youtrack.json');
    const argsStr = config.youtrack.args.join(' ');
    expect(argsStr).toMatch(/youtrack/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/youtrack.json');
    expect(config.youtrack.env).toHaveProperty('YOUTRACK_URL');
    expect(config.youtrack.env).toHaveProperty('YOUTRACK_TOKEN');
  });
});