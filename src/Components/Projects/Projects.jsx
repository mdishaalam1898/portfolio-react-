import React from "react";
import "./Projects.css";
import expense1 from "../../assets/expense1.png";
import expense2 from "../../assets/expense2.png";
import notes1 from "../../assets/notes1.png";
import notes2 from "../../assets/notes2.png";
import feedback1 from "../../assets/home.png";
import feedback2 from "../../assets/feedback.png";
import skysense1 from "../../assets/skysense1.png";
import skysense2 from "../../assets/skyesnse2.png";
import Ehome from "../../assets/Ehome.png"
import courses from "../../assets/courses.png";
import homePage from "../../assets/homePage.png";
import Quiz from "../../assets/Quiz.png";

const Projects = () => {
  const projects = [
    {
      title: "Expense Tracker",
      description:
        "A simple and responsive app to track daily expenses, manage balance, and visualize spending using charts.",
      screenshots: [expense1, expense2],
      tech: ["React", "CSS", "LocalStorage"],
      link: "https://my-expense-tracker-2025.netlify.app",
      github: "https://github.com/mdishaalam1898/expense-tracker",
    },
    {
      title: "Notes App",
      description:
        "A lightweight notes app that allows users to create, edit, and delete notes with persistent local storage.",
      screenshots: [notes1, notes2],
      tech: ["React", "HTML", "CSS"],
      link: "https://notes-app2025.netlify.app/",
      github: "https://github.com/mdishaalam1898/notes-app",
    },
    {
      title: "Feedback App",
      description:
        "An interactive feedback application where users can submit and view feedback with a clean UI.",
      screenshots: [feedback1, feedback2],
      tech: ["React", "Firebase", "CSS"],
      link: "https://feedback025.netlify.app/",
      github: "https://github.com/mdishaalam1898/feedback",
    },

    {
      title: "SkySense - Weather App",
      description:
        "SkySense is a modern React-based weather application that provides real-time weather data for any city across the world. Built using React.js and the OpenWeatherMap API, it delivers temperature, humidity, wind speed, and weather conditions in a sleek, responsive interface.",
      screenshots: [skysense1, skysense2],
      tech: ["React", "JavaScript", "API"],
      link: "https://skysense-weather-app-2025.netlify.app/",
      github: "https://github.com/mdishaalam1898/SkySense",
    },
    {
      title: "E-learning App",
      description:
        "This is an e-learning-app a user can learn different types of skills which have been mentioned in the app.There is different kinds of courses including different types of topisc with videos.",
      screenshots: [Ehome, courses],
      tech: ["React", "React-router-dom.", "React-hooks"],
      link: "https://e-learning-app-ac586c.netlify.app/",
      github: "https://github.com/mdishaalam1898/E-Learning-App",
    },
    {
      title: "Quiz-Game-App",
      description:
       "",
      screenshots: [homePage, Quiz],
      tech: ["React", "React-router-dom.", "React-hooks"],
      link: "https://quiz-game-app-8d56f2.netlify.app/",
      github: "https://github.com/mdishaalam1898/Quiz-Game-App",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="project-list">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>

            <div className="screenshots">
              {proj.screenshots.map((src, i) => (
                <img key={i} src={src} alt={`${proj.title} screenshot ${i + 1}`} />
              ))}
            </div>

            <div className="project-footer">
              <div className="tech-stack">
                {proj.tech.map((t, i) => (
                  <span key={i} className="tech">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {proj.link && proj.link !== "#" && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer">
                    🌐 Live
                  </a>
                )}
                {proj.github && proj.github !== "#" && (
                  <a href={proj.github} target="_blank" rel="noopener noreferrer">
                    💻 GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
