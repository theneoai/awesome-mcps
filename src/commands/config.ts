import { Command } from 'commander';
import { configManager } from '../core/config';
import { logger } from '../utils/logger';

export function createConfigCommand(): Command {
  const command = new Command('config');
  
  command
    .description('Manage USM configuration');

  command
    .command('get <key>')
    .description('Get configuration value')
    .action(async (key: string) => {
      await configManager.initialize();
      const config = configManager.get();
      
      const keys = key.split('.');
      let value: any = config;
      
      for (const k of keys) {
        value = value?.[k];
      }
      
      if (value !== undefined) {
        console.log(value);
      } else {
        logger.error(`Configuration key '${key}' not found`);
        process.exit(1);
      }
    });

  command
    .command('set <key> <value>')
    .description('Set configuration value')
    .action(async (key: string, value: string) => {
      await configManager.initialize();
      
      if (key === 'github.token') {
        await configManager.setGithubToken(value);
        logger.success('GitHub token set successfully');
      } else {
        logger.error(`Configuration key '${key}' is not supported`);
        process.exit(1);
      }
    });

  command
    .command('list')
    .description('List all configuration')
    .action(async () => {
      await configManager.initialize();
      console.log(JSON.stringify(configManager.get(), null, 2));
    });

  return command;
}
