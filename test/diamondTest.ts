/* global describe it before ethers */

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

describe("DiamondTest", async function () {
  let diamondAddress: string;
  let diamondCutFacet: Contract;
  let diamondLoupeFacet: Contract;
  let ownershipFacet: Contract;
  let tx;
  let receipt;
  let result;
  const addresses: string[] = [];

  before(async function () {
    diamondAddress = await deployDiamond();
    console.log({ diamondAddress });
    diamondCutFacet = await ethers.getContractAt(
      "DiamondCutFacet",
      diamondAddress
    );
    diamondLoupeFacet = await ethers.getContractAt(
      "DiamondLoupeFacet",
      diamondAddress
    );
    ownershipFacet = await ethers.getContractAt(
      "OwnershipFacet",
      diamondAddress
    );
  });

  it("should have three facets -- call to facetAddresses function", async () => {
    for (const address of await diamondLoupeFacet.facetAddresses()) {
      addresses.push(address);
    }
    console.log({ addresses });
    assert.equal(addresses.length, 3);
  });

  it("facets should have the right function selectors -- call to facetFunctionSelectors function", async () => {
    let selectors = getSelectors(diamondCutFacet);

    result = await diamondLoupeFacet.facetFunctionSelectors(addresses[0]);
    assert.sameMembers([...result], selectors);
    selectors = getSelectors(diamondLoupeFacet);
    result = await diamondLoupeFacet.facetFunctionSelectors(addresses[1]);
    assert.sameMembers([...result], selectors);
    selectors = getSelectors(ownershipFacet);
    result = await diamondLoupeFacet.facetFunctionSelectors(addresses[2]);
    assert.sameMembers([...result], selectors);
  });

  it("selectors should be associated to facets correctly -- multiple calls to facetAddress function", async () => {
    assert.equal(
      addresses[0],
      await diamondLoupeFacet.facetAddress("0x1f931c1c")
    );
    assert.equal(
      addresses[1],
      await diamondLoupeFacet.facetAddress("0xcdffacc6")
    );
    assert.equal(
      addresses[1],
      await diamondLoupeFacet.facetAddress("0x01ffc9a7")
    );
    assert.equal(
      addresses[2],
      await diamondLoupeFacet.facetAddress("0xf2fde38b")
    );
  });

  it("should add a facet", async () => {
    const VivaFacet = await ethers.getContractFactory("VIVARIUM");
    const vivaFacet = await VivaFacet.deploy();
    await vivaFacet.waitForDeployment();
    addresses.push(await vivaFacet.getAddress());
    const selectors = getSelectors(vivaFacet).remove([
      "supportsInterface(bytes4)",
    ]);

    tx = await diamondCutFacet.diamondCut(
      [
        {
          facetAddress: await vivaFacet.getAddress(),
          action: FacetCutAction.Add,
          functionSelectors: selectors,
        },
      ],
      ethers.ZeroAddress,
      "0x",
      { gasLimit: 800000 }
    );
    receipt = await tx.wait();
    if (!receipt.status) {
      throw Error(`Diamond upgrade failed: ${tx.hash}`);
    }
    result = await diamondLoupeFacet.facetFunctionSelectors(
      await vivaFacet.getAddress()
    );
    assert.sameMembers([...result], selectors);
  });

  it("should test function call", async () => {
    const vivaFacet = await ethers.getContractAt("VIVARIUM", diamondAddress);

    console.log(await vivaFacet._getAddress());
  });
});
