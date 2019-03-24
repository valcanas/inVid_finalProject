import React from "react";
import invidLogo from "@/assets/img/imagineDifferent.png";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer-container">
    <nav className="nav">
      <img style={{ width: 150, height: 25 }} src={invidLogo} alt="img" />
    </nav>
    <a className="anchor" href="http://www.linkedin.com/in/evalientewdv">
      Ernesto Valiente
    </a>
  </footer>
);

export default Footer;
