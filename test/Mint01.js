const { time,loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Mint01", function () {

	it("Optimize minting of NFTs. Setting a variable from 1 to any is cheaper than setting from 0.", async function () {

		const MyToken01Factory = await ethers.getContractFactory("MyToken01");
		const myToken01 = await MyToken01Factory.deploy();

		const Mint01NormalFactory = await ethers.getContractFactory("Mint01");
		const mint01Normal = await Mint01NormalFactory.deploy();		

		const tx1 = await mint01Normal.mint(myToken01.address);
		const receipt1 = await tx1.wait();
		console.log("Gas: "+ receipt1.cumulativeGasUsed.toString());

		const tx2 = await mint01Normal.mintOptimize(myToken01.address);
		const receipt2 = await tx2.wait();
		console.log("Gas: "+ receipt2.cumulativeGasUsed.toString());

		expect(receipt2.gasUsed).to.lessThan(receipt1.gasUsed);
	});

});