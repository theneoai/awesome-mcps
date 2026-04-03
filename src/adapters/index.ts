import { OpenCodeAdapter } from './opencode';
import { ClaudeCodeAdapter } from './claude-code';
import { GeminiCLIAdapter } from './gemini-cli';
import { Adapter } from '../types/adapter';

export const adapters: Adapter[] = [
  new OpenCodeAdapter(),
  new ClaudeCodeAdapter(),
  new GeminiCLIAdapter()
];

export function getAdapter(name: string): Adapter | undefined {
  return adapters.find(a => a.name === name);
}

export function getInstalledAdapters(): Adapter[] {
  return adapters.filter(a => a.isInstalled());
}
