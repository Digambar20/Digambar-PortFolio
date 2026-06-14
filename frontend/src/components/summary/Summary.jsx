import React from "react";
import "./Summary.css";
import DkImg from "../../assets/DkPhoto.jpeg";
import DkRes from "../../assets/digambar_resume.pdf";

function Summary() {
  return (
    <section id="summary" className="summary-section">
      <div className="container mt-2">
        <div className="row align-items-center min-vh-95 mt-4">
          {/* Left Side */}
          <div className="col-lg-5 text-center order-2 order-lg-1">
            <p className="intro-text">Hey! I'm</p>

            <h1 className="name-heading">Digambar Khekade</h1>

            <h4 className="role-text">Full Stack Developer</h4>

            <p className="summary-description">
              I am a skilled software developer delivering high-quality
              solutions across diverse projects. My expertise spans front-end
              and back-end development, including React.js, Node.js, Express.js
              and MongoDB.
              <br />
              <br />
            </p>

            <p className="summary-description">
              I specialize in creating user-friendly interfaces and scalable
              systems to meet client needs.
            </p>

            <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
              <a
                href={DkRes}
                target="_blank"
                rel="noreferrer"
                className="Resumee"
              >
                <button className="resume-btn">View Resume</button>
              </a>

              <a href="/#footer">
                <button className="contact-btn">Contact Info</button>
              </a>
            </div>

            <div className="social-icons mt-4 ">
              <h1>
                <a
                  href="https://www.linkedin.com/in/digambar-khekade204"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </h1>
              <h1>
                <a
                  href="https://github.com/Digambar20"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </h1>
            </div>
          </div>

          <div className="col-lg-2 text-center order-2 order-lg-1"></div>

          {/* Right Side */}
          <div className="col-lg-5 text-center mt-5 mt-lg-0 order-1 order-lg-2">
            <div className="image-circle">
              <img src={DkImg} alt="profile" className="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Summary;
