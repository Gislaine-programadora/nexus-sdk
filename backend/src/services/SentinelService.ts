// backend/src/services/SentinelService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const checkBalancesAndNotify = async () => {
  // 1. Procurar todas as organizações com saldo abaixo de um limite (ex: $1000)
  const threshold = 1000;
  
  const lowBalanceOrgs = await prisma.organization.findMany({
    where: {
      gasBalance: { lte: threshold },
      status: 'ACTIVE'
    }
  });

  lowBalanceOrgs.forEach(async (org) => {
    console.log(`⚠️ ALERTA: Cliente ${org.name} com saldo baixo: $${org.gasBalance}`);
    
    // 2. Aqui disparas o e-mail ou notificação Push
    // sendLowBalanceEmail(org.email, org.gasBalance);
    
    // 3. Opcional: Criar uma notificação no Dashboard Master para ti
    await prisma.notification.create({
      data: {
        orgId: org.id,
        message: `O cliente ${org.name} atingiu o limite crítico de saldo.`,
        type: 'CRITICAL_BALANCE'
      }
    });
  });
};