// sdk/src/types.ts

export interface NexusConfig {
  apiKey: string;      // Chave gerada pelo seu CLI
  network?: string;    // 'polygon', 'base', 'arbitrum', etc.
  debug?: boolean;     // Ativa logs no console para o desenvolvedor
}

export interface TransactionParams {
  to: string;          // Endereço de destino
  data: string;        // Dados da chamada do contrato (CallData)
  value?: string;      // Valor em ETH/MATIC (opcional)
}

export interface ExecutionResponse {
  hash: string;        // Hash da transação na blockchain
  status: 'SUCCESS' | 'PENDING' | 'FAILED';
  explorer: string;    // Link direto para o scanner da rede
  remainingBalance?: number; // Saldo que resta dos $129k da empresa
}