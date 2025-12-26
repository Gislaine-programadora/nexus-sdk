// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./NexusSmartWallet.sol";

contract NexusWalletFactory {
    mapping(address => address) public getWallet;

    function createWallet(address _owner, address _relayer) external returns (address) {
        require(getWallet[_owner] == address(0), "Nexus: Wallet already exists");
        
        // Deploy de uma nova Smart Wallet
        NexusSmartWallet wallet = new NexusSmartWallet(_owner, _relayer);
        getWallet[_owner] = address(wallet);
        
        return address(wallet);
    }
}