// React
import  { useState } from 'react';

// React Router
import { Navigate } from 'react-router-dom';

// Context
import { useWallet } from '../../providers/wallet'

// Component
import Loading from '../Loading';

// Utils
import { checkNetwork } from '../../utils/wallet';

// Global Variables
import { networks } from '../../config';

// CSS
import './authenticate.css'

const Authenticate = ({ children }) => {
  const { account } = useWallet();

  if(Boolean(!account) || Boolean(!checkNetwork(networks.rinkeby))){
    return (
      <Navigate to='/'/>
    );
  }

  if(Boolean(account) && Boolean(checkNetwork(networks.rinkeby))){
    return children;
  }

  return (
    <section className="authenticate">
      <Loading inline={false} />
    </section>
  );
}

export default Authenticate;
