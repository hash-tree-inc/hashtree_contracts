// import LZ_ENDPOINTS from"../constants/layerzeroEndpoints.json";

// async ({ deployments, getNamedAccounts }) => {
//   const { deploy } = deployments;
//   const { deployer } = await getNamedAccounts();
//   console.log(`>>> your address: ${deployer}`)

//     const lzEndpointAddress = LZ_ENDPOINTS[hre.network.name]
//     console.log(`[${hre.network.name}] Endpoint Address: ${lzEndpointAddress}`)

//     await deploy("OFTV2", {
//       from: deployer,
//       args: ["Name", "Symbol", 0, lzEndpointAddress],
//       log: true,
//       waitConfirmations: 1,
//   })
// };

// module.exports.tags = ["OFTV2"];
