import { describe, it, expect } from '@jest/globals';

describe('Segment MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/segment.json');
    expect(config.segment).toHaveProperty('command');
    expect(config.segment).toHaveProperty('args');
    expect(config.segment).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/segment.json');
    expect(config.segment.command).toBe('npx');
    expect(Array.isArray(config.segment.args)).toBe(true);
  });

  it('should have segment package reference in args', async () => {
    const config = require('../../configs/segment.json');
    const argsStr = config.segment.args.join(' ');
    expect(argsStr).toMatch(/segment/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/segment.json');
    expect(config.segment.env).toHaveProperty('SEGMENT_WRITE_KEY');
  });
});