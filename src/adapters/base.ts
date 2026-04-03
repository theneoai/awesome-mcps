import path from 'path';
import os from 'os';
import { Adapter } from '../types/adapter';
import { Skill } from '../types/skill';
import { getSkillPath } from '../utils/path';

export abstract class BaseAdapter implements Adapter {
  abstract name: string;
  abstract syncMethod: 'symlink' | 'config';
  abstract targetPath: string;
  
  enabled = true;
  
  abstract isInstalled(): boolean;
  abstract sync(skill: Skill): Promise<void>;
  abstract unsync(skillName: string): Promise<void>;
  abstract getSyncedSkills(): Promise<string[]>;
  
  protected getGlobalSkillPath(skillName: string, source: string): string {
    return getSkillPath(skillName, source);
  }
}
