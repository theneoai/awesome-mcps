import path from 'path';
import os from 'os';

export const USM_HOME = path.join(os.homedir(), '.skills');
export const USM_CONFIG_PATH = path.join(USM_HOME, 'config.json');
export const USM_REGISTRY_PATH = path.join(USM_HOME, 'registry.json');
export const USM_SKILLS_DIR = path.join(USM_HOME, 'skills');
export const USM_ADAPTERS_DIR = path.join(USM_HOME, 'adapters');
export const USM_CACHE_DIR = path.join(USM_HOME, 'cache');

export function getSkillPath(skillName: string, source: string): string {
  return path.join(USM_SKILLS_DIR, source, skillName);
}

export function expandHome(filepath: string): string {
  if (filepath.startsWith('~/')) {
    return path.join(os.homedir(), filepath.slice(2));
  }
  return filepath;
}
