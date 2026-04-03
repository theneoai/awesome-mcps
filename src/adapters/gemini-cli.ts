import path from 'path';
import os from 'os';
import fs from 'fs-extra';
import YAML from 'yaml';
import { BaseAdapter } from './base';
import { Skill } from '../types/skill';
import { AdapterNotInstalledError } from '../types/errors';

interface GeminiSkillsConfig {
  skills?: {
    [skillName: string]: {
      path: string;
      enabled: boolean;
    };
  };
}

export class GeminiCLIAdapter extends BaseAdapter {
  name = 'gemini-cli';
  syncMethod = 'config' as const;
  targetPath = path.join(os.homedir(), '.gemini');
  
  private get configPath(): string {
    return path.join(this.targetPath, 'config.yaml');
  }
  
  isInstalled(): boolean {
    return fs.existsSync(this.targetPath);
  }
  
  async sync(skill: Skill): Promise<void> {
    if (!this.isInstalled()) {
      throw new AdapterNotInstalledError(this.name);
    }
    
    let config: GeminiSkillsConfig = {};
    
    if (fs.existsSync(this.configPath)) {
      const content = await fs.readFile(this.configPath, 'utf-8');
      config = YAML.parse(content) || {};
    }
    
    if (!config.skills) {
      config.skills = {};
    }
    
    config.skills[skill.name] = {
      path: skill.path,
      enabled: true
    };
    
    await fs.writeFile(this.configPath, YAML.stringify(config));
  }
  
  async unsync(skillName: string): Promise<void> {
    if (!this.isInstalled() || !fs.existsSync(this.configPath)) {
      return;
    }
    
    const content = await fs.readFile(this.configPath, 'utf-8');
    const config: GeminiSkillsConfig = YAML.parse(content) || {};
    
    if (config.skills) {
      delete config.skills[skillName];
      await fs.writeFile(this.configPath, YAML.stringify(config));
    }
  }
  
  async getSyncedSkills(): Promise<string[]> {
    if (!this.isInstalled() || !fs.existsSync(this.configPath)) {
      return [];
    }
    
    const content = await fs.readFile(this.configPath, 'utf-8');
    const config: GeminiSkillsConfig = YAML.parse(content) || {};
    
    return Object.keys(config.skills || {});
  }
}
