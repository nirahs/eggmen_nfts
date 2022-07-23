// React
import { useState, useRef, useEffect } from 'react';

// Utils
import { createContract} from '../utils/contract'

const useCreateTokenContract = (contractAddress, contractAbi) => {
  let isMounted = true;
  
  const [contract, setContract] = useState(null);
  
  useEffect(() => {

    try {
      
      const contract = createContract(contractAddress, contractAbi);
      setContract(() => {
        if(isMounted){
          return contract
        }
      });

    }catch(e) {
      console.log(e.message);
    }

    return () => {
      isMounted = false;
    }
        
  }, [contractAddress, contractAbi]);

  return contract;
}

export default useCreateTokenContract;

