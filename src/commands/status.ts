import { Command } from "commander";
import chalk from 'chalk';
import { registryManager } from '../core/registry';
import { syncManager } from '../core/sync-manager';
import { adapters } from '../adapters';

export function createStatusCommand(): Command {
  const command = new Command('status');
  
  command
    .description('Show sync status')
    .action(async () => {
      await registryManager.initialize();
      
      const status = await syncManager.getStatus();
      const registry = registryManager.getAll();
      
      console.log(chalk.bold('\nTool Status:'));
      console.log('');
      
      for (const adapter of adapters) {
        const isInstalled = adapter.isInstalled();
        const statusIcon = isInstalled ? chalk.green('✓') : chalk.red('✗');
        const statusText = isInstalled ? chalk.green('installed') : chalk.red('not installed');
        
        console.log(`${statusIcon} ${chalk.cyan(adapter.name)} (${statusText})`);
        
        if (isInstalled) {
          const syncedSkills = status[adapter.name] || [];
          
          if (syncedSkills.length === 0 || syncedSkills[0] === 'not installed') {
            console.log(`    No skills synced`);
          } else {
            console.log(`    Synced: ${syncedSkills.length} skills`);
            for (const skillName of syncedSkills) {
              const inRegistry = registry[skillName] ? chalk.green('✓') : chalk.red('✗');
              console.log(`      ${inRegistry} ${skillName}`);
            }
          }
        }
        
        console.log('');
      }
      
      console.log(chalk.bold('Registry:'));
      const skills = Object.values(registry);
      console.log(`  Total skills: ${skills.length}`);
      
      if (skills.length > 0) {
        console.log('  Skills:');
        for (const skill of skills) {
          console.log(`    - ${skill.name} (${skill.source})`);
        }
      }
      
      console.log('');
    });
  
  return command;
}
