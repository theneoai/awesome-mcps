import { Command } from "commander";
import { registryManager } from '../core/registry';
import { syncManager } from '../core/sync-manager';
import { logger } from '../utils/logger';
import { SkillNotFoundError } from '../types/errors';

export function createUpdateCommand(): Command {
  const command = new Command('update');
  
  command
    .description('Update a skill')
    .argument('[skill-name]', 'Name of the skill to update')
    .option('--all', 'Update all skills')
    .action(async (skillName: string | undefined, options: { all?: boolean }) => {
      await registryManager.initialize();
      
      if (options.all) {
        await updateAll();
      } else if (skillName) {
        await updateOne(skillName);
      } else {
        logger.error('Please specify a skill name or use --all');
        process.exit(1);
      }
    });
  
  return command;
}

async function updateOne(skillName: string): Promise<void> {
  const skill = registryManager.get(skillName);
  
  if (!skill) {
    throw new SkillNotFoundError(skillName);
  }
  
  // TODO: Implement actual update logic based on source
  logger.info(`Checking for updates for '${skillName}'...`);
  logger.warning(`Update not yet implemented for ${skill.source} skills`);
}

async function updateAll(): Promise<void> {
  const skills = Object.values(registryManager.getAll());
  
  if (skills.length === 0) {
    logger.info('No skills installed');
    return;
  }
  
  for (const skill of skills) {
    await updateOne(skill.name);
  }
}