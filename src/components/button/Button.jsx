import React from "react";
import "./button.scss";

const Button = ({ text }) => {
  return (
    <button className="main-btn">
      {text}
      <span className="arrow"> →</span>
    </button>
  );
};

export default Button;
