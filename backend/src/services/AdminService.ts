// backend/src/services/AdminService.ts
import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();

export const createNewClient = async (name: string, domains: string[], initialFund: number) => {
  const key = `nx_live_${crypto.randomBytes(24).toString('hex')}`;
  
  const newClient = await prisma.organization.create({
    data: {
      name: name,
      apiKey: key,
      allowedDomains: domains,
      gasBalance: initialFund,
    }
  });

  return newClient;
};

// Exemplo de uso para 3 clientes novos:
// createNewClient("Game Studio X", ["gamex.com"], 129873);
// createNewClient("NFT Market", ["nft.io"], 50000);