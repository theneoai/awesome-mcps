import { describe, it, expect } from '@jest/globals';

describe('Cloudflare DNS MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/cloudflare-dns.json');
    expect(config['cloudflare-dns']).toHaveProperty('command');
    expect(config['cloudflare-dns']).toHaveProperty('args');
    expect(config['cloudflare-dns']).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/cloudflare-dns.json');
    expect(config['cloudflare-dns'].env.CLOUDFLARE_API_TOKEN).toBeDefined();
  });
});