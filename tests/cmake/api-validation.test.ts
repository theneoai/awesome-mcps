import { describe, it, expect } from '@jest/globals';

describe('CMake MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/cmake.json');
    expect(config.cmake).toHaveProperty('command');
    expect(config.cmake).toHaveProperty('args');
    expect(config.cmake).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/cmake.json');
    expect(config.cmake.env.CMAKE_PREFIX_PATH).toBeDefined();
    expect(config.cmake.env.CMAKE_GENERATOR).toBeDefined();
  });
});