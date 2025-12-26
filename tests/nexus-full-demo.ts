import { PrismaClient } from '@prisma/client';
import { ethers } from 'ethers';
import chalk from 'chalk';

const prisma = new PrismaClient();

async function runDemo() {
    console.log(chalk.magenta.bold("\n--- INICIANDO DEMONSTRAÇÃO NEXUS HIGH-PERFORMANCE ---"));

    // 1. SIMULAÇÃO: CRIAÇÃO DA EMPRESA (Via CLI/Backend)
    console.log(chalk.blue("\n[1] Registrando Nova Exchange VIP..."));
    const apiKey = "nx_live_test_12345";
    const empresa = await prisma.organization.upsert({
        where: { apiKey: apiKey },
        update: {},
        create: {
            name: "Alpha Exchange",
            apiKey: apiKey,
            gasBalance: 129873.00, // O famoso saldo injetado
            allowedDomains: ["localhost"]
        }
    });
    console.log(chalk.green(`✅ Empresa '${empresa.name}' ativa com $${empresa.gasBalance} de crédito.`));

    // 2. SIMULAÇÃO: USUÁRIO ENTRA NO APP (Geração do par de chaves local)
    console.log(chalk.blue("\n[2] Usuário acessa o App. Gerando chaves biométricas (Passkeys)..."));
    const userLocalWallet = ethers.Wallet.createRandom();
    console.log(chalk.cyan(`🔑 Endereço Local do Usuário: ${userLocalWallet.address}`));
    console.log(chalk.gray("Nota: A chave privada nunca sai do dispositivo do usuário."));

    // 3. SIMULAÇÃO: CRIAÇÃO DA SMART WALLET (Paga pela Empresa)
    console.log(chalk.blue("\n[3] Nexus implantando Smart Wallet para o usuário (Gasless)..."));
    // Aqui simularíamos o deploy da Factory. Vamos supor o endereço da Smart Wallet:
    const smartWalletAddress = "0xSmartWalletSimulada_123"; 
    console.log(chalk.green(`✅ Smart Wallet criada: ${smartWalletAddress}`));

    // 4. SIMULAÇÃO: COMPRA DE MOEDA (O Usuário assina, a Empresa paga o Gás)
    console.log(chalk.blue("\n[4] Usuário deseja comprar 100 USDC. Assinando ordem..."));
    
    // O usuário assina apenas a intenção (Payload)
    const targetContract = "0xUSDC_Contract_Address";
    const amount = ethers.parseUnits("100", 6);
    const payload = ethers.solidityPackedKeccak256(
        ["address", "uint256", "string"],
        [targetContract, amount, "BUY_ORDER"]
    );
    const signature = await userLocalWallet.signMessage(ethers.toBeArray(payload));
    console.log(chalk.cyan(`✍️ Assinatura gerada: ${signature.substring(0, 40)}...`));

    // 5. O NEXUS RELAYER PROCESSA TUDO
    console.log(chalk.blue("\n[5] Relayer Nexus recebendo assinatura e executando na rede..."));
    
    // Simulação do custo de gás real da rede
    const realGasCost = 0.05; // $0.05 centavos
    const feeChargedFromCompany = 0.07; // $0.07 (Seu lucro de $0.02)

    await prisma.organization.update({
        where: { apiKey: apiKey },
        data: { 
            gasBalance: { decrement: feeChargedFromCompany },
            totalSpent: { increment: feeChargedFromCompany }
        }
    });

    console.log(chalk.green(`🚀 Transação Confirmada na Blockchain!`));
    console.log(chalk.yellow(`💰 Taxa de Gás paga pela 'Alpha Exchange'.`));
    console.log(chalk.white(`📊 Novo Saldo da Empresa: $${(empresa.gasBalance - feeChargedFromCompany).toFixed(2)}`));

    console.log(chalk.magenta.bold("\n--- FIM DA DEMONSTRAÇÃO: SUCESSO TOTAL ---"));
}

runDemo();