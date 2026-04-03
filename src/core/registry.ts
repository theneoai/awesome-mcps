import fs from 'fs-extra';
import path from 'path';
import { Skill, Registry } from '../types/skill';
import { USM_REGISTRY_PATH, USM_SKILLS_DIR, getSkillPath } from '../utils/path';
import { ensureDir, writeJson, safeReadJson } from '../utils/fs';
import { SkillNotFoundError, SkillAlreadyInstalledError } from '../types/errors';
import { logger } from '../utils/logger';

const DEFAULT_REGISTRY: Registry = {
  version: '1.0',
  skills: {}
};

export class RegistryManager {
  private registry: Registry;

  constructor() {
    this.registry = DEFAULT_REGISTRY;
  }

  async initialize(): Promise<void> {
    await ensureDir(USM_SKILLS_DIR);
    await ensureDir(path.join(USM_SKILLS_DIR, 'official'));
    await ensureDir(path.join(USM_SKILLS_DIR, 'community'));
    
    this.registry = await safeReadJson<Registry>(USM_REGISTRY_PATH, DEFAULT_REGISTRY);
  }

  async save(): Promise<void> {
    await writeJson(USM_REGISTRY_PATH, this.registry);
  }

  getAll(): Record<string, Skill> {
    return this.registry.skills;
  }

  get(skillName: string): Skill | undefined {
    return this.registry.skills[skillName];
  }

  async add(skill: Skill): Promise<void> {
    if (this.registry.skills[skill.name]) {
      throw new SkillAlreadyInstalledError(skill.name);
    }
    
    this.registry.skills[skill.name] = skill;
    await this.save();
  }

  async update(skillName: string, updates: Partial<Skill>): Promise<void> {
    const skill = this.registry.skills[skillName];
    if (!skill) {
      throw new SkillNotFoundError(skillName);
    }
    
    this.registry.skills[skillName] = { ...skill, ...updates };
    await this.save();
  }

  async remove(skillName: string): Promise<void> {
    if (!this.registry.skills[skillName]) {
      throw new SkillNotFoundError(skillName);
    }
    
    delete this.registry.skills[skillName];
    await this.save();
  }

  exists(skillName: string): boolean {
    return !!this.registry.skills[skillName];
  }

  getOutdated(): Skill[] {
    // TODO: Compare with remote registry to find outdated skills
    return [];
  }
}

export const registryManager = new RegistryManager();
