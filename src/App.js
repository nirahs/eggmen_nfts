// React
import React, { useState } from 'react';

// React Router
import { Routes, Route, Link,  useNavigate } from 'react-router-dom';

// Context
import { useWallet } from './providers/wallet';

// Styles
import './App.css';

// Component
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Info from './components/Info';
import PageUnavailable from './components/PageUnavailable';
import Loading from './components/Loading';
import Authenticate from './components/Authenticate';

// Icons
import {ReactComponent as Favicon} from './assets/svgs/Favicon.svg';
import {ReactComponent as Twitter} from './assets/svgs/Twitter.svg';
import {ReactComponent as Discord} from './assets/svgs/Discord.svg';


// Global Variables
import { externalLinks, networks } from './config';

// Lazy Component
const Mint = React.lazy(() => import('./components/Mint'))
const Terms = React.lazy(() => import('./content/Terms'))
const Privacy = React.lazy(() => import('./content/Privacy'))
const Value = React.lazy(() => import('./content/Value'))

const App = () => {
  const { account, correctNetwork, connect, disconnect } = useWallet();

  // Used for navigation 
  const navigate = useNavigate();

  // Handles navigation to mint component
  const handleNavigationToMint = () => {
    navigate('/mint');
  }

  // Handles navigation to home component
  const handleNavigationToHome = () => {
    navigate('/');
  }

  // Used to Connect wallet and updated the state with selected account
  const handleConnect = async () => {
    await connect();
  }

  const handleDisconnect = async () => {
    await disconnect();
    navigate('/');
  }
  
  return (  
    <div className="app" id="app">
      <Navbar>

        <ul className="left-wrapper nav-left-wrapper flex-container flex-main-sa">
          <li><Link to="/"><Favicon className="icon favicon"/></Link></li>
          <li><Link to="/"><h2 className="heading">EggMen NFTs</h2></Link></li>
        </ul>

        <Routes>
          <Route path="/" element={
            <ul className="right-wrapper nav-right-wrapper flex-container flex-main-sa">
              <li><a href={externalLinks.discordServer} target="_blank" rel="noreferrer" className="link link-light"><Discord className="icon icon-light social-icon"/></a></li>
              <li><a href={externalLinks.twitterProfile} target="_blank" rel="noreferrer" className="link link-light"><Twitter className="icon icon-light social-icon" /></a></li>
              <li><button onClick={Boolean(account) ? (correctNetwork ? handleNavigationToMint : handleConnect) : handleConnect} className="btn btn-light">{Boolean(account) ? (correctNetwork ? "Mint" : "Connect") : "Connect"}</button></li>
            </ul>  
          }/>
          
          <Route path='/mint' element={
            <ul className="right-wrapper nav-right-wrapper">
              <li><button className="btn btn-light" onClick={handleDisconnect}>Disconnect</button></li>
            </ul> 
          }/>

          <Route path='*' element={
            <ul className="right-wrapper nav-right-wrapper">
              <li><button className="btn btn-light" onClick={handleNavigationToHome}>Home</button></li>
            </ul> 
          }/>
        </Routes>            
  
      </Navbar>
      
      
      <Routes>  
        <Route path='/' element={
          <Home 
            account={account}
            handleConnect={handleConnect}
            handleNavigationToMint={handleNavigationToMint}
          />
        }/>

        <Route path='/mint' element={
          <Authenticate> 
            <React.Suspense fallback={<Loading inline={false}/>}>
              <Mint />
            </React.Suspense>
          </Authenticate>
        }/>

        <Route path="/terms-and-condition" element={
          <Info>  
            <React.Suspense fallback={<Loading inline={false}/>}>
              <Terms/>
            </React.Suspense>
          </Info>
        }/>

        <Route path="/privacy-policy" element={
          <Info>
            <React.Suspense fallback={<Loading inline={false}/>}>
              <Privacy/>
            </React.Suspense>
          </Info>
        }/>

        <Route path="/refund-policy" element={
          <Info>
            <React.Suspense fallback={<Loading inline={false}/>}>
              <Value/>
            </React.Suspense>
          </Info>
        }/>

        <Route path="*" element={
          <PageUnavailable/>          
        }/>
      </Routes>

      <Footer/>
                
    </div>
  );
}

export default App;
