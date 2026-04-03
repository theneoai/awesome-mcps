import { Command } from "commander";
import chalk from 'chalk';
import { registryManager } from '../core/registry';
import { logger } from '../utils/logger';

export function createListCommand(): Command {
  const command = new Command('list');
  
  command
    .description('List installed skills')
    .option('--outdated', 'Show only outdated skills')
    .action(async (options: { outdated?: boolean }) => {
      await registryManager.initialize();
      
      const skills = Object.values(registryManager.getAll());
      
      if (skills.length === 0) {
        logger.info('No skills installed');
        return;
      }
      
      if (options.outdated) {
        const outdated = registryManager.getOutdated();
        if (outdated.length === 0) {
          logger.info('All skills are up to date');
          return;
        }
        
        console.log(chalk.bold('\nOutdated Skills:'));
        for (const skill of outdated) {
          console.log(`  ${chalk.yellow(skill.name)} ${skill.version}`);
        }
      } else {
        console.log(chalk.bold('\nInstalled Skills:'));
        for (const skill of skills) {
          const sourceColor = {
            official: chalk.green,
            community: chalk.blue,
            github: chalk.magenta,
            local: chalk.gray
          }[skill.source];
          
          console.log(`  ${chalk.cyan(skill.name)} ${chalk.gray(skill.version)} ${sourceColor(`[${skill.source}]`)}`);
        }
        console.log(`\nTotal: ${skills.length} skills`);
      }
    });
  
  return command;
}