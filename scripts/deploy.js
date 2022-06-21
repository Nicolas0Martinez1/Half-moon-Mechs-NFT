
const hre = require("hardhat");

async function main() {

  const HalfMoonMechsNFT = await hre.ethers.getContractFactory("HalfMoonMechsNFT");
  const halfMoonMechsNFT = await halfMoonMechsNFT.deploy();

  await halfMoonMechsNFT.deployed();

  console.log("HalfMoonMechsNFT deployed to:", halfMoonMechsNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
