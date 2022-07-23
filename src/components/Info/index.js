// CSS
import './info.css'


const Info = ({children}) => {

  if(Boolean(children)) {
    return (
      <main className="info container">
        <div className="info-container sub-container flex-container flex-column flex-center">
          {children}
        </div>
      </main>
    );
  }
}

export default Info;