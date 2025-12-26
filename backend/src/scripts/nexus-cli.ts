// backend/scripts/nexus-cli.ts
import { createNewClient } from '../src/services/AdminService';
import { Command } from 'commander'; // npm install commander
import chalk from 'chalk'; // npm install chalk

const program = new Command();

program
  .name('nexus-admin')
  .description('CLI de Gestão de Clientes Nexus SDK')
  .version('1.0.0');

// COMANDO: CRIAR CLIENTE
program
  .command('create-client')
  .description('Registra uma nova empresa e injeta saldo inicial')
  .argument('<name>', 'Nome da empresa')
  .option('-d, --domains <domains...>', 'Domínios autorizados (ex: site.com)', ['localhost'])
  .option('-f, --fund <amount>', 'Saldo inicial de gás (USD)', '129873')
  .action(async (name, options) => {
    console.log(chalk.blue(`🚀 Gerando infraestrutura para: ${chalk.bold(name)}...`));
    
    try {
      const client = await createNewClient(name, options.domains, parseFloat(options.fund));
      
      console.log(chalk.green('\n✅ CLIENTE CRIADO COM SUCESSO!'));
      console.log(chalk.white('--------------------------------------------------'));
      console.log(`${chalk.cyan('Empresa:')}    ${client.name}`);
      console.log(`${chalk.cyan('API Key:')}    ${chalk.yellow(client.apiKey)}`);
      console.log(`${chalk.cyan('Saldo:')}      $ ${client.gasBalance.toLocaleString()}`);
      console.log(`${chalk.cyan('Domínios:')}   ${client.allowedDomains.join(', ')}`);
      console.log(chalk.white('--------------------------------------------------'));
      console.log(chalk.gray('Mande esta API Key para o cliente e comece a lucrar.'));
      
    } catch (error) {
      console.error(chalk.red('❌ Erro ao criar cliente:'), error.message);
    }
  });

program.parse();