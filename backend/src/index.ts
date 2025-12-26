import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { ethers } from 'ethers';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Configuração da sua Carteira Mestre (Cofre que paga o gás real)
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const masterWallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

// --- ROTA ADMINISTRATIVA PARA O DASHBOARD ---
app.get('/v1/admin/organizations', async (req, res) => {
  try {
    const orgs = await prisma.organization.findMany({
      include: { 
        _count: { select: { transactions: true } } // Conta quantas transações cada um fez
      },
      orderBy: { gasBalance: 'desc' }
    });
    res.json(orgs);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar organizações" });
  }
});

// --- ROTA DE EXECUÇÃO DE TRANSAÇÃO ---
app.post('/v1/execute', async (req, res) => {
  const { to, value, network } = req.body;
  const apiKey = req.headers['x-nexus-key'] as string;

  // 1. Validação Profissional
  const org = await prisma.organization.findUnique({ where: { apiKey } });
  
  if (!org) return res.status(401).json({ error: "Chave de API inválida" });
  if (org.status !== 'ACTIVE') return res.status(403).json({ error: "Organização suspensa ou pausada" });
  if (org.gasBalance <= 0) return res.status(402).json({ error: "Saldo de Gás insuficiente" });

  try {
    // 2. Lógica de Taxas (Simulação de custo + Lucro de 20%)
    const gasEstimate = 0.0005; 
    const feeWithSpread = gasEstimate * 1.2; 

    // 3. Execução na Blockchain Real
    const tx = await masterWallet.sendTransaction({ 
      to, 
      value: ethers.parseEther(value) 
    });
    
    // 4. OPERAÇÃO ATÔMICA (Prisma Transaction)
    // Atualiza saldo, cria log da transação e gera notificação se necessário
    const result = await prisma.$transaction(async (txPrisma) => {
      // Deduz do saldo
      const updatedOrg = await txPrisma.organization.update({
        where: { id: org.id },
        data: { 
          gasBalance: { decrement: feeWithSpread },
          totalSpent: { increment: feeWithSpread }
        }
      });

      // Cria o Log Real
      await txPrisma.transaction.create({
        data: {
          hash: tx.hash,
          network: network || 'polygon',
          fromAddress: masterWallet.address,
          toAddress: to,
          value: value,
          gasCostUsd: feeWithSpread,
          orgId: org.id,
          status: 'SUCCESS'
        }
      });

      // Alerta de Saldo Baixo (Se menor que $10)
      if (updatedOrg.gasBalance < 10) {
        await txPrisma.notification.create({
          data: {
            message: `Saldo crítico na ${org.name}: $${updatedOrg.gasBalance.toFixed(2)}`,
            type: 'CRITICAL_BALANCE',
            orgId: org.id
          }
        });
      }

      return updatedOrg;
    });

    res.json({ 
      success: true, 
      hash: tx.hash, 
      remainingBalance: result.gasBalance 
    });

  } catch (error: any) {
    console.error("Erro na transação:", error);
    res.status(500).json({ error: "Falha na execução da rede", details: error.message });
  }
});

// --- ROTA DE NOTIFICAÇÕES (Para o seu Dashboard) ---
app.get('/v1/admin/notifications', async (req, res) => {
  const alerts = await prisma.notification.findMany({
    where: { read: false },
    include: { organization: { select: { name: true } } },
    orderBy: { createdAt: 'desc' }
  });
  res.json(alerts);
});

app.listen(3000, () => console.log("🚀 Nexus Relayer rodando na porta 3000"));