import { describe, it, expect } from '@jest/globals';

describe('Tekton MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/tekton.json');
    expect(config.tekton).toHaveProperty('command');
    expect(config.tekton).toHaveProperty('args');
    expect(config.tekton).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/tekton.json');
    expect(config.tekton.env.TEKTON_API_URL).toBeDefined();
    expect(config.tekton.env.TEKTON_NAMESPACE).toBeDefined();
  });
});