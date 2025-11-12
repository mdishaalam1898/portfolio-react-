import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="about-title">About Me</h2>

      <div className="about-content">
        <p>
          I'm a passionate and detail-oriented <strong>Frontend Developer</strong> 
          who loves turning creative ideas into modern, responsive web experiences.
          My journey in web development started with curiosity and evolved into a
          strong dedication to learning and building.
        </p>

        <p>
          I honed my skills through structured learning at <strong>Coding Ninjas</strong>, 
          where I gained hands-on experience in <strong>Programming in Java</strong>, <strong>Web Development</strong>, and <strong>Data Structures & Algorithms</strong>. 
          I also explored core concepts of <strong>DBMS</strong>, which strengthened my 
          understanding of how data powers modern web applications.
        </p>

        <p>
          I enjoy working on interactive projects where I can combine logic and
          design to deliver smooth user experiences. I focus on writing clean,
          efficient code and continuously improving through hands-on practice.
        </p>

        <p>
          Beyond coding, I’m deeply curious about how technology can make everyday
          life better — and I’m always exploring new tools, design trends, and
          development techniques.
        </p>
      </div>

      <div className="about-values">
        <div className="value-box">
          <h3> Creative</h3>
          <p>I approach every project with design thinking and problem-solving.</p>
        </div>
        <div className="value-box">
          <h3> Growth Mindset</h3>
          <p>I’m constantly learning and pushing myself to master new technologies.</p>
        </div>
        <div className="value-box">
          <h3>Team Player</h3>
          <p>I believe collaboration and communication bring ideas to life.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
