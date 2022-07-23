// Style
import './home.css'

// Componenets
import Hero from '../Hero';
import Summary from '../Summary';
import Collection from '../Collection';
import FAQs from '../FAQs';

// Images
import Man from '../../assets/token-images/man.png';
import Man2 from '../../assets/token-images/man_2.png';
import Bear from '../../assets/token-images/bear.png';
import SuperWoman from '../../assets/token-images/super_woman.png';
import MonsterMan from '../../assets/token-images/monster_man.png';
import MonsterChild from '../../assets/token-images/monster_child.png';

// FAQs 
import { faqs } from '../../config'


const Home = ({ account, handleConnect, handleNavigationToMint }) => {
  
  return (
    <main className="home">
      
      <Hero 
        account={account}
        handleConnect={handleConnect} 
        handleNavigationToMint={handleNavigationToMint}
      />
      
      <Summary/>

      <Collection
        heading={"Rare EggMen NFTs"}
        collection={[Man, Man2, Bear, SuperWoman, MonsterMan, MonsterChild]}
      />

      <FAQs
        faqs={faqs} 
      />

    </main>
  );
}

export default Home;