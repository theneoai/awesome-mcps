import { describe, it, expect } from '@jest/globals';

describe('MinIO MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/minio.json');
    expect(config.minio).toHaveProperty('command');
    expect(config.minio).toHaveProperty('args');
    expect(config.minio).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/minio.json');
    expect(config.minio.env.MINIO_ENDPOINT).toBeDefined();
  });
});