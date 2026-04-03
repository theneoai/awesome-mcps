import axios from 'axios';
import fs from 'fs-extra';
import path from 'path';
import { SkillIndexEntry } from '../types/skill';
import { GitHubAPIError } from '../types/errors';
import { configManager } from './config';
import { USM_CACHE_DIR } from '../utils/path';
import { ensureDir } from '../utils/fs';

export class GitHubClient {
  private getHeaders(): Record<string, string> {
    const token = configManager.getGithubToken();
    const headers: Record<string, string> = {
      'Accept': 'application/vnd.github.v3+json'
    };
    
    if (token) {
      headers['Authorization'] = `token ${token}`;
    }
    
    return headers;
  }

  async fetchRepository(owner: string, repo: string, ref?: string): Promise<string> {
    const url = `https://api.github.com/repos/${owner}/${repo}/zipball${ref ? `/${ref}` : ''}`;
    
    try {
      const response = await axios.get(url, {
        headers: this.getHeaders(),
        responseType: 'arraybuffer'
      });
      
      await ensureDir(USM_CACHE_DIR);
      const cachePath = path.join(USM_CACHE_DIR, `${owner}-${repo}-${ref || 'latest'}.zip`);
      await fs.writeFile(cachePath, response.data);
      
      return cachePath;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new GitHubAPIError(
          `Failed to fetch repository: ${error.message}`,
          error.response?.status || 0
        );
      }
      throw error;
    }
  }

  async getLatestRelease(owner: string, repo: string): Promise<string | null> {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/releases/latest`,
        { headers: this.getHeaders() }
      );
      
      return response.data.tag_name;
    } catch (error) {
      return null;
    }
  }

  async fetchSkillIndex(): Promise<SkillIndexEntry[]> {
    const config = configManager.get();
    
    try {
      const response = await axios.get(config.registry.indexUrl);
      return response.data.skills || [];
    } catch (error) {
      return [];
    }
  }

  parseGithubUrl(url: string): { owner: string; repo: string; ref?: string } | null {
    const match = url.match(/github\.com[/:]([^/]+)\/([^/]+)(?:@(.+))?/);
    if (!match) return null;
    
    return {
      owner: match[1],
      repo: match[2].replace(/\.git$/, ''),
      ref: match[3]
    };
  }
}

export const githubClient = new GitHubClient();
