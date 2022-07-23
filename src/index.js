// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { WalletProvider } from './providers/wallet';

// Component
import App from './App';

// Library
// import { ethers } from 'ethers';
// import { Web3ReactProvider } from '@web3-react/core'

// Styles
import './index.css';


// function getLibrary(provider) {
//   return new ethers.providers.Web3Provider(provider);      
// }
{/* <Web3ReactProvider getLibrary={getLibrary}>
</Web3ReactProvider> */}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WalletProvider>
        <App/>
      </WalletProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
  
