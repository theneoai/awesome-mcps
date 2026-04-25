import { describe, it, expect } from '@jest/globals';

describe('Kafka MCP API Validation', () => {
  it('should validate config file has proper structure', async () => {
    const config = require('../../configs/kafka.json');
    expect(config.kafka).toHaveProperty('command');
    expect(config.kafka).toHaveProperty('args');
    expect(config.kafka).toHaveProperty('env');
  });

  it('should validate required env vars are defined', async () => {
    const config = require('../../configs/kafka.json');
    expect(config.kafka.env.KAFKA_BROKERS).toBeDefined();
    expect(config.kafka.env.KAFKA_CLIENT_ID).toBeDefined();
  });

  it('should validate broker format', async () => {
    const config = require('../../configs/kafka.json');
    const brokers = config.kafka.env.KAFKA_BROKERS;
    expect(brokers).toMatch(/^[^,]+:\d+/);
  });
});