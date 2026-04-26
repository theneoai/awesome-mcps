import { describe, it, expect } from '@jest/globals';

describe('RabbitMQ MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/rabbitmq.json');
    expect(config.rabbitmq).toHaveProperty('command');
    expect(config.rabbitmq).toHaveProperty('args');
    expect(config.rabbitmq).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/rabbitmq.json');
    expect(config.rabbitmq.env.RABBITMQ_URL).toBeDefined();
  });

  it('should validate RabbitMQ URL format', async () => {
    const config = require('../../configs/rabbitmq.json');
    const url = config.rabbitmq.env.RABBITMQ_URL;
    expect(url).toMatch(/^amqp(s)?:\/\/.+/);
  });
});