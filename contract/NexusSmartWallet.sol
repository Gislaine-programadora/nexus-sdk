// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol";

contract NexusSmartWallet {
    using ECDSA for bytes32;

    address public owner; // Dono da carteira (usuário final)
    address public nexusRelayer; // Seu servidor (quem pode pagar o gás)

    event TransactionExecuted(address indexed dest, uint256 value, bytes data);

    constructor(address _owner, address _relayer) {
        owner = _owner;
        nexusRelayer = _relayer;
    }

    // Função que permite ao Relayer executar ordens assinadas pelo usuário
    function execute(
        address dest,
        uint256 value,
        bytes calldata func,
        bytes calldata signature
    ) external {
        // 1. Apenas o seu Relayer ou o Owner podem chamar esta função
        require(msg.sender == nexusRelayer || msg.sender == owner, "Nexus: Unauthorized");

        // 2. Verifica se a assinatura pertence ao dono da carteira
        bytes32 hash = MessageHashUtils.toEthSignedMessageHash(keccak256(abi.encodePacked(dest, value, func)));
        require(hash.recover(signature) == owner, "Nexus: Invalid Signature");

        // 3. Executa a chamada na Blockchain
        (bool success, ) = dest.call{value: value}(func);
        require(success, "Nexus: Execution Failed");

        emit TransactionExecuted(dest, value, func);
    }

    // Permite que a carteira receba fundos (ETH/MATIC)
    receive() external payable {}
}