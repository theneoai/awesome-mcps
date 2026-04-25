import { describe, it, expect } from '@jest/globals';

describe('Baidu Cloud MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/baiducloud.json');
    expect(config.baiducloud).toHaveProperty('command');
    expect(config.baiducloud).toHaveProperty('args');
    expect(config.baiducloud).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/baiducloud.json');
    expect(config.baiducloud.env.BAIDU_CLOUD_AK).toBeDefined();
    expect(config.baiducloud.env.BAIDU_CLOUD_SK).toBeDefined();
    expect(config.baiducloud.env.BAIDU_CLOUD_REGION).toBeDefined();
  });
});