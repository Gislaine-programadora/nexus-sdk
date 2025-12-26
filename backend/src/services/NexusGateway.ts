// backend/src/services/NexusGateway.ts

import { ethers } from 'ethers';

const NETWORKS = {
  polygon: "https://polygon-rpc.com",
  base: "https://mainnet.base.org",
  arbitrum: "https://arb1.arbitrum.io/rpc"
};

export class NexusGateway {
  // O Gateway decide qual rede usar baseado no pedido do SDK
  static async routeTransaction(networkName: string, txData: any, privateKey: string) {
    const rpcUrl = NETWORKS[networkName];
    if (!rpcUrl) throw new Error("Rede não suportada pelo Nexus");

    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const wallet = new ethers.Wallet(privateKey, provider);

    console.log(`📡 Nexus Roteando para: ${networkName}`);

    // Envia a transação na rede escolhida
    const tx = await wallet.sendTransaction(txData);
    
    return {
      hash: tx.hash,
      network: networkName,
      explorer: `https://${networkName}scan.com/tx/${tx.hash}`
    };
  }
}