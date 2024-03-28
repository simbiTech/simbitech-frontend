import logo from "../../assets/images/logo.png";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaWifi } from "react-icons/fa6";


export default function Footer() {
  return(
    <footer>
      <FooterNav />
      <Info />
      <MainFooter />
    </footer>
  );
}

function FooterNav() {
  return(
    <ul className="footer-nav">
      <li><a href="">Documentation</a></li>
      <li><a href="">Sponsorship</a></li>
      <li><a href="">Getting Started</a></li>
      <li><a href="">About us</a></li>
    </ul>
  );
}

function Info() {
  return(
    <div className="info">
    <div className="logo">
      <div className="logo-img">
        <img src={logo} alt="" />
      </div>
      <h3>SimbiTech</h3>
    </div>
    <div className="updates">
      <p>Want to be the first to hear about our courses, webinars, tech updates and events?</p>
      <div className="email">
        <input type="email" placeholder="Enter your email address" />
        <button>Hop in</button>
      </div>
    </div>
    <div className="contacts">
      <div className="social-media">
        <div><a href=""><FaFacebook /></a></div>
        <div><a href=""><FaTwitter /></a></div>
        <div><a href=""><FaYoutube /></a></div>
        <div><a href=""><FaInstagram /></a></div>
        <div><a href=""><FaWifi /></a></div>
      </div>
      <h4>SimbiTech Contact Center</h4>
      <div className="call">
        <span>(+234) CALL-SITECH</span>
        <span>info@simbiTech.org</span>
      </div>
    </div>
  </div>
  )
}

function MainFooter() {
  return(
    <div className="footer-main">
      <div className="footer-logo">
        <div className="footer-img">
          <img src={logo} alt="" />
        </div>
        <div className="footer-info">
          <span>www.simbitech.org</span>
          <p>An official website of the SimbiTech</p>
        </div>
      </div>
      <ul className="footer-links">
        <li><a href="">About us</a></li>
        <li><a href="">FAQs</a></li>
        <li><a href="">Data Processing Agreement</a></li>
        <li><a href="">Privacy Policy</a></li>
        <li><a href="">Accessibility support</a></li>
        <li><a href="">Terms of Use</a></li>
        <li><a href="">Performance reports</a></li>
      </ul>
    </div>
  )
}