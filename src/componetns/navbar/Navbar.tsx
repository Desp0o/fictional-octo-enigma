import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import "./navbar.css";
import { useState } from "react";
import ResMenu from "../slider/ResMenu";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleBurgerMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar_conatct"></div>

        <div className="navbar_inner">
          <Link to="/">
            <img src={logo} alt="main logo" className="main_logo" />
          </Link>

          <div className="navbar_links">
            <Link to={""}>მთავარი</Link>
            <Link to={""}>ჩვენს შესახებ</Link>
            <Link to={""}>სერვისები</Link>
            <Link to={""}>პროდუქცია</Link>
            <Link to={""}>პროექტები</Link>
            <Link to={""}>კონტაქტი</Link>
          </div>

          {window.innerWidth < 1200 && (
            <div className="burger_menu" onClick={handleBurgerMenu}>
              <span className="stick1" />
              <span className={isOpen ? "stick2 opened" : "stick2"} />
              <span className="stick3" />
            </div>
          )}
        </div>
      </nav>
      <ResMenu funcName={() => setOpen(false)} isOpen={isOpen}/>
    </>
  );
};

export default Navbar;
