// CSS
import "./page_unavailable.css"

// Images
import dead from '../../assets/images/dead.png'


const PageUnavailable = () => {
  return (
    <main className="page-unavailable-container flex-container flex-column flex-center">
      <div className="img-wrapper wrapper">
        <img src={dead} alt="Dead EggMen" />
      </div>
      <div className="heading-wrapper wrapper">
        <h2 className="heading">Page doesn't exist!</h2>
        <h2 className="heading">Please #GoBackToHome.</h2>
      </div>
    </main>
  )
}

export default PageUnavailable;