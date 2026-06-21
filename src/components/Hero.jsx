import "../styles/hero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="hero text-center reveal">
      <div className="container hero-content">

        <h1 className="hero-title">Sri Raman M</h1>

        {/* 🔥 Typing Effect */}
        <h4 className="hero-subtitle">
          <TypeAnimation
            sequence={[
              "React Developer",
              1500,
              "Flutter Developer",
              1500,
              "Frontend Developer",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h4>

        <p className="hero-text mt-3">
          Building responsive web apps, dashboards, and mobile applications with clean UI and strong state management.
        </p>

        {/* Buttons */}
        <div className="hero-buttons mt-4">
          <a href="#projects" className="btn btn-primary me-3">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline-light">
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="hero-social mt-4">
          <a href="#" className="social-icon" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sri-raman-front-end-developer-and-flutter-developer" className="social-icon" target="_blank">
            <FaLinkedin />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;