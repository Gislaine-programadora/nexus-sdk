import { ethers } from "hardhat";

async function main() {
  console.log("🚀 Iniciando o deploy do Ecossistema Nexus...");

  // 1. Deploy da Factory (A fábrica de Smart Wallets)
  const Factory = await ethers.getContractFactory("NexusWalletFactory");
  const factory = await Factory.deploy();
  await factory.waitForDeployment();

  const factoryAddress = await factory.getAddress();
  console.log(`✅ Factory instalada em: ${factoryAddress}`);

  // 2. No seu .env do Backend, você salvará este endereço.
  // Toda vez que um novo usuário entrar, seu backend chamará esse contrato.
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});