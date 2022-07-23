// React
import { useState, useRef, useEffect} from 'react';

// Utils
import { fetchData } from '../utils/fetch';
import { bigNumbersToNumbers } from '../utils/parse';

// Token CID
// const tokenCID = process.env.REACT_APP_TEST_TOKEN_CID;
const tokenCID = process.env.REACT_APP_MAIN_TOKEN_CID;


const useListenerForMint = (contract) => {
  let isMounted = true;

  const [mintedTokensData, setMintedTokensData] = useState(null);  
  const [pendingInMintedToken, setPendingMintedToken] = useState(null);
  const [errorInMintedToken, setErrorInMintedToken] = useState(null);

  useEffect(() => {

    // Aborts request
    const controller = new AbortController();

    const fetchOwnedTokensFromIds = async (tokenIds) => {

      try{
        setErrorInMintedToken(() => {
          if(isMounted){
            return null
          }
        });

        setMintedTokensData(() => {
          if(isMounted){
            return null
          }
        });

        setPendingMintedToken(() => {
          if(isMounted){
            return true;
          }
        });
        
        let tokensData = await Promise.all(bigNumbersToNumbers(tokenIds).map(async (tokenId) => {
          
          // const tokenMetadatIpfsUri = `https://eggmens.infura-ipfs.io/ipfs/${metadataCID}/${tokenId}.json`
          // const tokenMetadata = await fetchData(tokenMetadatIpfsUri, controller);
          
          const tokenBlobIpfsUri = `https://eggmens.infura-ipfs.io/ipfs/${tokenCID}/${tokenId}.png`;
          const tokenBlobUrl = URL.createObjectURL(await fetchData(tokenBlobIpfsUri, controller));

          return tokenBlobUrl

        }))
        
        setPendingMintedToken(() => {
          if(isMounted){
            return false;
          }
        });

        setMintedTokensData(() => {
          if(isMounted){
            return tokensData;
          } 
        });

      }catch(e) {
        console.log(e.message)
        setErrorInMintedToken(() => {
          if(isMounted){
            return e.message
          }
        });
      }
    }
    
    if(contract){
      contract.on("Mint", (address, tokenIds) => {
        if(isMounted){
          fetchOwnedTokensFromIds(tokenIds);
        }
      })
    }
    
    return () => {
      if(contract){
        contract.off("Mint", (address, tokenIds) => {
          console.log("Listener for mint event cleared!");
        })
      }
      controller.abort();
      isMounted = false;
    }

  }, [contract]);

  return { pendingInMintedToken, errorInMintedToken, mintedTokensData };
}

export default useListenerForMint;