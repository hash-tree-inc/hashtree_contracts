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
const vivaAddr = "0xFaD7cA7cc5CeACE8f835ecC8037Ac514496C7E4C";
const vivaABI = [
  {
    inputs: [],
    name: "_getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
  {
    inputs: [],
    name: "_getBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getString",
    outputs: [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
// 0x2B0d65A0D24Fb8369048C83D3CeB92E158a2153B
const signer = new ethers.Wallet(privKey, provider);

const viva = new Contract(vivaAddr, vivaABI, signer);

const call = async () => {
  //   const vivaFacet = await ethers.getContractAt(
  //     "VIVARIUM",
  //     "0x38eD13b0ba92efbDAD4Fba49eBb8F8e53c10d6E4"
  //   );
  // console.log(await viva._setAddress());
  console.log(await viva.getString());

};

call();



// DiamondCutFacet deployed: 0x61482eE50598afe45aAdd006fe4c3daE391e5dE7
// Diamond deployed: 0x88864312B900dC3424C096a1079E2F96C10ea66F
// DiamondInit deployed: 0xeD272e0eD7950c9179C207bb796eE2AdD1503B94

// Deploying facets
// DiamondLoupeFacet deployed: 0xa496c31031D23a90c063F5A3EAC28e91242c049b
// OwnershipFacet deployed: 0xA96A3c57F80866f56bcd091517c12f43198e209e
// VIVARIUM deployed: 0x3262c045C21f4A8ef95F5aE2aA998Db403B03D57