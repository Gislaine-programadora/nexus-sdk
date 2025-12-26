// nexus-sdk/backend/src/middleware/auth.ts

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const validateNexusKey = async (req, res, next) => {
  const apiKey = req.headers['x-nexus-key'];

  if (!apiKey) {
    return res.status(401).json({ error: "Chave de API não fornecida." });
  }

  const org = await prisma.organization.findUnique({
    where: { apiKey }
  });

  if (!org) {
    return res.status(403).json({ error: "Chave de API inválida." });
  }

  if (org.gasBalance <= 0) {
    return res.status(402).json({ error: "Saldo de gás insuficiente no Nexus Tank." });
  }

  // Se chegou aqui, a empresa está ok!
  req.organization = org;
  next();
};