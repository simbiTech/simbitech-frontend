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
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Road Map</a>
        </li>
        <li>
          <a href="">Sponsorship</a>
        </li>
        <Link to={"/login"}>
          <li className='get-started-btn'>
            <a href="">Get Started</a>
          </li>
        </Link>
      </ul>
      <div className="nav-icons" onClick={ToggleNav}>
        {!showNav ? <RxHamburgerMenu /> : <RxCross1 />}
      </div>
    </nav>
  );
}