import { describe, it, expect } from '@jest/globals';

describe('Huawei Cloud MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/huaweicloud.json');
    expect(config.huaweicloud).toHaveProperty('command');
    expect(config.huaweicloud).toHaveProperty('args');
    expect(config.huaweicloud).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/huaweicloud.json');
    expect(config.huaweicloud.command).toBe('npx');
    expect(Array.isArray(config.huaweicloud.args)).toBe(true);
  });

  it('should have huaweicloud package reference in args', async () => {
    const config = require('../../configs/huaweicloud.json');
    const argsStr = config.huaweicloud.args.join(' ');
    expect(argsStr).toMatch(/huawei/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/huaweicloud.json');
    expect(config.huaweicloud.env).toHaveProperty('HUAWEI_CLOUD_ACCESS_KEY');
    expect(config.huaweicloud.env).toHaveProperty('HUAWEI_CLOUD_SECRET_KEY');
    expect(config.huaweicloud.env).toHaveProperty('HUAWEI_CLOUD_REGION');
  });
});