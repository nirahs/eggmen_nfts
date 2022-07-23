// React
import { useState, useRef, useEffect } from 'react';

// Utils
import { fetchData } from '../utils/fetch';
import { ownedTokenIds } from '../utils/contract';
import { bigNumbersToNumbers } from '../utils/parse';


// const tokenCID = process.env.REACT_APP_TEST_TOKEN_CID;
const tokenCID = process.env.REACT_APP_MAIN_TOKEN_CID;

// Hook used to fetch owned tokens of selected account
const useLoadOwnedToken = (account, contract) => {

  let isMounted = true;
  
  const [ownedTokensData, setOwnedTokensData] = useState(null);
  const [pendingInOwnedToken, setPendingInOwnedToken] = useState(null);
  const [errorInOwnedToken, setErrorInOwnedToken] = useState(null);

  useEffect(() => {

    // Aborts request
    const controller = new AbortController();

    const fetchOwnedTokensFromIds = async () => {
      try {
        setErrorInOwnedToken(() => {
          if(isMounted){
            return null
          }
        });

        setOwnedTokensData(() => {
          if(isMounted){
            return null
          }
        });

        setPendingInOwnedToken(() => {
          if(isMounted){
            return true
          }
        });

        const tokenIds = await ownedTokenIds(contract, account);
        let tokensData = await Promise.all(bigNumbersToNumbers(tokenIds).map(async (tokenId) => {

          // const tokenMetadatIpfsUri = `https://eggmens.infura-ipfs.io/ipfs/${metadataCID}/${tokenId}.json`;
          // const tokenMetadata = await fetchData(tokenMetadatIpfsUri, controller);
          
          const tokenBlobIpfsUri = `https://eggmens.infura-ipfs.io/ipfs/${tokenCID}/${tokenId}.png`;
          const tokenBlobUrl = URL.createObjectURL(await fetchData(tokenBlobIpfsUri, controller));

          return tokenBlobUrl
        }))

        setPendingInOwnedToken(() => {
          if(isMounted){
            return false;
          }
        });
        
        setOwnedTokensData(() => {
          if(isMounted){
            return tokensData;
          }
        });

      }catch(e) {
        console.log(e.message);
        setErrorInOwnedToken(() => {
          if(isMounted){
            return e.message
          }
        });
      }
    }
    
    if(isMounted){
      fetchOwnedTokensFromIds();
    }
    
    return () => {
      controller.abort()
      isMounted = false;
    }

  }, [contract, account]); 

  return {pendingInOwnedToken, errorInOwnedToken, ownedTokensData};
}

export default useLoadOwnedToken;
