import { Command } from "commander";
import { registryManager } from '../core/registry';
import { syncManager } from '../core/sync-manager';
import { logger } from '../utils/logger';
import { SkillNotFoundError } from '../types/errors';

export function createSyncCommand(): Command {
  const command = new Command('sync');
  
  command
    .description('Sync skills to agent tools')
    .argument('[skill-name]', 'Name of the skill to sync (syncs all if omitted)')
    .option('--tool <tool>', 'Sync only to specific tool')
    .action(async (skillName: string | undefined, options: { tool?: string }) => {
      await registryManager.initialize();
      
      if (skillName) {
        const skill = registryManager.get(skillName);
        
        if (!skill) {
          throw new SkillNotFoundError(skillName);
        }
        
        await syncManager.syncSkill(skill, options.tool);
      } else {
        await syncManager.syncAll();
      }
    });
  
  return command;
}