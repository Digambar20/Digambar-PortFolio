import React from "react";
import "./About.css";
import Intern from "../../assets/DkInternship.pdf";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container ">
        <div className="text-center mb-5">
          <p className="about-subtitle">Want to know me</p>
          <h1 className="about-title">About Me</h1>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          <div className="timeline-content">
            <h2 className="section-heading">
              <i className="fa-solid fa-user-graduate me-3"></i>
              Education
            </h2>

            <div className="timeline-card">
              <h3>B.Tech. in Computer Science & Engineering</h3>
              <p>Kdk College of Engineering - Nagpur </p>

              <h5>CGPA: 7.5/10 | 2023 - 2027</h5>

              <p>
                Pursuing engineering with strong focus on software development,
                databases and web technologies.
              </p>
            </div>

            <div className="timeline-card">
              <h3>Higher Secondary Certificate (HSC)</h3>

              <p>Balaji Jr College - Butibori</p>

              <h5>Percentage: 60% | 2021 - 2023</h5>

              <p>
                Completed higher secondary education with a focus on Physics,
                Chemistry, and Mathematics.
              </p>
            </div>

            <div className="timeline-card">
              <h3>Secondary School Certificate (SSC)</h3>

              <p>RCRB School - Butibori</p>

              <h5>Percentage: 85% | 2020 - 2021</h5>

              <p>
                Completed secondary education with excellent academic
                performance in mathematics, and science.
              </p>
            </div>
          </div>
        </div>

        <div className="timeline-wrapper mt-5">
          <div className="timeline-line"></div>

          <div className="timeline-content">
            <h2 className="section-heading">
              <i className="fa-solid fa-briefcase me-3"></i>
              Experience
            </h2>

            <div className="timeline-card">
              <h3>
                Front End Intern (bootcoding)
                <span>- (27 Jan - 13 Mar 2025)</span>
              </h3>
              <h5>
                <a
                  href={Intern}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-link"
                >
                   View Certificate
                </a>
              </h5>

              <ul>
                <li>
                  Developed responsive websites using React and Bootstrap.
                </li>

                <li>Improved UI/UX and mobile responsiveness.</li>
              </ul>

              <div className="skills-badges">
                <span>HTML</span>
                <span>CSS</span>
                <span>Bootstrap</span>
                <span>JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
