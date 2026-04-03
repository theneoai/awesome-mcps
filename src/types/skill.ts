export interface Skill {
  name: string;
  description: string;
  version: string;
  source: 'official' | 'community' | 'github' | 'local';
  path: string;
  installedAt: Date;
  updatedAt: Date;
}

export interface SkillMetadata {
  name: string;
  description: string;
  license?: string;
  compatibility?: string;
  metadata?: Record<string, string>;
  'allowed-tools'?: string;
}

export interface Registry {
  version: string;
  skills: Record<string, Skill>;
}

export interface SkillIndexEntry {
  name: string;
  description: string;
  version: string;
  author: string;
  repository: string;
  tags: string[];
}
