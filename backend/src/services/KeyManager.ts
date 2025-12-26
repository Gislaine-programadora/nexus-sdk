import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();

export const generateNexusKey = async (orgName: string, email: string) => {
  // 1. Gerar uma chave aleatória de alto padrão
  const randomBytes = crypto.randomBytes(24).toString('hex');
  const apiKey = `nx_live_${randomBytes}`; // Ex: nx_live_a1b2c3...

  // 2. Definir o saldo inicial injetado (do seu .env)
  const initialBalance = parseFloat(process.env.INITIAL_GAS_BALANCE || "129873.00");

  // 3. Salvar no Postgres
  const organization = await prisma.organization.create({
    data: {
      name: orgName,
      email: email,
      apiKey: apiKey,
      gasBalance: initialBalance,
    }
  });

  return {
    apiKey: organization.apiKey,
    balance: organization.gasBalance,
    orgId: organization.id
  };
};