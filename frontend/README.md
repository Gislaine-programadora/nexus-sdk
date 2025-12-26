# nexus-sdk - Frontend

Frontend desenvolvido com Vite e TypeScript para o projeto nexus-sdk.


# 🌌 Nexus SDK | Smart Infrastructure for Web3

**A infraestrutura de alta performance que permite Bancos, Exchanges e Fintechs integrarem Web3 com taxa de gás ZERO para o usuário final.**

---

## 🚀 A Visão
O Nexus SDK elimina a fricção da blockchain. Com ele, empresas podem oferecer transações instantâneas e sem custo de rede, utilizando nossa arquitetura de **Relayers** e **Account Abstraction**.

## 🛠️ O Ecossistema
O projeto é dividido em 4 pilares fundamentais:

* **Nexus Relayer (Backend):** O motor de processamento em Node.js que paga o gás real e gerencia API Keys.
* **Nexus Smart Wallets (Solidity):** Contratos inteligentes ERC-4337 que garantem a segurança do usuário.
* **Nexus SDK (Frontend):** Biblioteca plug-and-play com UI moderna e injeção automática de estilos.
* **Nexus CLI:** Ferramenta de administração para gestão de parceiros e saldos.

## 📦 Como Instalar (SDK)

```bash
npm install @nexus-hq/sdk



💻 Exemplo de Uso

import { Nexus } from '@nexus-hq/sdk';

const nexus = new Nexus({ 
  apiKey: 'nx_live_vossa_chave_aqui' 
});

// Executa uma transação gasless com 1 linha de código
await nexus.executeGasless({
  to: '0xAddress...',
  data: '0xCallData...'
});


💎 Diferenciais
Gasless Experience: O usuário nunca precisa ter ETH ou MATIC para transacionar.

Enterprise-Grade: Controle de saldo de incentivo (Injected Gas) via Dashboard.

Modern UI: Modal de confirmação com Glassmorphism e suporte a biometria.

High Performance: Processamento em milissegundos via Relayers dedicados.

⭐ Nexus - Conectando a economia tradicional ao futuro descentralizado.




## 🚀 Tecnologias

- React
- Vite
- TypeScript
- Tailwind CSS

## 📦 Instalação

```bash
npm install
```

## 🏃 Executar

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 🎨 Tema

Tema atual: **Gbit Dark**
