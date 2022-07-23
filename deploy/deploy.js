// const {ethers} = require("hardhat"); 
const hre = require("hardhat");

const main = async () => {
  // await hre.run('compile'); Used if scripts called using node
  
  // Compile the contract and generate 'artifacts' (ABI for the contract) under './src/artifacts' path
  const nftContractFactory = await hre.ethers.getContractFactory('EggMens');
  
  // Deploy the contract to mentioned blockchain (Rinkeby, Fuji, Main)
  const nftContract = await nftContractFactory.deploy("EggMen v6", "EggMen v6", "ipfs://QmdQFiycGpUvjgioBBTzfGgz8SWv6gBbBsuJmx7ERygxEx/");
  
  // Waits until mining process complete
  await nftContract.deployed();

  // Logs the deployed address
  console.log(`Contract deployed to: https://rinkeby.etherscan.io/address/${nftContract.address}`);
  // console.log(`Contract deployed to: https://testnet.snowtrace.io/address/${nftContract.address}`);

  // ================================

  // Minting a NFT

  const signer = await ethers.getSigners();

  let txn = await nftContract.mintNft(1, {value: hre.ethers.utils.parseUnits('1', 'gwei'), from: signer.address});

  // Waiting for mining process
  await txn.wait()

  txn = await nftContract.mintNft(1, {value: hre.ethers.utils.parseUnits('1', 'gwei'), from: signer.address});

  // Waiting for mining process
  await txn.wait()

  txn = await nftContract.mintNft(2, {value: hre.ethers.utils.parseUnits('2', 'gwei'), from: signer.address});

  // Waiting for mining process
  await txn.wait()

  // ================================
}

const runMain = async () => {
  try{
    await main();
    process.exit(0);
  }catch(err){
    console.log(err);
    process.exit(1);
  }
}

runMain();