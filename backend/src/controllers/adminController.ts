// backend/src/controllers/adminController.ts
export const getAdminStats = async (req: Request, res: Response) => {
  // 1. Soma saldo total distribuído
  const totalBalanceDistributed = await prisma.organization.aggregate({
    _sum: { gasBalance: true }
  });

  // 2. Soma lucro real (Spread das transações)
  const totalProfit = await prisma.transaction.aggregate({
    _sum: { gasCostUsd: true }
  });

  res.json({
    distributed: totalBalanceDistributed._sum.gasBalance,
    profit: totalProfit._sum.gasCostUsd,
    activeKeys: await prisma.organization.count()
  });
};