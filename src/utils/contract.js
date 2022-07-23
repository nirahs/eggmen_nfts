// Web3 Library
import { ethers } from "ethers";

// Web3 Provider 
const { ethereum } = window;


export const createContract = (contract_address, contract_abi) => {
  try {
    let provider, signer;

    if(ethereum) {
      // Setting Metamask's provider as provider 
      // Metamask works as proxy between dapp and blockchain
      provider = new ethers.providers.Web3Provider(ethereum);      
      // Getting signer for signing (~ wallet with account) 
      signer = provider.getSigner();
    }else{
      throw new Error("Ethereum object unavailable. Please install Metamask extension or use Brave browser!");
    }

    if(contract_address && contract_abi){
      const contract = new ethers.Contract(contract_address, contract_abi, signer);  
      return contract;
    }else{
      throw new Error(`Please provide the ${contract_address ? 'contract address' : 'contract abi'}. Application error. Please report this bug!`);
    }

  }catch(e) {
    console.log(e.message);
  }
}

export const ownedTokenIds = async (contract, account) => {
  try {
    if(contract && account) {
      return await contract.ownedTokens(account);
    }else{
      throw new Error(`${contract ? 'Account unavailable. Please reconnect wallet!' : 'Contract object unavailable. Application Error. Please report this bug!'}`);
    }
  }catch(e) {
    console.log(e.message)
  }
}


export const mintEggMenTokens = async (nftCount, price, unit, contract) => {
  let provider, signer, balance, cost;

  try {
    
    if(ethereum) {
      provider = new ethers.providers.Web3Provider(ethereum);      
      signer = provider.getSigner();
    }else{
      throw new Error("Ethereum object unavailable. Please install Metamask extension or use Brave browser!");
    }
  
    balance = await signer.getBalance();
    cost = ethers.utils.parseUnits(`${nftCount * price}`, unit);

    if(balance.gt(cost)){
      const transaction = await contract.mintTokens(nftCount, {value: cost, from: signer.address});
      return (await transaction.wait()).transactionHash;
    }else{
      throw new Error("Selected account doesn't have enough balance!");
    }
    
  }catch(e) {
    console.log(e.message);
  }
} 

