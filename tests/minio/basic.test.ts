import { describe, it, expect } from '@jest/globals';

describe('MinIO MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/minio.json');
    expect(config.minio).toHaveProperty('command');
    expect(config.minio).toHaveProperty('args');
    expect(config.minio).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/minio.json');
    expect(config.minio.command).toBe('npx');
    expect(Array.isArray(config.minio.args)).toBe(true);
  });

  it('should have minio package reference in args', async () => {
    const config = require('../../configs/minio.json');
    const argsStr = config.minio.args.join(' ');
    expect(argsStr).toMatch(/minio/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/minio.json');
    expect(config.minio.env).toHaveProperty('MINIO_ENDPOINT');
    expect(config.minio.env).toHaveProperty('MINIO_ACCESS_KEY');
  });
});