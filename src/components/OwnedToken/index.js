// Hooks
import useLoadOwnedToken from "../../hooks/useLoadOwnedToken";

// Component
import Collection from '../Collection';
import Loading from '../Loading';

// CSS
import './owned_token.css';


const OwnedToken = ({account, contract}) => {  

  const {pendingInOwnedToken, errorInOwnedToken, ownedTokensData} = useLoadOwnedToken(account, contract);

  return (
    <section className="owned-token">

      {
        Boolean(!ownedTokensData) &&
        Boolean(!errorInOwnedToken) &&
        Boolean(pendingInOwnedToken) &&

        <Loading inline={false}/>
      }
      
      {
        Boolean(!pendingInOwnedToken) &&
        Boolean(!errorInOwnedToken) &&
        Boolean(Array.isArray(ownedTokensData)) &&
        Boolean(ownedTokensData.length > 0) &&

        <Collection
          heading={"Owned Tokens"}
          collection={ownedTokensData}
        />
      }
    </section>
  );
};

export default OwnedToken;
