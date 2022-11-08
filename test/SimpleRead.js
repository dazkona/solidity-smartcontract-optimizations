const { time,loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleRead", function () {

	it("Cached reads cost less gas than storage ones", async function () {

		const SimpleReadFactory = await ethers.getContractFactory("SimpleRead");
		const simpleRead = await SimpleReadFactory.deploy();

		const tx1 = await simpleRead.readFromStorage();
		const receipt1 = await tx1.wait();
		console.log("Gas: "+ receipt1.gasUsed.toString());

		const tx2 = await simpleRead.readCachedToMemory();
		const receipt2 = await tx2.wait();
		console.log("Gas: "+ receipt2.gasUsed.toString());

		expect(receipt2.gasUsed).to.lessThan(receipt1.gasUsed);
	});

});