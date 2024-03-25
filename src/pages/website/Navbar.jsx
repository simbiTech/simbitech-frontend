import logo from '../../assets/images/logo.png';

export default function NavBar() {
  return(
    <nav>
      <div className="logo">
        <div className='logo-img'>
        <img src={logo} alt="logo" />
        </div>
        <h3>SimbiTech</h3>
      </div>
      <ul className="nav-links">
        <li><a href="">Home</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Road Map</a></li>
        <li><a href="">Sponsorship</a></li>
        <li><a href="">Get Started</a></li>
      </ul>
    </nav>
  );
}