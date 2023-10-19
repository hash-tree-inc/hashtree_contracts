import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";
import "@klaytn/hardhat-utils";
import "@primitivefi/hardhat-dodoc";

import "dotenv/config"; // import .env variables
import "./tasks";
// import "ethers";
function task(
  arg0: string,
  arg1: string,
  arg2: (taskArgs: any, hre: any) => Promise<void>
) {
  throw new Error("Function not implemented.");
}

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

function getMnemonic(networkName: string) {
  if (networkName) {
    const mnemonic = process.env["MNEMONIC_" + networkName.toUpperCase()];
    if (mnemonic && mnemonic !== "") {
      return mnemonic;
    }
  }

  const mnemonic = process.env.MNEMONIC;
  if (!mnemonic || mnemonic === "") {
    return "test test test test test test test test test test test junk";
  }

  return mnemonic;
}

function accounts(chainKey: string) {
  return { mnemonic: getMnemonic(chainKey) };
}
const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    klaytn_mainnet: {
      url: process.env.KLAYTN_NODE_ENDPOINT,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
      gasPrice: 25000000000,
    },
    klaytn_testnet: {
      url: process.env.KLAYTN_NODE_ENDPOINT,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
      gasPrice: 25000000000,
    },
  },
};

export default config;
