import person1 from "../../assets/images/Review-img/person-1.jpg";
import person2 from "../../assets/images/Review-img/person-2.jpg";
import person3 from "../../assets/images/Review-img/person-3.jpg";
import person4 from "../../assets/images/Review-img/person-4.jpg";
import person5 from "../../assets/images/Review-img/person-5.jpg";
import polygon from "../../assets/images/Polygon 1.png";
import { useState } from "react";
import Header from "./Header";


const SuccessStories = [
  {
    id: 1,
    image: person1,
    story: "simbitech has helped me gain tech skills faster than I can imagine. I was able to learn product designs along side some soft skills that put me top of recruiters hiring criteria. I highly recommend simbitech to all black women seeking to start or transition into tech industry.",
    name: "Annabel Andrew",
    stack: "Product Designer"
  },
  {
    id: 2,
    image: person2,
    story: "My experience with SimbiTech has been nothing short of amazing. The courses are well-structured, the instructors are knowledgeable, and the community support is exceptional. Thanks to SimbiTech, I've been able to make a smooth transition into a career in web development.",
    name: "David Johnson",
    stack: "Web Developer"
  },
  {
    id: 3,
    image: person3,
    story: "SimbiTech has been a game-changer for me. The mentorship opportunities and career guidance provided by the platform have been invaluable in helping me navigate the tech industry. I'm grateful for the resources and support available at SimbiTech.",
    name: "Emily Smith",
    stack: "Software Engineer"
  },
  {
    id: 4,
    image: person4,
    story: "I can't thank SimbiTech enough for the skills and confidence it has given me. As a newcomer to the tech field, I was apprehensive at first, but the welcoming community and practical learning approach at SimbiTech made all the difference. I'm now equipped to pursue my dream career in UX/UI design.",
    name: "Michael Brown",
    stack: "UX/UI Designer"
  },
  {
    id: 5,
    image: person5,
    story: "SimbiTech exceeded my expectations in every way. The hands-on projects and real-world scenarios presented in the courses helped me develop practical skills that are directly applicable to my job. I've recommended SimbiTech to several friends and colleagues, and I'll continue to do so.",
    name: "Sarah Miller",
    stack: "Software Developer"
  }
  
]


export default function SuccessStory() {

  return(
    <section className="success">
      <h3>SUCCESS STORY</h3>
      <div className="success-flex">
        <div className="learners">
          <h4>Hear from some of our learners</h4>
          <img className="poly1" src={polygon} alt="" />
          <img className="poly2"  src={polygon} alt="" />
        </div>
        <div className="review-section">
          <Review />
        </div>
      </div>
      <div className="return-to-top" >
        <a href="#top">Return to top</a>
      </div>
    </section>
  );
}

function Review() {
  const [curIndex, setCurIndex] = useState(0);

  // when the button is clicked on the success story corresponding to the index of the button clicked will be rendered
  function showReview(index) {
    setCurIndex(index);
  }
  return(
    <div className="review">
      <div className="review-box">
        <div className="story">
        &ldquo;{SuccessStories[curIndex].story}&rdquo;
        </div>
        <div className="profile">
          <div className="profile-pics">
            <img src={SuccessStories[curIndex].image} alt="" />
          </div>
          <div className="details">
            <h5>{SuccessStories[curIndex].name}</h5>
            <p>{SuccessStories[curIndex].stack}</p>
          </div>
        </div>
      </div>
      <div className="review-button">
        {SuccessStories.map((review, index) => (
          // generate button for each of the success story
          <button 
            key={review.id} 
            onClick={() => showReview(index)}
            className={`${curIndex === index ? "active" : ""}`}></button>
        ))}
      </div>
      
    </div>
  );
}