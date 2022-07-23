// CSS
import './summary.css';

// Icon
import {ReactComponent as Link} from '../../assets/svgs/Link.svg';

// Video
import NFTs from '../../assets/webm/preview_30_50.webm'

// Global Variables
import { externalLinks } from '../../config'


function Summary() {
  return (
    <section className="summary container flex-container flex-main-sa" id="summary">
      <div className="summary-container sub-container  flex-container flex-main-sa">
        <div className="video-wrapper sub-container flex-container flex-column flex-center">
          <video className="video" src={NFTs} muted autoPlay loop/>
        </div>

        <div className="summary-wrapper wrapper flex-container flex-column flex-cross-fs">
          <h2 className="heading heading-border">EggMen NFTs Summary</h2>
          <p className="paragraph">EggMen NFTs are collectable art works which is created using a collection of programmatically and randomly generated NFTs. There are 1,000 randomly assembled EggMen from over 100+ traits. An EggMen NFT consist of 3 layers those are Head, Face and Background.</p>
          <p className="paragraph">EggMen NFTs are ERC721 tokens and the contract deployed to the Avalanche blockchain. Avalanche is an open-source blockchain. Avalanche features 3 built-in blockchains: Exchange Chain (X-Chain), Platform Chain (P-Chain), and Contract Chain (C-Chain). The Avalanche-Ethereum Bridge (C-Chain) enables seamless solidity contract deployment.</p>
          <p className="paragraph">EggMen NFTs are stored in IPFS (InterPlanetary File System) which is peer-to-peer network for storing and sharing data in a distributed file system. IPFS is resilient, open and decentralized.</p>
          <a className="btn btn-dark" href={externalLinks.whitepaper} target="_blank" rel="noreferrer">EggMen White Paper <Link className="icon link-icon"/></a>
        </div> 
      </div>
    </section>
  )
}

export default Summary;