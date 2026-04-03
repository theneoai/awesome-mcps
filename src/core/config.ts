import fs from 'fs-extra';
import path from 'path';
import os from 'os';
import { USMConfig, DEFAULT_CONFIG } from '../types/config';
import { USM_HOME, USM_CONFIG_PATH } from '../utils/path';
import { ensureDir, readJson, writeJson, safeReadJson } from '../utils/fs';

export class ConfigManager {
  private config: USMConfig;

  constructor() {
    this.config = DEFAULT_CONFIG;
  }

  async initialize(): Promise<void> {
    await ensureDir(USM_HOME);
    
    if (await fs.pathExists(USM_CONFIG_PATH)) {
      const saved = await safeReadJson<Partial<USMConfig>>(USM_CONFIG_PATH, {});
      this.config = { ...DEFAULT_CONFIG, ...saved };
    } else {
      await this.save();
    }
  }

  async save(): Promise<void> {
    await writeJson(USM_CONFIG_PATH, this.config);
  }

  get(): USMConfig {
    return this.config;
  }

  getGithubToken(): string | null {
    return process.env.USM_GITHUB_TOKEN || this.config.github.token;
  }

  async setGithubToken(token: string): Promise<void> {
    this.config.github.token = token;
    await this.save();
  }

  isToolEnabled(tool: string): boolean {
    return this.config.sync.tools.includes(tool);
  }

  async enableTool(tool: string): Promise<void> {
    if (!this.config.sync.tools.includes(tool)) {
      this.config.sync.tools.push(tool);
      await this.save();
    }
  }

  async disableTool(tool: string): Promise<void> {
    this.config.sync.tools = this.config.sync.tools.filter(t => t !== tool);
    await this.save();
  }
}

export const configManager = new ConfigManager();
