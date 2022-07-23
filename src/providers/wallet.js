// React
import { useState, useEffect, useContext, createContext } from "react";

// Utils
import { connectWallet, checkAccounts, checkNetwork, compareNetwork } from "../utils/wallet";

// Component
import Modal from '../components/Modal';

// Global Variables
import { networks } from "../config/index"

// Ethereum Provider
const { ethereum } = window;


const WalletContext = createContext(null);

export const WalletProvider = ({ children }) => {

  const[modalContent, setModalContent] = useState(null)
  const [account, setAccount] = useState(null);
  const [correctNetwork, setCorrectNetwork] = useState(null);

  const connect = async() => {
    if(ethereum){
      if(checkNetwork(networks.rinkeby)){
        setCorrectNetwork(true)
        setAccount(await connectWallet())
        sessionStorage.setItem("isWalletConnected", true);
      }else{
        setCorrectNetwork(false)
        setModalContent("Wrong Network! Please change the network to Rinkeby")  
      }
    }else{
      setModalContent("Ethereum object unavailable. Please install Metamask extension or use Brave browser!")
    }
  }

  const disconnect = () => {
    setAccount(null)
    sessionStorage.setItem("isWalletConnected", false);
  }

  useEffect(() => {
    if(ethereum) {

      ethereum.on('accountsChanged', (accounts) => {
        setAccount(accounts[0])
      });  
  
      ethereum.on('chainChanged', (chainId) => {
        if(compareNetwork(Number(chainId), networks.rinkeby)){
          setCorrectNetwork(true)
        }else{
          setCorrectNetwork(false);
          setModalContent("Wrong Network! Please change the network to Rinkeby")  
        }
      })
  
    }

    return () => {
      ethereum.removeListener('accountChanged', () => {
        console.log("Wallet accountChanged event listener cleared");
      });  

      ethereum.removeListener('chainChanged', () => {
        console.log("Wallet chainChanged event listener cleared");
      })
    }
  }, [ethereum]); 

  return (
    <WalletContext.Provider value={{account, correctNetwork, connect, disconnect}}>
      {
        Boolean(modalContent !== null) &&
        Boolean(!correctNetwork) &&

        <Modal setModalContent={setModalContent}>
          {modalContent}
        </Modal>
      }

      {children}
    </WalletContext.Provider>
  );

};

export const useWallet = () => {
  return useContext(WalletContext);
};


// const connectWalletOnPageLoad = async () => {
//   if (sessionStorage?.getItem("isWalletConnected") === "true") {
//     try {
//       await connect();
//     } catch (e) {
//       console.log(e.message);
//     }
//   }
// };
// connectWalletOnPageLoad();
// return () => {
//   sessionStorage.setItem("isWalletConnected", false);
// }

// return (
//   <WalletContext.Provider value={{account, connect, disconnect}}>
//     {children}
//   </WalletContext.Provider>
// );

// const { activate, account, active, error, deactivate } = useWeb3React();

// const [loaded, setLoaded] = useState(false)

// async function connect() {
//   try {
//     if(Boolean(checkNetwork(networks.rinkeby))){
//       await activate(injected);
//       sessionStorage.setItem("isWalletConnected", true);
//       return true;
//     }else{
//       return false;
//     }
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// async function disconnect() {
//   try {
//     deactivate();
//     sessionStorage.setItem("isWalletConnected", false);
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// useEffect(() => {
//   injected
//     .isAuthorized()
//     .then((isAuthorized) => {
//       setLoaded(true)
//       if (isAuthorized && !active && !error) {
//         activate(injected)
//       }
//     })
//     .catch(() => {
//       setLoaded(true)
//     })    

// }, [activate, active, error]);

// if(loaded) {
//   return (
//     <WalletContext.Provider value={{account, connect, disconnect}}>
//       {children}
//     </WalletContext.Provider>
//   );
// }

// import { injected } from "../config/connectors";

// import { useWeb3React } from "@web3-react/core";

// useEffect(() => {
//   const connectWallet = async() => {
//     if (sessionStorage?.getItem("isWalletConnected") === "true") {
//       try {
//         const res = await checkAccounts();
//         console.log(res)
//         setAccount(res)
//       } catch (e) {
//         console.log(e.message);
//       }
//     }
//   }

//   connectWallet();
// }, [])

