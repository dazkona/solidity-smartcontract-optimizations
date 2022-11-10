const { time,loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DataDesign", function () {

	it("Variable Packing affects gas costs", async function () {

		const DataDesignFactory = await ethers.getContractFactory("DataDesign");
		const dataDesign = await DataDesignFactory.deploy();

		const tx1 = await dataDesign.naughtyItemsGenerator();
		const receipt1 = await tx1.wait();
		console.log("Gas: "+ receipt1.gasUsed.toString());

		const tx2 = await dataDesign.goodItemsGenerator();
		const receipt2 = await tx2.wait();
		console.log("Gas: "+ receipt2.gasUsed.toString());

		expect(receipt2.gasUsed).to.lessThan(receipt1.gasUsed);
	});

});