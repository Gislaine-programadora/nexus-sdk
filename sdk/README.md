# 📦 Nexus SDK Core npm

O **Nexus SDK** é a biblioteca cliente oficial para integração com a infraestrutura Nexus. Ele permite que desenvolvedores conectem suas aplicações a Smart Wallets com suporte a transações gasless (sem taxas para o usuário).

## ✨ Funcionalidades

* **Transações Gasless**: Execute chamadas em blockchain sem que o usuário precise de saldo nativo (ETH/MATIC).
* **Interface Premium**: Modais de confirmação pré-estilizados com efeito Glassmorphism.
* **Auto-Injection**: Estilos CSS injetados automaticamente para facilitar a integração.
* **Type Safety**: Suporte completo a TypeScript para uma experiência de desenvolvimento superior.

## 🚀 Como instalar (Desenvolvimento Local)

Para testar o SDK localmente antes da publicação no NPM, utilize o 
##  Instalação e Setup
Para desenvolvedores que desejam integrar a infraestrutura completa (Backend + Banco de Dados):

   ```bash
  # Instale o SDK
npm install @nexus-hq/sdk

# Inicialize a infraestrutura Nexus (Banco de Dados e Configurações)
npx nexus-init
...

💰 Gestão de Lucros & Monetização (Novo!)O Nexus SDK agora permite que proprietários de projetos monetizem suas operações de forma automatizada:Comissões Automáticas: Configure uma taxa (ex: 5%) sobre cada operação de crédito (Top-up) realizada pelos usuários.Relatórios em PDF: Gere comprovantes profissionais de lucro acumulado automaticamente.Saque via E-mail: Sistema integrado para solicitar o resgate de comissões com um clique, enviando o relatório diretamente para o e-mail do administrador.

🛠️ Como Usar (Exemplo de Top-up com Lucro)TypeScriptimport { NexusSDK } from '@nexus-hq/sdk';

const nexus = new NexusSDK({
  apiKey: "sua_chave_aqui",
  apiSecret: "seu_segredo_aqui"
});

// Realiza uma recarga e gera 5% de comissão para você
await nexus.topUp({
  amount: 2000,
  currency: "USD"
});

console.log("Comissão de $100.00 registrada no Supabase!");


📊 Infraestrutura & Transparência

O SDK se conecta nativamente ao seu banco de dados para garantir auditoria total:

Tabela Organization: Gerencia seu saldo global de Gas e lucros acumulados.

Tabela Transaction: Log detalhado de cada movimentação para transparência com o cliente final.

Segurança: Integração robusta com Variáveis de Ambiente (.env) para proteção de Chaves Privadas.


📜 Comandos CLI DisponíveisComandoDescriçãonpx nexus-initConfigura o ambiente, gera o Prisma Client e 

 
Comando,              Descrição
npx nexus-init,        Configura o ambiente, gera o Prisma Client e prepara os arquivos .env."
npm run build,         compila o SDK de TypeScript para JavaScript de alta performance.
npm run dev,           Inicia o modo de desenvolvimento com hot-reload.




# 📦 Nexus SDK Core

O **Nexus SDK** é a biblioteca cliente oficial para integração com a infraestrutura Nexus. Ele permite que desenvolvedores conectem suas aplicações a Smart Wallets com suporte a transações gasless (sem taxas para o usuário).

## ✨ Funcionalidades

* **Transações Gasless**: Execute chamadas em blockchain sem que o usuário precise de saldo nativo (ETH/MATIC).
* **Interface Premium**: Modais de confirmação pré-estilizados com efeito Glassmorphism.
* **Auto-Injection**: Estilos CSS injetados automaticamente para facilitar a integração.
* **Type Safety**: Suporte completo a TypeScript para uma experiência de desenvolvimento superior.

## 🚀 Como instalar (Desenvolvimento Local)

Para testar o SDK localmente antes da publicação no NPM, 

1. Na pasta `sdk/`, compile o projeto e crie o link:
   ```bash
   npm install @nexus-hq/sdk

  🛠️ Exemplo de Implementação


  import { Nexus } from '@nexus-hq/sdk';

const nexus = new Nexus({
  apiKey: 'sua_nx_live_key_aqui'
});

// Solicita uma transação com interface visual
await nexus.requestTransaction({
  to: '0xAddress...',
  value: '0.1',
  network: 'polygon'
});

📂 Estrutura do Pacote
dist/: Código compilado pronto para produção.

src/: Código fonte original em TypeScript.

src/ui/: Componentes visuais e estilos.

src/providers/: Lógica de conexão com blockchain.


📝 Licença

Distribuído sob a licença MIT. Veja LICENSE para mais informações.

Gislaine - Coingbit Enterprise 🚀🌌

© 2025 Nexus Infrastructure.



