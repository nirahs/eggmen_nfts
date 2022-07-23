# Welcome to EggMen NFT Collection

![Banner](assets/home.png)


EggMen NFTs are collectable `ERC721` tokens. Contract deployed to Avalanche C-Chain. NFTs are uploaded to ipfs and link to the `ERC721Enumerable` contract.


# Configuration Process

Creating react app

```shell
$ npx create-react-app egg-men
```

Installing required packages

```shell
$ npm install hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers @openzeppelin/contracts dotenv avalanche ethers web3 typed.js react-router-dom@6 @web3-react/injected-connector @web3-react/core
```

Creating sample hardhat project

```shell
$ npx hardhat -y
```

Setting path inside hardhat.config.js `module.export` to save the compiled contract ABI inside `./src/artifacts` folder. 

```javascript
module.exports = {
  paths: {
    artifacts: './src/artifacts',
  }
}
```

Setting networks to publish the smart contracts. 

```javascript
networks: {
    hardhat: {
      chainId: 43112,
    },
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/api-key',
    },
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      chainId: 43113,
    },
    mainnet: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      chainId: 43114,
    }
  },
``` 

