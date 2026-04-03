import fs from 'fs-extra';
import path from 'path';

export async function ensureDir(dirPath: string): Promise<void> {
  await fs.ensureDir(dirPath);
}

export async function readJson<T>(filePath: string): Promise<T> {
  return fs.readJson(filePath);
}

export async function writeJson(filePath: string, data: unknown): Promise<void> {
  await fs.writeJson(filePath, data, { spaces: 2 });
}

export async function safeReadJson<T>(filePath: string, defaultValue: T): Promise<T> {
  try {
    return await readJson<T>(filePath);
  } catch {
    return defaultValue;
  }
}
