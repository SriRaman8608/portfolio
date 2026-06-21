import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top px-4">
      
      <a className="navbar-brand brand-text" href="#">
        Sri Raman
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link custom-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link custom-link" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link custom-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link custom-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;