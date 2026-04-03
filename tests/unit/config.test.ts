import { ConfigManager } from '../../src/core/config';
import { DEFAULT_CONFIG } from '../../src/types/config';

describe('ConfigManager', () => {
  let configManager: ConfigManager;

  beforeEach(() => {
    configManager = new ConfigManager();
  });

  test('should have default config', () => {
    const config = configManager.get();
    expect(config.version).toBe(DEFAULT_CONFIG.version);
    expect(config.registry.official).toBe(DEFAULT_CONFIG.registry.official);
  });
});