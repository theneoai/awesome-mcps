import { Command } from "commander";
import fs from 'fs-extra';
import { registryManager } from '../core/registry';
import { syncManager } from '../core/sync-manager';
import { logger } from '../utils/logger';
import { SkillNotFoundError } from '../types/errors';

export function createUninstallCommand(): Command {
  const command = new Command('uninstall');
  
  command
    .description('Uninstall a skill')
    .argument('<skill-name>', 'Name of the skill to uninstall')
    .action(async (skillName: string) => {
      await registryManager.initialize();
      
      const skill = registryManager.get(skillName);
      
      if (!skill) {
        throw new SkillNotFoundError(skillName);
      }
      
      // Remove from all adapters
      await syncManager.unsyncSkill(skillName);
      
      // Remove files
      await fs.remove(skill.path);
      
      // Remove from registry
      await registryManager.remove(skillName);
      
      logger.success(`Uninstalled '${skillName}'`);
    });
  
  return command;
}