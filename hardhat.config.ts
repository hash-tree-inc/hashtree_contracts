import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";
import "@klaytn/hardhat-utils";
import "@primitivefi/hardhat-dodoc";
// import "ethers";
const config: HardhatUserConfig = {
  solidity: "0.8.19",
  // networks: {
  //   localhost: {
  //     url: "http://localhost:8545",
  //   },
  // },
};

export default config;
