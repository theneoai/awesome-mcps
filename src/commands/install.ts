import { Command } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import extract from 'extract-zip';
import { registryManager } from '../core/registry';
import { configManager } from '../core/config';
import { syncManager } from '../core/sync-manager';
import { githubClient } from '../core/github-client';
import { Skill } from '../types/skill';
import { logger } from '../utils/logger';
import { USM_CACHE_DIR, getSkillPath } from '../utils/path';
import { ensureDir } from '../utils/fs';

export function createInstallCommand(): Command {
  const command = new Command('install');
  
  command
    .description('Install a skill')
    .argument('<source>', 'Skill name, GitHub URL, or local path')
    .option('--no-sync', 'Do not sync to agent tools')
    .option('--local', 'Install from local path')
    .action(async (source: string, options: { sync?: boolean; local?: boolean }) => {
      await configManager.initialize();
      await registryManager.initialize();
      
      const shouldSync = options.sync !== false;
      
      if (options.local) {
        await installFromLocal(source, shouldSync);
      } else if (source.includes('github.com')) {
        await installFromGithub(source, shouldSync);
      } else {
        await installFromRegistry(source, shouldSync);
      }
    });
  
  return command;
}

async function installFromLocal(localPath: string, shouldSync: boolean): Promise<void> {
  const resolvedPath = path.resolve(localPath);
  
  if (!fs.existsSync(resolvedPath)) {
    logger.error(`Local path does not exist: ${resolvedPath}`);
    process.exit(1);
  }
  
  const skillName = path.basename(resolvedPath);
  const targetPath = getSkillPath(skillName, 'local');
  
  if (registryManager.exists(skillName)) {
    logger.error(`Skill '${skillName}' is already installed`);
    process.exit(1);
  }
  
  await fs.copy(resolvedPath, targetPath);
  
  const skill: Skill = {
    name: skillName,
    description: `Local skill: ${skillName}`,
    version: '0.0.0',
    source: 'local',
    path: targetPath,
    installedAt: new Date(),
    updatedAt: new Date()
  };
  
  await registryManager.add(skill);
  logger.success(`Installed '${skillName}' from local path`);
  
  if (shouldSync) {
    await syncManager.syncSkill(skill);
  }
}

async function installFromGithub(url: string, shouldSync: boolean): Promise<void> {
  const parsed = githubClient.parseGithubUrl(url);
  
  if (!parsed) {
    logger.error(`Invalid GitHub URL: ${url}`);
    process.exit(1);
  }
  
  const { owner, repo, ref } = parsed;
  const skillName = repo;
  
  if (registryManager.exists(skillName)) {
    logger.error(`Skill '${skillName}' is already installed`);
    process.exit(1);
  }
  
  logger.info(`Fetching ${owner}/${repo}...`);
  
  const zipPath = await githubClient.fetchRepository(owner, repo, ref);
  const extractPath = path.join(USM_CACHE_DIR, `${owner}-${repo}-${ref || 'latest'}`);
  
  await ensureDir(extractPath);
  await extract(zipPath, { dir: extractPath });
  
  // Find the extracted directory (GitHub zipball has a root folder)
  const entries = await fs.readdir(extractPath);
  const sourceDir = entries.length === 1 
    ? path.join(extractPath, entries[0])
    : extractPath;
  
  const targetPath = getSkillPath(skillName, 'github');
  await fs.copy(sourceDir, targetPath);
  
  // Clean up cache
  await fs.remove(zipPath);
  await fs.remove(extractPath);
  
  const skill: Skill = {
    name: skillName,
    description: `GitHub skill: ${owner}/${repo}`,
    version: ref || 'latest',
    source: 'github',
    path: targetPath,
    installedAt: new Date(),
    updatedAt: new Date()
  };
  
  await registryManager.add(skill);
  logger.success(`Installed '${skillName}' from GitHub`);
  
  if (shouldSync) {
    await syncManager.syncSkill(skill);
  }
}

async function installFromRegistry(skillName: string, shouldSync: boolean): Promise<void> {
  // TODO: Implement registry-based installation
  logger.error(`Registry installation not yet implemented. Use GitHub URL instead.`);
  logger.info(`Example: usm install github.com/anthropics/skills`);
  process.exit(1);
}