import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">

        <div className="text-center mb-5">
          <p className="section-subtitle">
            Explore My
          </p>

          <h1 className="section-title">
            Practical Skills
          </h1>
        </div>

        <div className="row g-4">

          <div className="col-lg-4">
            <div className="skill-box">
              <h3>Frontend Development</h3>

              <div className="skill-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>Bootstrap</span>
                <span>JavaScript</span>
                <span>React.js</span>
                <span>Tailwind CSS</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="skill-box">
              <h3>Backend Development</h3>

              <div className="skill-tags">
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>Mongoose</span>
                <span>REST API</span>
                <span>JWT</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="skill-box">
              <h3>Tools & Technologies</h3>

              <div className="skill-tags">
                <span>Git</span>
                <span>GitHub</span>
                <span>Postman</span>
                <span>VS Code</span>
                <span>Vite</span>
                <span>Netlify</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="skill-box">
              <h3>Programming Languages</h3>

              <div className="skill-tags">
                <span>C</span>
                <span>Java</span>
                <span>Python</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="skill-box">
              <h3>Computer Science</h3>

              <div className="skill-tags">
                <span>DSA</span>
                <span>OOP's</span>
                <span>DBMS</span>
                <span>SD</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;