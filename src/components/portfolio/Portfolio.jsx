import React from "react";
import Slider from "react-slick";
import portfolioImage1 from "../../assets/portfolioImage1.png";
import portfolioImage2 from "../../assets/portfolioImage2.png";
import portfolioImage3 from "../../assets/portfolioImage3.png";
import "./portfolio.scss";

const portfolioItems = [
  {
    name: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: portfolioImage1,
  },
  {
    name: "Project 2",
    description: "Proin nec velit eu justo sagittis commodo.",
    image: portfolioImage2,
  },
  {
    name: "Project 3",
    description: "Donec vel erat vel leo finibus pretium a a eros.",
    image: portfolioImage3,
  },
];

const PreviousArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      &lt;
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      &gt;
    </div>
  );
};

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };

  return (
    <div className="portfolio-container">
      <h1>Our Portfolio</h1>
      <Slider {...settings}>
        {portfolioItems.map((item, index) => (
          <div className="portfolio-item" key={index}>
            <img src={item.image} alt={item.name} className="portfolio-image" />
            <div className="portfolio-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Portfolio;
