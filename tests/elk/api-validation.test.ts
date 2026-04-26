import { describe, it, expect } from '@jest/globals';

describe('ELK Stack MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/elk.json');
    expect(config.elk).toHaveProperty('command');
    expect(config.elk).toHaveProperty('args');
    expect(config.elk).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/elk.json');
    expect(config.elk.env.ELASTICSEARCH_URL).toBeDefined();
  });

  it('should validate Elasticsearch URL format', async () => {
    const config = require('../../configs/elk.json');
    const url = config.elk.env.ELASTICSEARCH_URL;
    try {
      new URL(url);
      expect(true).toBe(true);
    } catch {
      expect.fail('Invalid URL format');
    }
  });
});