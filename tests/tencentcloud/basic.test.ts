import { describe, it, expect } from '@jest/globals';

describe('Tencent Cloud MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/tencentcloud.json');
    expect(config.tencentcloud).toHaveProperty('command');
    expect(config.tencentcloud).toHaveProperty('args');
    expect(config.tencentcloud).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/tencentcloud.json');
    expect(config.tencentcloud.command).toBe('npx');
    expect(Array.isArray(config.tencentcloud.args)).toBe(true);
  });

  it('should have tencentcloud package reference in args', async () => {
    const config = require('../../configs/tencentcloud.json');
    const argsStr = config.tencentcloud.args.join(' ');
    expect(argsStr).toMatch(/tencent/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/tencentcloud.json');
    expect(config.tencentcloud.env).toHaveProperty('TENCENTCLOUD_SECRET_ID');
    expect(config.tencentcloud.env).toHaveProperty('TENCENTCLOUD_SECRET_KEY');
    expect(config.tencentcloud.env).toHaveProperty('TENCENTCLOUD_REGION');
  });

  it('should validate region format', async () => {
    const config = require('../../configs/tencentcloud.json');
    const region = config.tencentcloud.env.TENCENTCLOUD_REGION;
    expect(region).toMatch(/^ap-\w+$/);
  });
});