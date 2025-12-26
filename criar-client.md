comando do resultado  do cli nexus-sdk

import { Nexus } from '@nexus-hq/sdk';

const nexus = new Nexus({ apiKey: 'nx_live_8f3d...' });

// Isso já abre o modal de vidro, pede biometria e usa os $129k de gás
nexus.requestTransaction({
  to: '0x123...',
  value: '0.5',
  network: 'polygon'
});




Crie  Primeiro Cliente: Rode o CLI para gerar a chave de $129k:

npx ts-node scripts/nexus-cli.ts create-client "Banco Digital Alpha" -f 129873

npx ts-node-dev src/index.ts

descricao  A economia de gás, a abstração de carteiras e o controle de saldo via API Key são o que o mercado financeiro chama de "Gold Standard" (Padrão de Ouro).


comando

npm run nexus

rodar  no backend  

npm run nexus -- create-client "Nome do Banco" --fund 129873


output esperado  ✅ CLIENTE REGISTRADO: Nome do Banco
--------------------------------------------------
API KEY:    nx_live_8f3d62a7b... (Entregar para o Banco)
SALDO:      $ 129,873.00
DOMÍNIO:    * (Liberado para teste)
--------------------------------------------------

listar clients  
comando cli  

npm run nexus -- list-clients

output esperado  resultado do coamndo  
📊 LISTA DE CLIENTES NEXUS GESTÃO DE GÁS
================================================================================
NOME                     SALDO (USD)         STATUS      API KEY (PREFIX)
--------------------------------------------------------------------------------
Banco Digital Alpha      $ 129,873.00        ACTIVE      nx_live_8f3d62a...
Exchange Global VIP      $ 50,000.00         ACTIVE      nx_live_2a1c49b...
DEX de Teste             $ 450.25            ACTIVE      nx_live_99e1a2f...
================================================================================

 comando cli  para fazer a recarga  de valores  com a chave api  do client  npm run nexus -- refill-gas "nx_live_8f3d62a7b62a7b62a7b" 50000

 output esperado resultudado  ⛽ RECARGA CONCLUÍDA: Banco Digital Alpha
--------------------------------------------------
VALOR ADICIONADO:  + $ 50,000
SALDO ATUAL:      $ 179,873.00
STATUS:           ACTIVE
--------------------------------------------------

🚀 Como testar agora:
Recarregar o Banco Alpha:

coamndo cli  para recarregar  o banco  a empresa 
 npm run nexus -- refill-gas "SUA_API_KEY" 500

Ver os logs da Blockchain dele:

npm run nexus -- view-logs "SUA_API_KEY" --limit 5



