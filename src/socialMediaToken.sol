// contracts/SocialMediaToken.sol
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SocialMediaToken is ERC20 {
    address public owner;

    constructor(uint256 initialSupply) ERC20("SocialMediaToken", "SMT") {
        _mint(msg.sender, initialSupply);
        owner = msg.sender;
    }

    function awardTokens(address recipient, uint256 amount) public {
        require(msg.sender == owner, "Only the owner can award tokens");
        _transfer(owner, recipient, amount);
    }
}
