import projects from "./Projects";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title text-center">My Projects</h2>

        <div className="row g-4 align-items-stretch">
          {projects.map((project) => (
            <div className="col-12 col-md-6" key={project.id}>
              <div className="project-card">
                {/* Image Carousel */}
                <div
                  id={`carousel-${project.id}`}
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="3000"
                >
                  <div className="carousel-inner">
                    {project.images.map((img, index) => (
                      <div
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                        key={index}
                      >
                        <img src={img} className="d-block w-100" alt="" />
                      </div>
                    ))}
                  </div>

                  {project.images.length > 1 && (
                    <>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={`#carousel-${project.id}`}
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" />
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target={`#carousel-${project.id}`}
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon" />
                      </button>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="project-body">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>

                  <div className="tech-stack">
                    {project.tech.map((t, i) => (
                      <span key={i}>{t}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.github} target="_blank">
                      GitHub
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank">
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
