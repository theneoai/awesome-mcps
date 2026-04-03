import path from 'path';
import os from 'os';
import fs from 'fs-extra';
import { BaseAdapter } from './base';
import { Skill } from '../types/skill';
import { AdapterNotInstalledError } from '../types/errors';
import { safeReadJson, writeJson } from '../utils/fs';

interface ClaudeSkillsConfig {
  [skillName: string]: {
    path: string;
    autoLoad: boolean;
  };
}

export class ClaudeCodeAdapter extends BaseAdapter {
  name = 'claude-code';
  syncMethod = 'config' as const;
  targetPath = path.join(os.homedir(), '.claude');
  
  private get configPath(): string {
    return path.join(this.targetPath, 'skills.json');
  }
  
  isInstalled(): boolean {
    return fs.existsSync(this.targetPath);
  }
  
  async sync(skill: Skill): Promise<void> {
    if (!this.isInstalled()) {
      throw new AdapterNotInstalledError(this.name);
    }
    
    const config = await safeReadJson<ClaudeSkillsConfig>(this.configPath, {});
    
    config[skill.name] = {
      path: skill.path,
      autoLoad: true
    };
    
    await writeJson(this.configPath, config);
  }
  
  async unsync(skillName: string): Promise<void> {
    if (!this.isInstalled()) {
      return;
    }
    
    const config = await safeReadJson<ClaudeSkillsConfig>(this.configPath, {});
    delete config[skillName];
    await writeJson(this.configPath, config);
  }
  
  async getSyncedSkills(): Promise<string[]> {
    if (!this.isInstalled()) {
      return [];
    }
    
    const config = await safeReadJson<ClaudeSkillsConfig>(this.configPath, {});
    return Object.keys(config);
  }
}
