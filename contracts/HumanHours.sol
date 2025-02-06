// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HumanHours {
    mapping(address => uint256) public balances;
    event Transfer(address indexed from, address indexed to, uint256 value);

    function transfer(address recipient, uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        balances[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
    }
    
    function earnHours(address user, uint256 amount) public {
        balances[user] += amount;
    }
} 