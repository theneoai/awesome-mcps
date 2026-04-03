export class USMError extends Error {
  constructor(
    message: string,
    public code: string,
    public details?: Record<string, any>
  ) {
    super(message);
    this.name = 'USMError';
  }
}

export class SkillNotFoundError extends USMError {
  constructor(skillName: string) {
    super(`Skill '${skillName}' not found`, 'SKILL_NOT_FOUND', { skillName });
  }
}

export class SkillAlreadyInstalledError extends USMError {
  constructor(skillName: string) {
    super(`Skill '${skillName}' is already installed`, 'SKILL_ALREADY_INSTALLED', { skillName });
  }
}

export class AdapterNotInstalledError extends USMError {
  constructor(adapterName: string) {
    super(`Adapter '${adapterName}' tool is not installed`, 'ADAPTER_NOT_INSTALLED', { adapterName });
  }
}

export class SyncConflictError extends USMError {
  constructor(skillName: string, tool: string) {
    super(
      `Sync conflict detected for skill '${skillName}' in ${tool}`,
      'SYNC_CONFLICT',
      { skillName, tool }
    );
  }
}

export class GitHubAPIError extends USMError {
  constructor(message: string, statusCode: number) {
    super(message, 'GITHUB_API_ERROR', { statusCode });
  }
}
