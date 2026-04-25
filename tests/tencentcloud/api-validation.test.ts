import { describe, it, expect } from '@jest/globals';

describe('Tencent Cloud MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/tencentcloud.json');
    expect(config.tencentcloud).toHaveProperty('command');
    expect(config.tencentcloud).toHaveProperty('args');
    expect(config.tencentcloud).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/tencentcloud.json');
    expect(config.tencentcloud.env.TENCENTCLOUD_SECRET_ID).toBeDefined();
    expect(config.tencentcloud.env.TENCENTCLOUD_SECRET_KEY).toBeDefined();
    expect(config.tencentcloud.env.TENCENTCLOUD_REGION).toBeDefined();
  });

  it('should validate region format', async () => {
    const config = require('../../configs/tencentcloud.json');
    const region = config.tencentcloud.env.TENCENTCLOUD_REGION;
    expect(region).toMatch(/^ap-\w+$/);
  });
});