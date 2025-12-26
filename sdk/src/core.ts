// sdk/src/core.ts (Atualizado)
import { NexusStyles } from './ui/Injector';
import { NexusUI } from './ui/Modal';
import { NexusConfig, TransactionParams } from './types';

export default class Nexus {
  private apiKey: string;

  constructor(config: NexusConfig) {
    this.apiKey = config.apiKey;

    // A MÁGICA ACONTECE AQUI:
    // Injeta os estilos automaticamente no navegador do cliente
    if (typeof document !== 'undefined') {
      NexusStyles.inject();
    }
    
    console.log("🌌 Nexus SDK: Engine & UI Ready.");
  }

  // Método para chamar o modal visual
  async requestTransaction(params: TransactionParams) {
    return new Promise((resolve) => {
      NexusUI.showTransactionModal(params.value || "0", async () => {
        console.log("Usuário confirmou via UI. Processando...");
        // Aqui chamaria o seu backend /v1/execute
        resolve({ status: 'SUCCESS' });
      });
    });
  }
}