// CSS
import "./navbar.css";

const Navbar = ({ children }) => {

  return (
    <nav className="navbar">
      <div className="navbar-container  flex-container flex-main-sb">
        {children}
      </div>
    </nav>
  )
}

export default Navbar