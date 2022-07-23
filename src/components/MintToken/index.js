// React
import { useState, useRef, useEffect } from 'react';

// Hooks
import useListenerForMint from '../../hooks/useListenerForMint';

// Components
import Cards from '../Cards';

// CSS
import './mint_token.css';

// Utils
import { mintEggMenTokens } from '../../utils/contract';

// Icons and Images
import { ReactComponent as ExternalLink } from '../../assets/svgs/Link.svg'

// Global Variables
import { defaultMintCount, maxMintCount, price, unit } from '../../config';


const MintToken = ({ account, contract }) => {

  let isMounted = true;

  const [txHash, setTxHash] = useState(null);
  
  const { pendingInMintedToken, errorInMintedToken, mintedTokensData } = useListenerForMint( contract );

  const handleMinting = async (nftCount) => {
    if(isMounted){
      setTxHash(await mintEggMenTokens(nftCount, price, unit, contract));
    }
  }

  useEffect(() => {
    return () => {
      isMounted = false;
    }
  }, [])

  return (
    <section className="mint-token">
      <div className="mint-token-container flex-container flex-column flex-center">

        <div className="heading-wrapper flex-container flex-column flex-center">
          <h2 className="heading heading-border">Mint EggMen NFTs</h2>
        </div>

        <div className="token-wrapper flex-container flex-column flex-center">
          <Cards collection={mintedTokensData} pending={pendingInMintedToken} error={errorInMintedToken}/>
        </div>

        <div className="links-btns-wrapper wrapper flex-container flex-column flex-main-fs">
          <div className="btns-wrapper flex-container flex-center">
            <button className="btn special-btn" onClick={() => handleMinting(defaultMintCount)}>Mint {defaultMintCount} NFT</button>
            <button className="btn special-btn" onClick={() => handleMinting(maxMintCount)}>Mint {maxMintCount} NFT</button>
          </div>
          
          <div className={`links-wrapper flex-container flex-center ${Boolean(txHash !== null) && Boolean(txHash !== undefined) ? 'active' : ''}`}>
            <a className="link link-dark external-link" href={`https://rinkeby.etherscan.io/tx/${txHash}`} target="_blank" rel="noreferrer">Block Explorer <ExternalLink className="icon external-link-icon"/></a>
            <a className="link link-dark external-link" href={`https://rinkeby.opensea.io/${account}?search[sortBy]=LAST_TRANSFER_DATE&search[sortAscending]=false`} target="_blank" rel="noreferrer">Market Place <ExternalLink className="icon external-link-icon"/></a>
          </div>
        </div>

      </div>
      
    </section>
  )
  
}

export default MintToken;
