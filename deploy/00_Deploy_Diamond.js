/* global ethers */
/* eslint prefer-const: "off" */

import { deployDiamond } from ('../lib/diamond/deploy.ts')


module.exports = async ({ getNamedAccounts, deployments }) => {
    await deployDiamond()
}
