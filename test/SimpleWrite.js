const { time,loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleWrite", function () {

	it("Cached writes cost less gas than storage ones", async function () {

		const SimpleWriteFactory = await ethers.getContractFactory("SimpleWrite");
		const simpleWrite = await SimpleWriteFactory.deploy();

		const tx1 = await simpleWrite.writeFromStorage();
		const receipt1 = await tx1.wait();
		console.log("Gas: "+ receipt1.gasUsed.toString());

		const tx2 = await simpleWrite.writeCachedToMemory();
		const receipt2 = await tx2.wait();
		console.log("Gas: "+ receipt2.gasUsed.toString());

		expect(receipt2.gasUsed).to.lessThan(receipt1.gasUsed);
	});

});