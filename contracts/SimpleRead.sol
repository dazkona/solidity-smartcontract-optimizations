// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract SimpleRead {
	uint public storageNumber = 100;

	constructor() {}

    function readFromStorage() external returns (uint)
    {
        uint ret = 0;
        for(uint i = 0; i < storageNumber; i++)
            ret += 1;
        return ret;
    }

    function readCachedToMemory() external returns (uint)
    {
        uint ret = 0;
		uint memoryNumber = storageNumber;
        for(uint i = 0; i < memoryNumber; i++)
            ret += 1;
        return ret;
    }
}
