// sdk/src/providers/NexusProvider.ts
import { ethers } from 'ethers';

export class NexusProvider {
  private provider: ethers.JsonRpcProvider;

  constructor(rpcUrl: string) {
    this.provider = new ethers.JsonRpcProvider(rpcUrl);
  }

  // Obtém o saldo real da Smart Wallet na rede
  async getBalance(address: string): Promise<string> {
    const balance = await this.provider.getBalance(address);
    return ethers.formatEther(balance);
  }

  // Verifica se o contrato da Smart Wallet já foi implantado
  async isWalletDeployed(address: string): Promise<boolean> {
    const code = await this.provider.getCode(address);
    return code !== "0x";
  }
}