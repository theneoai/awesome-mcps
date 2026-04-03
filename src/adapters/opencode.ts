import path from 'path';
import os from 'os';
import fs from 'fs-extra';
import { BaseAdapter } from './base';
import { Skill } from '../types/skill';
import { AdapterNotInstalledError } from '../types/errors';

export class OpenCodeAdapter extends BaseAdapter {
  name = 'opencode';
  syncMethod = 'symlink' as const;
  targetPath = path.join(os.homedir(), '.config', 'opencode', 'skills');
  
  isInstalled(): boolean {
    return fs.existsSync(path.join(os.homedir(), '.config', 'opencode'));
  }
  
  async sync(skill: Skill): Promise<void> {
    if (!this.isInstalled()) {
      throw new AdapterNotInstalledError(this.name);
    }
    
    const source = skill.path;
    const target = path.join(this.targetPath, skill.name);
    
    await fs.ensureDir(this.targetPath);
    
    if (fs.existsSync(target)) {
      const stat = await fs.lstat(target);
      if (stat.isSymbolicLink()) {
        await fs.unlink(target);
      } else {
        await fs.remove(target);
      }
    }
    
    await fs.ensureSymlink(source, target);
  }
  
  async unsync(skillName: string): Promise<void> {
    if (!this.isInstalled()) {
      return;
    }
    
    const target = path.join(this.targetPath, skillName);
    if (fs.existsSync(target)) {
      await fs.unlink(target);
    }
  }
  
  async getSyncedSkills(): Promise<string[]> {
    if (!this.isInstalled() || !fs.existsSync(this.targetPath)) {
      return [];
    }
    
    const entries = await fs.readdir(this.targetPath);
    const skills: string[] = [];
    
    for (const entry of entries) {
      const fullPath = path.join(this.targetPath, entry);
      const stat = await fs.lstat(fullPath);
      if (stat.isSymbolicLink()) {
        skills.push(entry);
      }
    }
    
    return skills;
  }
}
