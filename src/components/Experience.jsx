import "../styles/experience.css";

import { experiences } from "../data/portfolioData";

function Experience() {
  return (
    <section
      id="experience"
      className="container py-5 experience-section reveal"
    >
      <h2 className="text-center mb-5">Experience</h2>

      <div className="row">

        {experiences.map((experience) => (
          <div
            className="col-md-6 mb-4"
            key={experience.id}
          >
            <div className="experience-card p-4 h-100">

              <h5 className="company">
                {experience.company}
              </h5>

              <p className="role">
                {experience.role}
              </p>

              <p className="duration">
                {experience.duration}
              </p>

              <ul>
                {experience.responsibilities.map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Experience;