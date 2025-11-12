import React from "react";
import "./Hero.css";
import profile_image from "../../assets/profile_image.svg.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img
        src={profile_image}
        alt="Md Isha Alam profile"
        className="hero-img"
      />
      <h1>I'm <span>Md Isha Alam</span> , a Frontend Developer based in Bengaluru, IN.</h1>
      <p>
        I'm a passionate and detail-oriented frontend developer with a strong
        foundation in <strong>React</strong>, <strong>JavaScript</strong>, and
        modern web technologies. I enjoy building clean, responsive, and
        user-friendly interfaces, while continuously learning and improving my
        craft through hands-on projects.
      </p>
      <div className="hero-action">
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="resume-btn"
  >
    📄 View Resume
  </a>

  <a
    href="/resume.pdf"
    download
    className="resume-btn secondary"
  >
    ⬇️ Download
  </a>
</div>

    </div>
  );
};

export default Hero;
