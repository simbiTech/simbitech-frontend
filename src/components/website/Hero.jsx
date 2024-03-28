import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div id="top" className="hero">
      <h1>
        Learn, Build and <span className="span-light">Lead</span> in Tech
      </h1>
      <h2>
        Unlocking Girl-Powered Potential to Elevate Her <br />{" "}
        <span className="span-light">Future in Tech</span>
      </h2>
      <p>To Join the Tech revolution</p>
      <Link to={"/signup"}>
        <button className="hero-btn">Get Started</button>
      </Link>
    </div>
  );
}