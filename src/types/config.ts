export interface USMConfig {
  version: string;
  registry: {
    official: string;
    indexUrl: string;
  };
  sync: {
    autoSync: boolean;
    tools: string[];
  };
  github: {
    token: string | null;
  };
}

export const DEFAULT_CONFIG: USMConfig = {
  version: '1.0',
  registry: {
    official: 'https://github.com/universal-skills/registry',
    indexUrl: 'https://universal-skills.github.io/registry/index.json'
  },
  sync: {
    autoSync: true,
    tools: ['opencode', 'claude-code', 'gemini-cli']
  },
  github: {
    token: null
  }
};
