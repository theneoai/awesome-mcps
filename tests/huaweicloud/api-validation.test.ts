import { describe, it, expect } from '@jest/globals';

describe('Huawei Cloud MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/huaweicloud.json');
    expect(config.huaweicloud).toHaveProperty('command');
    expect(config.huaweicloud).toHaveProperty('args');
    expect(config.huaweicloud).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/huaweicloud.json');
    expect(config.huaweicloud.env.HUAWEI_CLOUD_ACCESS_KEY).toBeDefined();
    expect(config.huaweicloud.env.HUAWEI_CLOUD_SECRET_KEY).toBeDefined();
    expect(config.huaweicloud.env.HUAWEI_CLOUD_REGION).toBeDefined();
  });
});