const { task } = require("hardhat/config");

require("hardhat/config");
require("@nomiclabs/hardhat-ethers/signers");
require("ethers");
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

task("balances", "Prints the list of AVAX account balances", async (taskArgs, hre) => {
  const accounts= await hre.ethers.getSigners()
  for(const account of accounts){
    const balance = await hre.ethers.provider.getBalance(account.address);
    console.log(`${account.address} has balance ${balance.toString()}`);
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      gasPrice: 225000000000,
      chainId: 43112,
    },
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/DVKF8bmU1qNfSBRPI6LhRchXc-oCEE35',
      accounts: [`0x${process.env.ETHEREUM_RINKEBY_PRIVATE_KEY_2}`],
      gas: 2100000,
      gasPrice: 8000000000
    },
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [`0x${process.env.AVALANCHE_TEST_PRIVATE_KEY}`]
    },
    mainnet: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: [`0x${process.env.AVALANCHE_MAIN_PRIVATE_KEY}`]
    }
  },
};
