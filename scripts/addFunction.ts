import { ethers } from "hardhat";
import { FacetCutAction, getSelectors } from "./libraries/diamond";
import * as _ from '../constants/diamonds.json'



async function addFunction() {
    // const newFacet = await ethers.getContractFactory('VIVARIUM')
    // const newfacet = await newFacet.deploy()
      
    const newFacet = await ethers.getContractFactory('VIVARIUM2')
    const newfacet = await newFacet.deploy()
    await newfacet.waitForDeployment()
    


    // const newFuncs = [
    //     getSelectors(newFacet),
    // ]

    // const exstingFuncs = getSelectors(newfacet)

    const cut = 
        [{
    facetAddress: _.vivariumFacetAddress,
      action: FacetCutAction.Remove,
      functionSelectors: getSelectors(newfacet),
        }]
    
    console.log(cut)


const diamondCut = await ethers.getContractAt('IDiamondCut', _.diamondAddress)
const diamondInit = await ethers.getContractAt('DiamondInit', _.diamondInitAddress)
let functionCall = diamondInit.interface.encodeFunctionData("init");
const tx = await await diamondCut.diamondCut(
    cut,
    _.diamondInitAddress,
    functionCall,
    { gasLimit: 3000000 }
  );
// const tx = await diamondCut.diamondCut(cut, ethers.ZeroAddress, '0x', { gasLimit: 3000000 })
const receipt = await tx.wait()
if (!receipt.status) {
  throw Error(`Diamond upgrade failed: ${tx.hash}`)
}
console.log('Completed diamond cut: ', tx.hash)
}


addFunction().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });