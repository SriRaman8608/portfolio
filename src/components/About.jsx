import "../styles/about.css";

function About() {
  return (
    <section id="about" className="container py-5 about-section reveal">
      <div className="about-wrapper text-center">

        <h2 className="mb-4">About Me</h2>

        <h5 className="about-subtitle">Frontend Development</h5>
        <p>
          Front-End Developer specializing in React with experience in dashboards,
          API integration, and responsive applications.
        </p>

        <h5 className="about-subtitle mt-4">Mobile Development</h5>
        <p>
          Flutter Developer experienced in building cross-platform mobile applications
          with role-based access, and offline data persistence using Hive.
        </p>

      </div>
    </section>
  );
}

export default About;