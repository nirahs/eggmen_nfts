// Wallet 
const { ethereum } = window;


export const connectWallet = async () => {
  try {

    let accounts = [];
    
    if(ethereum) {
      accounts = await ethereum.request({ method: 'eth_requestAccounts' });    
    }else {
      throw new Error("Ethereum object unavailable. Please install Metamask extension or use Brave browser!");
    }
    
    if(accounts.length !== 0 && ethereum.isConnected()) {
      const account = accounts[0];
      return account; 
    }else{
      throw new Error("Accounts inaccessible. Please import or create new accounts in the wallet and connect it again!");
    }

  } catch (e) {
    console.log(e.message);
  }
}

export const checkAccounts = async () => {
  try {

    let accounts = [];

    if(ethereum){
      accounts = await ethereum.request({method: "eth_accounts"})
    }else{
      throw new Error("Ethereum object unavailable. Please install Metamask extension or use Brave browser!");
    }

    if(accounts.length !== 0 && ethereum.isConnected()){
      const account = accounts[0];
      return account;
    }else{
      throw new Error("Accounts inaccessible. Please import or create new accounts in the wallet and connect it again!");
    }

  }catch(e){
    console.log(e.message);
  }
}

export const compareNetwork = (walletNetwork, appNetwork) => {
  try {
    if(!ethereum){
      throw new Error("Ethereum object unavailable. Please install Metamask extension or use Brave browser!");
    }

    if(walletNetwork === appNetwork.chainId){
      return true;
    }else {
      throw new Error (`Wrong Network! Please select the ${appNetwork.name}.`);
    }
  }catch(e){
    console.log(e.message);
  } 
}

export const checkNetwork = (appNetwork) => {
  try {
    if(!ethereum){
      throw new Error("Ethereum object unavailable. Please install Metamask extension or use Brave browser!");
    }

    if(Number(ethereum.networkVersion) === appNetwork.chainId){
      return true;
    }else {
      throw new Error (`Wrong Network! Please select the ${appNetwork.name}.`);
    }
  }catch(e){
    console.log(e.message);
  } 
}

