import { describe, it, expect } from '@jest/globals';

describe('Baidu Cloud MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/baiducloud.json');
    expect(config.baiducloud).toHaveProperty('command');
    expect(config.baiducloud).toHaveProperty('args');
    expect(config.baiducloud).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/baiducloud.json');
    expect(config.baiducloud.command).toBe('npx');
    expect(Array.isArray(config.baiducloud.args)).toBe(true);
  });

  it('should have baidu package reference in args', async () => {
    const config = require('../../configs/baiducloud.json');
    const argsStr = config.baiducloud.args.join(' ');
    expect(argsStr).toMatch(/baidu/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/baiducloud.json');
    expect(config.baiducloud.env).toHaveProperty('BAIDU_CLOUD_AK');
    expect(config.baiducloud.env).toHaveProperty('BAIDU_CLOUD_SK');
    expect(config.baiducloud.env).toHaveProperty('BAIDU_CLOUD_REGION');
  });
});