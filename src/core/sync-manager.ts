import { Skill } from '../types/skill';
import { adapters, getAdapter } from '../adapters';
import { configManager } from './config';
import { logger } from '../utils/logger';

export class SyncManager {
  async syncSkill(skill: Skill, tool?: string): Promise<void> {
    const targetAdapters = tool 
      ? [getAdapter(tool)].filter(Boolean)
      : adapters.filter(a => configManager.isToolEnabled(a.name) && a.isInstalled());
    
    for (const adapter of targetAdapters) {
      if (!adapter) continue;
      
      try {
        await adapter.sync(skill);
        logger.success(`Synced '${skill.name}' to ${adapter.name}`);
      } catch (error) {
        logger.error(`Failed to sync '${skill.name}' to ${adapter.name}: ${error}`);
        throw error;
      }
    }
  }

  async unsyncSkill(skillName: string, tool?: string): Promise<void> {
    const targetAdapters = tool
      ? [getAdapter(tool)].filter(Boolean)
      : adapters;
    
    for (const adapter of targetAdapters) {
      if (!adapter) continue;
      
      try {
        await adapter.unsync(skillName);
        logger.success(`Removed '${skillName}' from ${adapter.name}`);
      } catch (error) {
        logger.error(`Failed to remove '${skillName}' from ${adapter.name}: ${error}`);
      }
    }
  }

  async syncAll(): Promise<void> {
    const { registryManager } = await import('./registry');
    await registryManager.initialize();
    
    const skills = Object.values(registryManager.getAll());
    
    for (const skill of skills) {
      await this.syncSkill(skill);
    }
    
    logger.success(`Synced ${skills.length} skills`);
  }

  async getStatus(): Promise<Record<string, string[]>> {
    const status: Record<string, string[]> = {};
    
    for (const adapter of adapters) {
      if (adapter.isInstalled()) {
        status[adapter.name] = await adapter.getSyncedSkills();
      } else {
        status[adapter.name] = ['not installed'];
      }
    }
    
    return status;
  }
}

export const syncManager = new SyncManager();