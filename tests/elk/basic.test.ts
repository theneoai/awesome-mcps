import { describe, it, expect } from '@jest/globals';

describe('ELK Stack MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/elk.json');
    expect(config.elk).toHaveProperty('command');
    expect(config.elk).toHaveProperty('args');
    expect(config.elk).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/elk.json');
    expect(config.elk.command).toBe('npx');
    expect(Array.isArray(config.elk.args)).toBe(true);
  });

  it('should have elasticsearch package reference in args', async () => {
    const config = require('../../configs/elk.json');
    const argsStr = config.elk.args.join(' ');
    expect(argsStr).toMatch(/elastic/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/elk.json');
    expect(config.elk.env).toHaveProperty('ELASTICSEARCH_URL');
  });
});