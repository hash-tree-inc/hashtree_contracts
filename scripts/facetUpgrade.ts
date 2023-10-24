import { ethers } from "hardhat";
import { OwnershipFacet } from "../typechain-types/facets/OwnershipFacet";
import { FacetCutAction, getSelectors } from "./libraries/diamond";
import * as _ from '../constants/diamonds.json'

async function upgradeFacet() {
    const diamond = await ethers.getContractAt("OwnershipFacet", _.diamondAddress)
    
    const owner = await diamond.owner();
    console.log({ owner });
}

upgradeFacet().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });