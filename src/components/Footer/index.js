// React
import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import "./footer.css";

// Icons
import {ReactComponent as Twitter} from '../../assets/svgs/Twitter.svg';
import {ReactComponent as Discord} from '../../assets/svgs/Discord.svg';
import {ReactComponent as ExternalLink} from '../../assets/svgs/Link.svg'

import { externalLinks } from '../../config'

const Footer = () => {

  return (
  <footer className="footer container">
    <div className="footer-container flex-container flex-column flex-main-sb">
      <div className="footer-top wrapper footer-grid">

        <ul className="links-wrapper flex-container flex-column flex-main-fs flex-cross-fs">
          <li><h2 className="heading">Site Policies</h2></li>
          <li><Link to="/terms-and-condition" className="link link-border">Term and Condition</Link></li>
          <li><Link to="/privacy-policy" className="link link-border">Privacy Policy</Link></li>
          <li><Link to="/refund-policy" className="link link-border">Refund Policy</Link></li>
        </ul>
        
        <ul className="links-wrapper flex-container flex-column flex-main-fs flex-cross-fs">
          <li><h2 className="heading">Site Sections</h2></li>
          <li><a href="/#summary" className="link link-border">Summary</a></li>
          <li><a href="/#collection" className="link link-border">Rare NFTs</a></li>
          <li><a href="/#faqs" className="link link-border">FAQs</a></li>
        </ul>
        
        <ul className="links-wrapper flex-container flex-column flex-main-fs flex-cross-fs">
          <li><h2 className="heading">EggMens NFTs</h2></li>
          <li><a href={externalLinks.market} target="_blank" className="link link-border">Buy From Market  <ExternalLink className="icon external-link-icon"/></a></li>
          <li><a href={externalLinks.whitepaper} target="_blank" className="link link-border">White Paper <ExternalLink className="icon external-link-icon"/></a></li>
          <li><a href={externalLinks.blockExplorer} target="_blank" className="link link-border">Block Explorer  <ExternalLink className="icon external-link-icon"/></a></li>
        </ul>

      </div>
      
      <div className="footer-bottom sub-container flex-container flex-column">

        <p className="paragraph">Copyright &copy; 2022 EggMen NFTs.</p>
        <ul className="social-links-wrapper flex-container flex-main-se">
          <li><a href={externalLinks.discordServer} target="_blank" rel="noreferrer" className="link social-link"><Discord className="icon icon-light social-icon"/></a></li>
          <li><a href={externalLinks.twitterProfile} target="_blank" rel="noreferrer" className="link social-link"><Twitter className="icon icon-light social-icon" /></a></li>
        </ul>

      </div>

    </div>
  </footer>
  );
}

export default Footer;
