import { describe, it, expect } from '@jest/globals';

describe('Kafka MCP', () => {
  it('should have valid config structure', async () => {
    const config = require('../../configs/kafka.json');
    expect(config.kafka).toHaveProperty('command');
    expect(config.kafka).toHaveProperty('args');
    expect(config.kafka).toHaveProperty('env');
  });

  it('should have valid command', async () => {
    const config = require('../../configs/kafka.json');
    expect(config.kafka.command).toBe('npx');
    expect(Array.isArray(config.kafka.args)).toBe(true);
  });

  it('should have kafka package reference in args', async () => {
    const config = require('../../configs/kafka.json');
    const argsStr = config.kafka.args.join(' ');
    expect(argsStr).toMatch(/kafka/i);
  });

  it('should have required env vars defined', async () => {
    const config = require('../../configs/kafka.json');
    expect(config.kafka.env).toHaveProperty('KAFKA_BROKERS');
    expect(config.kafka.env).toHaveProperty('KAFKA_CLIENT_ID');
  });
});