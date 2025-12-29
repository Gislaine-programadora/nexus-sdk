<p align="center">
  <img src="https://github.com/user-attachments/assets/4b0e3d44-b5d2-44cd-b785-b27084747a12" width="200" alt="Nexus Logo">
</p>


<p align="center">
   <img src="https://img.shields.io/npm/v/@nexus-hq/sdk?style=for-the-badge&color=red" alt="NPM Version">
  <img src="https://img.shields.io/badge/version-0.0.1-red?style=for-the-badge" alt="Version"> 
  <img src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge" alt="License">
  <img src="https://img.shields.io/badge/Web3-Infrastructure-blueviolet?style=for-the-badge" alt="Web3">
  <img src="https://img.shields.io/badge/Maintained%3F-yes-brightgreen?style=for-the-badge" alt="Maintained">
</p>

---


---

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


## 💰 Modelo de Monetização & Lucratividade

O Nexus-SDK inclui um sistema nativo de gestão de taxas, permitindo que os proprietários de infraestrutura gerem receita passiva em cada operação de Top-up.

| Volume Mensal de Transações | Taxa de Serviço (5%) | Seu Lucro Mensal (Bruto) | Relatório Gerado |
| :--- | :--- | :--- | :--- |
| $ 10.000 | 5% | **$ 500** | ✅ Automático |
| $ 100.000 | 5% | **$ 5.000** | ✅ Automático |
| $ 1.000.000 | 5% | **$ 50.000** | ✅ Automático |

> **Nota:** Todos os valores são calculados automaticamente pelo nosso motor de liquidação e os recibos
 são enviados via e-mail em formato PDF profissional.

🚀 O Nexus-SDK acaba de nascer: Infraestrutura Web3 com foco em lucratividade!

É com muito orgulho que anuncio a publicação oficial do @nexus-hq/sdk no NPM! 📦🌌

Desenvolver para a Web3 não deve ser apenas sobre tecnologia, mas sobre sustentabilidade financeira. O Nexus-SDK foi criado para permitir que desenvolvedores e empresas criem apps com transações Gasless (Abstração de Conta) e, ao mesmo tempo, gerenciem lucros de comissão de forma automatizada.

✨ Destaques do Lançamento: ✅ Instalação Instantânea: npx @nexus-hq/sdk nexus-init ✅ Receita Passiva: Sistema nativo de comissões (revenue sharing). ✅ Relatórios Profissionais: Extratos de lucro direto no e-mail. ✅ Licença MIT: Open-source e pronto para o mercado.

Este é o primeiro passo da Nexus, focando em remover a fricção entre o usuário final e a complexidade da blockchain.

🛠️ Confira no NPM: https://www.npmjs.com/package/@nexus-hq/sdk ⭐ Código-fonte no GitHub: https://github.com/Gislaine-programadora/nexus-sdk

#Web3 #Blockchain #NPM #OpenSource #SoftwareEngineering #AccountAbstraction #Ethereum #NexusSDK

##  NPM  


NPM:  https://www.npmjs.com/package/@nexus-hq/sdk

---
# Nexus SDK 🚀

Unified Web3 Liquidity & Gas Abstraction — simplifique a integração com Web3 em qualquer aplicaçao


![Nexus Bridge](https://i.imgur.com/ABC123.png)


📝 Licença

Distribuído sob a licença MIT. Veja LICENSE para mais informações.

Gislaine - Coingbit Enterprise 🚀🌌

© 2025 Nexus Infrastructure.



