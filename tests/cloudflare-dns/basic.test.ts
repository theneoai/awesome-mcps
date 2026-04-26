import { describe, it, expect } from '@jest/globals';

describe('Cloudflare DNS MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/cloudflare-dns.json');
    expect(config['cloudflare-dns']).toHaveProperty('command');
    expect(config['cloudflare-dns']).toHaveProperty('args');
    expect(config['cloudflare-dns']).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/cloudflare-dns.json');
    expect(config['cloudflare-dns'].command).toBe('npx');
    expect(Array.isArray(config['cloudflare-dns'].args)).toBe(true);
  });

  it('should have cloudflare package reference in args', async () => {
    const config = require('../../configs/cloudflare-dns.json');
    const argsStr = config['cloudflare-dns'].args.join(' ');
    expect(argsStr).toMatch(/cloudflare/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/cloudflare-dns.json');
    expect(config['cloudflare-dns'].env).toHaveProperty('CLOUDFLARE_API_TOKEN');
  });
});