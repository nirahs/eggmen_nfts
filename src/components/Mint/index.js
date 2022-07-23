// Hooks
import useCreateTokenContract from '../../hooks/useCreateTokenContract'; 

// Components
import MintToken from '../MintToken';
import OwnedToken from '../OwnedToken';
import Loading from '../Loading';

// Context
import { useWallet } from '../../providers/wallet';

// CSS
import './mint.css'

// Contract ABI
import EggMenNFTs from '../../artifacts/contracts/EggMenNFTs.sol/EggMenNFTs.json';
const contractAbi = EggMenNFTs.abi;

// Contract Address
// const contractAddress = process.env.REACT_APP_ETH_TEST_CONTRACT_ADDRESS;
const contractAddress = process.env.REACT_APP_ETH_MAIN_CONTRACT_ADDRESS;


const Mint = () => {
  
  // Contract
  const contract = useCreateTokenContract(contractAddress, contractAbi);

  // Account
  const { account } = useWallet();
  
  
  if(Boolean(account) && Boolean(contract)){
    return (
      <main className="mint">
        <MintToken
          account={account}
          contract={contract} 
        />
         
        <OwnedToken
          account={account}
          contract={contract}
        />
      </main>
    )
  }

  return (
    <main className='mint'>
      <Loading inline={false}/> 
    </main>
  );
}

export default Mint;
