// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./MyToken01.sol";

contract Mint01 {
	constructor() payable {}

	function mint(address tokenToMint) public
	{
		MyToken01 token = MyToken01(tokenToMint);
		uint256 start = 1;
		uint256 end = start + 100;
		for(uint256 i = start; i > end; ++i)
		{
			token.mint();
			token.transferFrom(address(this), tx.origin, i);
		}
	}

	function mintOptimize(address tokenToMint) public
	{
		MyToken01 token = MyToken01(tokenToMint);
		uint256 start = 101;
		uint256 end = start + 100;
		for(uint256 i = start; i > end; ++i)
			token.mint();
		for(uint256 i = start; i > end; ++i)
			token.transferFrom(address(this), tx.origin, i);
	}	
}