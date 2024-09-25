import React from "react";
import image from "../../assets/logo.jpeg";
import Button from "../button/Button";
import "./about.scss";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="text-content">
          <h1>Web Studio</h1>
          <h2>Design & Development Creators</h2>
          <p>
            We create websites and web applications that exceed your
            expectations.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
            velit eu justo sagittis commodo. Donec vel erat vel leo finibus
            pretium a a eros. Sed sit amet eros auctor, auctor risus in, porta
            massa. Quisque ac leo malesuada, accumsan metus sit amet, accumsan
            lorem. Nullam vel feugiat neque.
          </p>
          <Button text="Contact Us" />
        </div>
        <div className="image-content">
          <img src={image} alt="Main Visual" />
        </div>
      </div>
    </>
  );
};

export default About;
