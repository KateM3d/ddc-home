import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import "./header.scss";

const Header = () => {
  const menuOptions = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <div className="header-container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="nav-menu">
          <ul>
            {menuOptions.map((option, index) => (
              <li key={index}>
                <Link to={option.href}>{option.label}</Link>{" "}
                {/* Use Link instead of a */}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
