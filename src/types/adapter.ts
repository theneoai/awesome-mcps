import { Skill } from './skill';

export interface Adapter {
  name: string;
  enabled: boolean;
  syncMethod: 'symlink' | 'config';
  targetPath: string;
  isInstalled(): boolean;
  sync(skill: Skill): Promise<void>;
  unsync(skillName: string): Promise<void>;
  getSyncedSkills(): Promise<string[]>;
}

export interface AdapterConfig {
  name: string;
  enabled: boolean;
  syncMethod: 'symlink' | 'config';
  targetPath: string;
}
