// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MintXchangeNFT is ERC721URIStorage, Ownable {
    uint256 public tokenCount;
    
    constructor() ERC721("MintXchange NFT", "MXNFT") {
        tokenCount = 0;
    }

    // Mint a new NFT
    function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256) {
        tokenCount++;
        _mint(recipient, tokenCount);
        _setTokenURI(tokenCount, tokenURI);
        return tokenCount;
    }

    // Fetch total supply
    function totalSupply() public view returns (uint256) {
        return tokenCount;
    }
}
