const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const HelloZeta = await hre.ethers.getContractFactory("HelloZeta");
  const helloZeta = await HelloZeta.deploy();

  await helloZeta.deployed();

  console.log("HelloZeta contract deployed to:", helloZeta.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
