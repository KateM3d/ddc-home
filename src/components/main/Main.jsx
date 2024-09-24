import React from "react";
import Button from "../button/Button";
import Carousel from "../carousel/Carousel";
import "./main.scss";

const Main = () => {
  return (
    <>
      <Carousel />
      <div className="main-container">
        <div className="text-content">
          <h1>Web Studio</h1>
          <h2>Design & Development Creators</h2>
          <p>
            We create websites and web applications that exceed your
            expectations.
          </p>
          <Button text="Contact Us" />
        </div>
      </div>
    </>
  );
};

export default Main;
