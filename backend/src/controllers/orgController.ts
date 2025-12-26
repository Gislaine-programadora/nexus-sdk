// nexus-sdk/backend/src/controllers/orgController.ts

import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();

export const createOrganization = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  
  // Puxa o valor do .env ou usa 0 como fallback
  const initialBalance = process.env.INITIAL_GAS_BALANCE || "0";

  const newOrg = await prisma.organization.create({
    data: {
      name,
      email,
      apiKey: `nx_live_${crypto.randomBytes(16).toString('hex')}`, // Gera chave única
      gasBalance: parseFloat(initialBalance) // Injeta o valor do .env
    }
  });

  return res.status(201).json(newOrg);
};