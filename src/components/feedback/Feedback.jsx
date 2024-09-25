import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import photoImg from "../../assets/logo.jpeg";
import "./feedback.scss";

const Feedback = () => {
  const feedbacks = [
    {
      id: 1,
      name: "Jane Doe",
      image: photoImg,
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "John Smith",
      image: photoImg,
      feedback: "Proin nec velit eu justo sagittis commodo.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      image: photoImg,
      feedback: "Donec vel erat vel leo finibus pretium a a eros.",
    },
    {
      id: 4,
      name: "Michael Brown",
      image: photoImg,
      feedback: "Sed sit amet eros auctor, auctor risus in, porta massa.",
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };

  return (
    <div className="feedback-carousel">
      <h1>What Our Clients Say</h1>
      <Slider {...settings}>
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="feedback-item">
            <div className="feedback-content">
              <div className="image-container">
                <img src={feedback.image} alt={feedback.name} />
              </div>
              <div className="text-content">
                <FaQuoteLeft className="quote-icon" />
                <p>{feedback.feedback}</p>
                <h4>{feedback.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Feedback;
