
import about from "../../../assets/images/About.png";
import office from "../../../assets/images/office women.png";

export default function About() {
  return(
    <section className="about">
      <div className="backdrop">
        <div className="about-flex">
          <div className="why">
            <div>
              <div className="why-img">
                <img src={about} alt="about" />
              </div>
              <h3>OUR WHY</h3>
            </div>
          <p>Currently, black women holds less than 3% tech leadership roles. At Simbitech, we are committed to bridging the gender gap that exist in the tech ecosystem. To achieve this, we have established a growing tech-skill learning facility  that empowers and supports women in the tech field. We've also created a secure and inclusive community for all our members, where each and every voice is not only respected but genuinely heard, paving the path toward a more equitable and promising future for women.</p>
          </div>
          <div className="why-image">
            <img src={office} alt="" />
          </div>
          <div className="boxes">
            <div className="box">Our Why</div>
            <div className="box">What we do</div>
            <div className="box">Vision 	&amp; Mission</div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

