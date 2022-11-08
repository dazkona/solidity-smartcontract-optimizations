// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const SimpleRead = await hre.ethers.getContractFactory("SimpleRead");
  const simpleRead = await SimpleRead.deploy();
  await simpleRead.deployed();
  console.log(`SimpleRead deployed to ${simpleRead.address}`);

  const SimpleWrite = await hre.ethers.getContractFactory("SimpleWrite");
  const simpleWrite = await SimpleWrite.deploy();
  await simpleWrite.deployed();
  console.log(`SimpleWrite deployed to ${simpleWrite.address}`);

  const MyToken01 = await hre.ethers.getContractFactory("MyToken01");
  const myToken01 = await MyToken01.deploy();
  await myToken01.deployed();
  console.log(`MyToken01 deployed to ${myToken01.address}`);    

  const Mint01 = await hre.ethers.getContractFactory("Mint01");
  const mint01 = await Mint01.deploy();
  await mint01.deployed();
  console.log(`Mint01 deployed to ${mint01.address}`);  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
