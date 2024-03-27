import { useState, useEffect } from "react";
import courses from "../../assets/images/courses.png";
import opportunity from "../../assets/images/opportunity.png";
import library from "../../assets/images/library.png";
import learn from "../../assets/images/learn.png"

const serviceArray = [
  {
   image: courses,
   header: "Courses",
   description: "We provide tech and soft courses tailored to meet the needs of both beginners looking to launch their careers and  professionals looking to enhance their skills. These courses feature live classes  taught by knowledgeable instructors who stay ahead on the latest trends across all tracks.",
   bgColor: "#E6CCE6"
  },
  {
    image: opportunity,
    header: "Opportunity Hub",
    description: "Explore our opportunity hub, your go-to source for the latest job listings, internships, scholarships opportunities and so much more. Stay connected to the opportunities you need to advance your career in tech!",
    bgColor: "#952B95"
  },
  {
    image: library,
    header: "Material Library",
    description: "Explore our Material Library, your treasure trove of valuable tech resources. Access a wealth of materials, including frequently asked questions for tech role interviews,  interview hacks, and more. Prepare effectively and gain the knowledge you need to excel in your tech career. Your key to landing that job is just a click away.",
    bgColor: "#FCEDDE"
  },
  {
    image: learn,
    header: "Learn Soft Skills",
    description: "At Simbi tech, we believe it is not just about technology; beyond technology, we focus on helping you cultivate vital soft skills needed in the workplace. Embark on a holistic learning journey that empowers you for success in both your tech career and life today!",
    bgColor: "#CFB69D"
  }
]

export default function Service() {
  return(
    <section className="service">
      <h3>OUR SERVICES</h3>
      <div className="service-boxes">
        {serviceArray.map((service, index) => 
        <Box 
        key={index} 
        num={index + 1}
        serviceImg={service.image}
        serviceName={service.header}
        description={service.description}
        bgColor={service.bgColor} />
        )}
        <RotatingCircle />
      </div>
     
    </section>
  );
}

function RotatingCircle() {
  const text = ".WOMEN IN TECH.WOMEN IN TECH";
  // to split each letters of the text
  const chars = text.split("");

 
    const [currentColor, setCurrentColor] = useState(0);
    const colors = ["#800080", "#c52b2b", "#008000"];

    useEffect(() => {
      const interval = setInterval(() => {
      // loop throught the colors and change it at intervals, making sure it comes back to once the length of the array is exceeded
        setCurrentColor((prev) => (prev + 1) % colors.length);
      }, 2000);

      return () => clearInterval(interval);
    }, []);

  return(
    <div className="circular">
      <div className="circle">
        <div className="text">
          {chars.map((char, index) => (
            // to rotate each characters inorder to form a circle
            <span key={index} style={{ transform: `rotate(${index * 12.9}deg)`, color:colors[currentColor]}}>{char}</span>
          ))}
        </div>
        <div className="inner-circle">
          <div className="circle-texts">
            <span className="word">Mentorship Access</span>
            <span className="word">An all Inclusive Community</span>
          </div>
        </div>
      </div>
  </div>
  );
}


function Box({serviceImg, serviceName, description, bgColor, num}) {
  return(
    <div className={`service-box ${num % 2 === 0? "right" : ""}`} >
      <div className="service-img" style={{backgroundColor: bgColor}}>
        <img src={serviceImg} alt="services" />
      </div>
      <div className="service-text">
        <h5>{serviceName}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}
