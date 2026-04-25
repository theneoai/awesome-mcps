import { describe, it, expect } from '@jest/globals';

describe('Google Meet MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/google-meet.json');
    expect(config['google-meet']).toHaveProperty('command');
    expect(config['google-meet']).toHaveProperty('args');
    expect(config['google-meet']).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/google-meet.json');
    expect(config['google-meet'].command).toBe('npx');
    expect(Array.isArray(config['google-meet'].args)).toBe(true);
  });

  it('should have google/meet package reference in args', async () => {
    const config = require('../../configs/google-meet.json');
    const argsStr = config['google-meet'].args.join(' ');
    expect(argsStr).toMatch(/google/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/google-meet.json');
    expect(config['google-meet'].env).toHaveProperty('GOOGLE_CALENDAR_ID');
  });
});