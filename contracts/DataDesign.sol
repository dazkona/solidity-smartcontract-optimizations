// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract DataDesign {

    struct BadDesignedItem {
        uint128 index;
		uint256 valueLocked;
        uint64 userType;
		uint256 gweiFactor;
		bool activeUser;
		uint256 lastValueChange;
		address userAddress;
    }

    struct GoodDesignedItem {
		uint256 valueLocked; 	 	// 32 bytes, complete slot
		uint256 gweiFactor; 		// 32 bytes, complete slot
		uint256 lastValueChange; 	// 32 bytes, complete slot
        uint64 userType;			// 8 bytes
		bool activeUser;			// 1 byte
		address userAddress;		// 20 bytes, slot with 29
		uint128 index;				// 16 bytes, new slot
    }	

	BadDesignedItem[] public naughtyItems;
	GoodDesignedItem[] public goodItems;

	constructor() payable {}

    function random(uint number) public view returns(uint)
	{
    	return uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty, msg.sender))) % number;
    }	

	// Gas: 16125699
	function naughtyItemsGenerator() public
	{
		for(uint i = 0; i < 100; i++)
		{
			naughtyItems.push(BadDesignedItem({
				index: uint128(random(150_000)),
				valueLocked: random(150_000_000),
				userType: uint64(random(10)),
				gweiFactor: random(150_000_000),
				activeUser: true,
				lastValueChange: random(150_000_000),
				userAddress: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE
			}));
		}
	}

	// Gas: 1175572
	function goodItemsGenerator() public
	{
		for(uint i = 0; i < 100; i++)
		{
			goodItems.push(GoodDesignedItem({
				index: uint128(random(150_000)),
				valueLocked: random(150_000_000),
				userType: uint64(random(10)),
				gweiFactor: random(150_000_000),
				activeUser: true,
				lastValueChange: random(150_000_000),
				userAddress: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE
			}));
		}
	}	

}