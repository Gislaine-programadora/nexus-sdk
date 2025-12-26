// backend/src/controllers/transactionController.ts

export const sendNexusTransaction = async (req: Request, res: Response) => {
  const org = (req as any).organization; // Empresa identificada pela API Key
  
  // 1. Verificação de Saldo (Virtual da API Key)
  if (org.gasBalance <= 0) {
    return res.status(402).json({ error: "Saldo da API Key esgotado." });
  }

  // 2. Execução via Relayer (Sua infra paga o gás inicial)
  const tx = await relayerWallet.sendTransaction({
    to: req.body.to,
    data: req.body.data,
    value: req.body.value
  });

  // 3. A MÁGICA: Captura de Valor
  // Aqui você registra o débito no saldo da empresa, mas o lucro 
  // das taxas de rede (e possíveis recompensas de stake) 
  // é acumulado na sua Private Key central.
  
  await prisma.organization.update({
    where: { apiKey: org.apiKey },
    data: { 
      gasBalance: { decrement: 0.10 } // Taxa fixa ou dinâmica por chamada
    }
  });

  return res.status(200).json({ 
    hash: tx.hash, 
    collector: "Nexus Central Vault" // Sua chave privada
  });
};