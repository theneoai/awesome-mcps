import { describe, it, expect } from '@jest/globals';

describe('Tekton MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/tekton.json');
    expect(config.tekton).toHaveProperty('command');
    expect(config.tekton).toHaveProperty('args');
    expect(config.tekton).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/tekton.json');
    expect(config.tekton.command).toBe('npx');
    expect(Array.isArray(config.tekton.args)).toBe(true);
  });

  it('should have tekton package reference in args', async () => {
    const config = require('../../configs/tekton.json');
    const argsStr = config.tekton.args.join(' ');
    expect(argsStr).toMatch(/tekton/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/tekton.json');
    expect(config.tekton.env).toHaveProperty('TEKTON_API_URL');
    expect(config.tekton.env).toHaveProperty('TEKTON_NAMESPACE');
  });
});