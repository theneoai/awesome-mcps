import { describe, it, expect } from '@jest/globals';

describe('PyPI MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/pypi.json');
    expect(config.pypi).toHaveProperty('command');
    expect(config.pypi).toHaveProperty('args');
    expect(config.pypi).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/pypi.json');
    expect(config.pypi.command).toBe('pip');
    expect(Array.isArray(config.pypi.args)).toBe(true);
  });

  it('should have pypi package reference in args', async () => {
    const config = require('../../configs/pypi.json');
    const argsStr = config.pypi.args.join(' ');
    expect(argsStr).toMatch(/pypi/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/pypi.json');
    expect(config.pypi.env).toHaveProperty('PYPI_TOKEN');
  });
});
