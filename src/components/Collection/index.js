// CSS
import './collection.css';

const Collection = ({heading, collection}) => {

  if(Boolean(heading) && Boolean(collection) && collection.length > 0) {
    return (
      <section className="collection container flex-container flex-column flex-center" id="collection">
        <div className="heading-wrapper wrapper">
          <h2 className="heading heading-border">{heading}</h2>
        </div>
      
        <div className="tokens-container sub-container auto-grid">
          {
            collection.map((image, index) => {
              return (
                <div className="token-wrapper flex-container flex-center" key={index}>
                  <img src={image} alt={`rare-token-`+index} className="rare-token"/>
                </div>
              )
            })
          }
        </div>
      </section>
    )
  }

}

export default Collection;