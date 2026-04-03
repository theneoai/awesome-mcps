#!/usr/bin/env node

import { Command } from 'commander';
import { createInstallCommand } from './commands/install';
import { createUninstallCommand } from './commands/uninstall';
import { createUpdateCommand } from './commands/update';
import { createSearchCommand } from './commands/search';
import { createListCommand } from './commands/list';
import { createSyncCommand } from './commands/sync';
import { createStatusCommand } from './commands/status';
import { createConfigCommand } from './commands/config';
import { USMError } from './types/errors';
import { logger } from './utils/logger';

const program = new Command();

program
  .name('usm')
  .description('Universal Skill Manager - Manage agent skills across multiple tools')
  .version('0.1.0');

// Add commands
program.addCommand(createInstallCommand());
program.addCommand(createUninstallCommand());
program.addCommand(createUpdateCommand());
program.addCommand(createSearchCommand());
program.addCommand(createListCommand());
program.addCommand(createSyncCommand());
program.addCommand(createStatusCommand());
program.addCommand(createConfigCommand());

// Error handling
program.exitOverride();

async function main() {
  try {
    await program.parseAsync(process.argv);
  } catch (error: any) {
    if (error instanceof USMError) {
      logger.error(error.message);
      process.exit(1);
    } else if (error.code === 'commander.help') {
      // Help was displayed, exit normally
      process.exit(0);
    } else if (error.code === 'commander.version') {
      // Version was displayed, exit normally
      process.exit(0);
    } else {
      logger.error(`Unexpected error: ${error}`);
      process.exit(1);
    }
  }
}

main();