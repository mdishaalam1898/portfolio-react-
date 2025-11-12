import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "Java", level: 8 },
        { name: "JavaScript", level: 8 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 8 },
        { name: "HTML", level: 9 },
        { name: "CSS", level: 8 },
      ],
    },

    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 7 },
        { name: "Express.js", level: 7 },
        { name: "REST APIs", level: 7 },
      ],
    },
    
    {
      title: "Database",
      skills: [
        { name: "MySQL", level: 7 },
        { name: "MongoDB", level: 6 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 8 },
        { name: "VS Code", level: 9 },
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-box">
        <div className="skills-container">
          {skillCategories.map((category) => (
            <div className="skill-card" key={category.title}>
              <h3>{category.title}</h3>
              {category.skills.map((skill) => (
                <div className="skill-bar" key={skill.name}>
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}/10</span>
                  </div>
                  <div className="bar">
                    <div
                      className="bar-fill"
                      style={{ width: `${(skill.level / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
