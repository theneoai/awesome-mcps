import { describe, it, expect } from '@jest/globals';

describe('Segment MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/segment.json');
    expect(config.segment).toHaveProperty('command');
    expect(config.segment).toHaveProperty('args');
    expect(config.segment).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/segment.json');
    expect(config.segment.env.SEGMENT_WRITE_KEY).toBeDefined();
  });
});