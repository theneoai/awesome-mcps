import { describe, it, expect } from '@jest/globals';

describe('CMake MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/cmake.json');
    expect(config.cmake).toHaveProperty('command');
    expect(config.cmake).toHaveProperty('args');
    expect(config.cmake).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/cmake.json');
    expect(config.cmake.command).toBe('pip');
    expect(Array.isArray(config.cmake.args)).toBe(true);
  });

  it('should have cmake package reference in args', async () => {
    const config = require('../../configs/cmake.json');
    const argsStr = config.cmake.args.join(' ');
    expect(argsStr).toMatch(/cmake/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/cmake.json');
    expect(config.cmake.env).toHaveProperty('CMAKE_PREFIX_PATH');
    expect(config.cmake.env).toHaveProperty('CMAKE_GENERATOR');
  });
});