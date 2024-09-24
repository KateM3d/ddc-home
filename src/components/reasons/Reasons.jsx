import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import reasonsImage from "../../assets/logo.jpeg";
import "./reasons.scss";

const reasonsList = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  "Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  "Duis sagittis ipsum. Praesent mauris.",
  "Fusce nec tellus sed augue semper porta.",
  "Mauris massa. Vestibulum lacinia arcu eget nulla.",
  "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
];

const Reasons = () => {
  return (
    <div className="reasons-container">
      <h1 className="reasons-header">Why DDC?</h1>
      <div className="reasons-inner">
        <div className="reasons-left">
          <ul>
            {reasonsList.map((reason, index) => (
              <span key={index}>
                <li>
                  {" "}
                  <FaArrowRight /> {reason}
                </li>
              </span>
            ))}
          </ul>
        </div>
        <div className="reasons-right">
          <img src={reasonsImage} alt="Reasons" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
