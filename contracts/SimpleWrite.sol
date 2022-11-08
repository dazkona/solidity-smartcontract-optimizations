// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract SimpleWrite {
	uint256 private storageTotal = 0;

	constructor() {}

    function writeFromStorage() external
    {
        for(uint i = 0; i < 100; i++)
            storageTotal += 1;
    }

    function writeCachedToMemory() external
    {
        uint256 memoryTotal = 0;
        for(uint i = 0; i < 100; i++)
            memoryTotal += 1;
		storageTotal = memoryTotal;
    }
}