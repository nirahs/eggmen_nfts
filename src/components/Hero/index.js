// React
import { useRef } from 'react';

// Hooks
import useTypeEffect from '../../hooks/useTypeEffect';

// Icons
import {ReactComponent as ExternalLink} from '../../assets/svgs/Link.svg'

// CSS
import './hero.css';

// Global Variable
import { externalLinks } from '../../config';


const Hero = ({account, handleConnect, handleNavigationToMint}) => {
  
  const typeEffectElement = useRef();

  const options = {
    strings: ["collectables.", "awesome.", "to the moon."],
    typeSpeed: 180,
    backSpeed: 300,
    backDelay: 2000,
    loop: true,
    smartBackspace: true,
  }

  useTypeEffect(options, typeEffectElement);  

  return (
    <section className="hero" id="hero">
      <div className="hero-wrapper flex-container flex-column flex-center">
        <h2 className="hero-heading">
          <span>EggMen NFTs are</span>
          <br />
          <span ref={typeEffectElement} id="hero-auto-type"></span>
        </h2>
        <div className="btn-wrapper">  
          <a className="btn btn-dark" href={externalLinks.market} target="_blank" rel="noreferrer">Buy Now <ExternalLink className="icon external-link-icon"/></a>
          <button onClick={Boolean(account) ? handleNavigationToMint : handleConnect} className="btn btn-dark">{Boolean(account) ? "Mint" : "Connect"}</button>
        </div>
      </div>
    </section>
  )
}

export default Hero;