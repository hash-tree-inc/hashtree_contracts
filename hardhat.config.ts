import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";
import "@klaytn/hardhat-utils";
import "@primitivefi/hardhat-dodoc";

import "dotenv/config"; // import .env variables

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
