import { describe, it, expect } from '@jest/globals';

describe('Sourcegraph MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/sourcegraph.json');
    expect(config.sourcegraph).toHaveProperty('command');
    expect(config.sourcegraph).toHaveProperty('args');
    expect(config.sourcegraph).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/sourcegraph.json');
    expect(config.sourcegraph.command).toBe('npx');
    expect(Array.isArray(config.sourcegraph.args)).toBe(true);
  });

  it('should have sourcegraph package reference in args', async () => {
    const config = require('../../configs/sourcegraph.json');
    const argsStr = config.sourcegraph.args.join(' ');
    expect(argsStr).toMatch(/sourcegraph/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/sourcegraph.json');
    expect(config.sourcegraph.env).toHaveProperty('SRC_ENDPOINT');
    expect(config.sourcegraph.env).toHaveProperty('SRC_ACCESS_TOKEN');
  });
});
