import "../styles/projects.css";

import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section
      id="projects"
      className="container py-5 projects-section reveal"
    >
      <h2 className="text-center mb-5">Projects</h2>

      <div className="accordion" id="projects">

        {projects.map((project) => (
          <div
            className="accordion-item project-card mb-3"
            key={project.id}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed project-title"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${project.targetId}`}
              >
                {project.title}
              </button>
            </h2>

            <div
              id={project.targetId}
              className="accordion-collapse collapse"
              data-bs-parent="#projects"
            >
              <div className="accordion-body">

                <p className="project-desc">
                  {project.description}
                </p>

                <h6>Features:</h6>

                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h6>Tech Stack:</h6>

                <p>{project.techStack}</p>

                <h6>Your Role:</h6>

                <p>{project.role}</p>

                <div className="mt-3">
                  {project.githubLink ? (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-dark"
                    >
                      GitHub Repository
                    </a>
                  ) : (
                    <span className="badge bg-secondary">
                      Private Project
                    </span>
                  )}
                </div>

              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;