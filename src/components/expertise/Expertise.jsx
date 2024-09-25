import React from "react";
import analyticsIcon from "../../assets/analytics-64.png";
import designIcon from "../../assets/design-64.png";
import websiteIcon from "../../assets/website-64.png";
import "./expertise.scss";

const expertiseData = [
  {
    img: websiteIcon,
    title: "Websites Creation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
  },
  {
    img: designIcon,
    title: "Design Creation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
  },
  {
    img: analyticsIcon,
    title: "Analytics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
  },
];

const Expertise = () => {
  return (
    <div className="expertise-container">
      <h1>Our Expertise</h1>
      <p>
        We specialize in various aspects of web development, from creating
        stunning websites to detailed analytics.
      </p>
      <div className="expertise-cards">
        {expertiseData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt={card.title} />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <p>
              Learn more <span className="arrow"> →</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
