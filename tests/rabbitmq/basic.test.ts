import { describe, it, expect } from '@jest/globals';

describe('RabbitMQ MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/rabbitmq.json');
    expect(config.rabbitmq).toHaveProperty('command');
    expect(config.rabbitmq).toHaveProperty('args');
    expect(config.rabbitmq).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/rabbitmq.json');
    expect(config.rabbitmq.command).toBe('npx');
    expect(Array.isArray(config.rabbitmq.args)).toBe(true);
  });

  it('should have rabbitmq package reference in args', async () => {
    const config = require('../../configs/rabbitmq.json');
    const argsStr = config.rabbitmq.args.join(' ');
    expect(argsStr).toMatch(/rabbitmq/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/rabbitmq.json');
    expect(config.rabbitmq.env).toHaveProperty('RABBITMQ_URL');
  });
});