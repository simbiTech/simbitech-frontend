import { useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { logo } from '../../assets';
import { Link } from 'react-router-dom';


export default function NavBar() {
  const [showNav, setShowNav] = useState(false);

  function ToggleNav() {
    setShowNav(() => !showNav);
  }
  return (
    <nav>
      <div className="logo">
        <div className="logo-img">
          <img src={logo} alt="logo" />
        </div>
        <h3>SimbiTech</h3>
      </div>
      <ul className={`nav-links ${showNav ? "open" : ""} `}>
        <li className='nav-link'>
          <a href="">Home</a>
        </li>
        <Link to={"/about-us"}>
        <li className='nav-link'>
          About Us
        </li>
        </Link>
        <li className='nav-link'>
          Road Map
        </li>
        <li className='nav-link'>
          Sponsorship
        </li>
        <Link to={"/login"}>
          <li className='get-started-btn'>
           Get Started
          </li>
        </Link>
      </ul>
      <div className="nav-icons" onClick={ToggleNav}>
        {!showNav ? <RxHamburgerMenu /> : <RxCross1 />}
      </div>
    </nav>
  );
}