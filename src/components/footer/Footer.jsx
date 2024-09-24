import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import "./footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-left">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="https://t.me" target="_blank" rel="noopener noreferrer">
          <FaTelegram />
        </a>
        <a
          href="mailto:ddc-webstudio@test.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdOutlineMail />
        </a>
      </div>
      <div className="footer-right">
        &copy; {currentYear} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
