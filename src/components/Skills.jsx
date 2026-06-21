import "../styles/skills.css";
import {
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaGit
} from "react-icons/fa";
import {
  SiFlutter, SiDart, SiHive
} from "react-icons/si";
import { BsCloud } from "react-icons/bs";

function Skills() {
  const skills = [
    { name: "React.js", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "Dart", icon: <SiDart /> },
    { name: "REST APIs", icon: <BsCloud /> },
    { name: "Hive", icon: <SiHive /> },
    { name: "Git", icon: <FaGit /> }
  ];

  return (
    <section id="skills" className="container py-5 skills-section reveal">
      <h2 className="text-center mb-4">Skills</h2>

      <div className="row">
        {skills.map((skill, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-3">
            <div className="card skill-card text-center p-3">
              <div className="skill-icon mb-2">{skill.icon}</div>
              <p className="skill-text">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;