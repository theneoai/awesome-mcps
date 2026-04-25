import { describe, it, expect } from '@jest/globals';

describe('Bazel MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/bazel.json');
    expect(config.bazel).toHaveProperty('command');
    expect(config.bazel).toHaveProperty('args');
    expect(config.bazel).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/bazel.json');
    expect(config.bazel.command).toBe('npx');
    expect(Array.isArray(config.bazel.args)).toBe(true);
  });

  it('should have bazel package reference in args', async () => {
    const config = require('../../configs/bazel.json');
    const argsStr = config.bazel.args.join(' ');
    expect(argsStr).toMatch(/bazel/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/bazel.json');
    expect(config.bazel.env).toHaveProperty('BAZEL_WORKSPACE');
  });
});