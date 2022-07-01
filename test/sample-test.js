const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HalfMoonMechsNFT", function () {
  it("Should return the new greeting once it's changed", async function () {
    const HalfMoonMechsNFT = await ethers.getContractFactory("HalfMoonMechsNFT");
    const halfMoonMechsNFT = await HalfMoonMechsNFT.deploy("HalfMoonMechsNFT");
    await halfMoonMechsNFT.deployed();

    expect(await halfMoonMechsNFT.greet()).to.equal("HalfMoonMechsNFT");

    const setGreetingTx = await halfMoonMechsNFT.setGreeting("HalfMoonMechsNFT");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await halfMoonMechsNFT.greet()).to.equal("HalfMoonMechsNFT");
  });
});
