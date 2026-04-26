import { describe, it, expect } from '@jest/globals';

describe('Figma MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/figma.json');
    expect(config.figma).toHaveProperty('command');
    expect(config.figma).toHaveProperty('args');
    expect(config.figma).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/figma.json');
    expect(config.figma.env.FIGMA_ACCESS_TOKEN).toBeDefined();
  });
});