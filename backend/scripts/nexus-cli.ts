import { Command } from 'commander';
import { PrismaClient } from '@prisma/client';
import chalk from 'chalk';

const prisma = new PrismaClient();
const program = new Command();

program
  .version('1.0.0')
  .description('Nexus Infrastructure CLI - Management Console');

// --- COMANDO: RECARGA DE GÁS (REFILL-GAS) ---
program
  .command('refill-gas')
  .description('Adiciona saldo de gás a uma organização')
  .argument('<apiKey>', 'A API Key da organização')
  .argument('<amount>', 'Quantidade de USD a adicionar')
  .action(async (apiKey, amount) => {
    const refillAmount = parseFloat(amount);

    if (isNaN(refillAmount) || refillAmount <= 0) {
      console.error(chalk.red('❌ Erro: A quantidade deve ser um número positivo.'));
      return;
    }

    try {
      const updatedOrg = await prisma.organization.update({
        where: { apiKey: apiKey },
        data: {
          gasBalance: { increment: refillAmount },
          status: 'ACTIVE' // Reativa automaticamente se estiver suspensa
        }
      });

      console.log('\n' + chalk.cyan.bold(`⛽ RECARGA CONCLUÍDA: ${updatedOrg.name}`));
      console.log(chalk.gray('--------------------------------------------------'));
      console.log(`${chalk.white.bold('VALOR ADICIONADO:')}  ${chalk.green('+ $ ' + refillAmount.toLocaleString('en-US'))}`);
      console.log(`${chalk.white.bold('SALDO ATUAL:')}      ${chalk.green.bold('$ ' + updatedOrg.gasBalance.toLocaleString('en-US'))}`);
      console.log(`${chalk.white.bold('STATUS:')}           ${chalk.cyan(updatedOrg.status)}`);
      console.log(chalk.gray('--------------------------------------------------\n'));
    } catch (error: any) {
      console.error(chalk.red('\n❌ Erro ao processar recarga: API Key não encontrada.'));
    } finally {
      await prisma.$disconnect();
    }
  });

// --- COMANDO: VER LOGS REAIS (VIEW-LOGS) ---
program
  .command('view-logs')
  .description('Mostra o histórico real de transações na blockchain')
  .argument('<apiKey>', 'A API Key da organização')
  .option('-l, --limit <number>', 'Número de transações', '10')
  .action(async (apiKey, options) => {
    const limit = parseInt(options.limit);

    try {
      // Busca a organização incluindo a relação real com a tabela Transaction
      const org = await prisma.organization.findUnique({
        where: { apiKey: apiKey },
        include: {
          transactions: {
            orderBy: { createdAt: 'desc' },
            take: limit
          }
        }
      });

      if (!org) {
        console.error(chalk.red('\n❌ Erro: Organização não encontrada.'));
        return;
      }

      console.log('\n' + chalk.magenta.bold(`📋 LOGS DE TRANSAÇÕES: ${org.name}`));
      console.log(chalk.gray('----------------------------------------------------------------------'));
      console.log(`${chalk.blue.bold('DATA')}       | ${chalk.blue.bold('HASH')}          | ${chalk.blue.bold('CUSTO')}    | ${chalk.blue.bold('STATUS')}`);
      console.log(chalk.gray('-----------|---------------|----------|----------'));

      if (org.transactions.length === 0) {
        console.log(chalk.yellow('Nenhuma transação encontrada para este cliente.'));
      }

      // Loop de exibição usando os dados reais do Schema
      org.transactions.forEach(tx => {
        const date = tx.createdAt.toISOString().split('T')[0];
        const shortHash = tx.hash.substring(0, 12) + '...';
        const cost = tx.gasCostUsd.toFixed(2);
        const statusColor = tx.status === 'SUCCESS' ? chalk.green : chalk.red;

        console.log(`${date} | ${shortHash} | $ ${cost.padEnd(6)} | ${statusColor(tx.status)}`);
      });

      console.log(chalk.gray('----------------------------------------------------------------------'));
      console.log(`${chalk.white.bold('SALDO EM CONTA:')} ${chalk.green('$ ' + org.gasBalance.toLocaleString('en-US'))}`);
      console.log(`${chalk.white.bold('GASTO TOTAL:')}    ${chalk.red('$ ' + org.totalSpent.toLocaleString('en-US'))}\n`);

    } catch (error: any) {
      console.error(chalk.red('\n❌ Erro ao buscar logs:'), error.message);
    } finally {
      await prisma.$disconnect();
    }
  });

program.parse(process.argv);