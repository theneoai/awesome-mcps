import { Command } from "commander";
import chalk from 'chalk';
import { githubClient } from '../core/github-client';
import { configManager } from '../core/config';
import { logger } from '../utils/logger';

export function createSearchCommand(): Command {
  const command = new Command('search');
  
  command
    .description('Search for skills in the registry')
    .argument('<keyword>', 'Search keyword')
    .option('--tag <tag>', 'Filter by tag')
    .option('--author <author>', 'Filter by author')
    .action(async (keyword: string, options: { tag?: string; author?: string }) => {
      await configManager.initialize();
      
      logger.info(`Searching for '${keyword}'...`);
      
      const skills = await githubClient.fetchSkillIndex();
      
      let results = skills.filter(s => 
        s.name.toLowerCase().includes(keyword.toLowerCase()) ||
        s.description.toLowerCase().includes(keyword.toLowerCase())
      );
      
      if (options.tag) {
        results = results.filter(s => s.tags.includes(options.tag!));
      }
      
      if (options.author) {
        results = results.filter(s => s.author.toLowerCase() === options.author!.toLowerCase());
      }
      
      if (results.length === 0) {
        logger.info('No skills found');
        return;
      }
      
      console.log(chalk.bold(`\nFound ${results.length} skills:\n`));
      
      for (const skill of results) {
        console.log(`  ${chalk.cyan(skill.name)} ${chalk.gray(skill.version)}`);
        console.log(`    ${skill.description}`);
        console.log(`    Author: ${chalk.yellow(skill.author)} | Tags: ${skill.tags.join(', ')}`);
        console.log(`    Install: ${chalk.green(`usm install ${skill.repository}`)}\n`);
      }
    });
  
  return command;
}