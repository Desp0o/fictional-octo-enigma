import { Link } from "react-router-dom"
import logo from "../../assets/logo.webp"
import "./navbar.css"

const Navbar = () => {
  return (
      <div className="navbar">
        <div className="navbar_conatct"></div>

        <div className="navbar_inner">
                
                <Link to='/'>
                    <img src={logo} alt="main logo" className="main_logo" />
                </Link>

                <div className="navbar_links">
                    <Link to={''}>მთავარი</Link>
                    <Link to={''}>ჩვენს შესახებ</Link>
                    <Link to={''}>სერვისები</Link>
                    <Link to={''}>პროდუქცია</Link>
                    <Link to={''}>პროექტები</Link>
                    <Link to={''}>კონტაქტი</Link>
                </div>
            </div>
        </div>
  )
}

export default Navbar