# 📦 Nexus SDK Core

O **Nexus SDK** é a biblioteca cliente oficial para integração com a infraestrutura Nexus. Ele permite que desenvolvedores conectem suas aplicações a Smart Wallets com suporte a transações gasless (sem taxas para o usuário).

## ✨ Funcionalidades

* **Transações Gasless**: Execute chamadas em blockchain sem que o usuário precise de saldo nativo (ETH/MATIC).
* **Interface Premium**: Modais de confirmação pré-estilizados com efeito Glassmorphism.
* **Auto-Injection**: Estilos CSS injetados automaticamente para facilitar a integração.
* **Type Safety**: Suporte completo a TypeScript para uma experiência de desenvolvimento superior.

## 🚀 Como instalar (Desenvolvimento Local)

Para testar o SDK localmente antes da publicação no NPM, utilize o `npm link`:

1. Na pasta `sdk/`, compile o projeto e crie o link:
   ```bash
   npm run build