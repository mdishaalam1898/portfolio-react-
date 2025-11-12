import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" style={{ width: "60px" }} />

      <ul className="nav-menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="nav-connect">
        <a href="#contact">Connect with me</a>
      </div>
    </div>
  );
};

export default Navbar;
