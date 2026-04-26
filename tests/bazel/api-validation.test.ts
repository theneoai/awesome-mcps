import { describe, it, expect } from '@jest/globals';

describe('Bazel MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/bazel.json');
    expect(config.bazel).toHaveProperty('command');
    expect(config.bazel).toHaveProperty('args');
    expect(config.bazel).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/bazel.json');
    expect(config.bazel.env.BAZEL_WORKSPACE).toBeDefined();
  });

  it('should validate BAZEL_WORKSPACE path format', async () => {
    const config = require('../../configs/bazel.json');
    const workspace = config.bazel.env.BAZEL_WORKSPACE;
    expect(workspace).toMatch(/^(\.\/|\/)/);
  });
});