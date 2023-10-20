import {
  getSelectors,
  FacetCutAction,
  removeSelectors,
  findAddressPositionInFacets,
} from "../scripts/libraries/diamond";
import { deployDiamond } from "../scripts/deploy";
import { assert } from "chai";
import { ethers } from "hardhat";
import { Contract } from "ethers";

const ennode = process.env.KLAYTN_NODE_MAIN_ENDPOINT;
const provider = new ethers.JsonRpcProvider(ennode);
const privKey = process.env.privateKey as string;
const vivaAddr = "0x499fa5330715cecaF397397D356e577149E34d4f";
const vivaABI = [
  {
    inputs: [],
    name: "_getAddress",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_setAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const signer = new ethers.Wallet(privKey, provider);

const viva = new Contract(vivaAddr, vivaABI, signer);

const call = async () => {
  //   const vivaFacet = await ethers.getContractAt(
  //     "VIVARIUM",
  //     "0x38eD13b0ba92efbDAD4Fba49eBb8F8e53c10d6E4"
  //   );
  //   console.log(await vivaFacet._getAddress());
  console.log(await viva._getAddress());
};

call();
