import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        News Reader @creator -{" "}
        <a href="https://github.com/akbc1221" target="__blank">
          Arnab Chattopadhyay
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/arnab_chatt" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/arnab-chattopadhyay-769bb817a"
          target="__blank"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/akbc1221" target="__blank">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
