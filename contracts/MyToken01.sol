// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyToken01 is ERC721 {
    uint256 private totalSupply;

    constructor() ERC721("MyToken01", "MTK") {}

    function mint() external {
        totalSupply++;
        _safeMint(msg.sender, totalSupply);
    }
}