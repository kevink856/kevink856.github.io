// Import Dependencies
import '../styles/LandingPage.css';

import Home from './Home.js';
import About from './About.js';
// import Experience from './Experience.js';
// import Projects from './Projects.js';

function LandingPage() {
  return (
    <div className="homeContainer">
      <header className="homeNavbar">
        <a href="#home">
          Home
        </a>
        <a href="#about">
          About
        </a>
        <a href="#experience">
          Experience
        </a>
        <a href="#projects">
          Projects
        </a>
      </header>
      <section id="home" className="homeContent">
        <Home />
      </section>
      <section id="about" className="homeContent">
        <About />
      </section>
      {/*<section id="experience" className="homeContent">
        <Experience />
      </section>
      <section id="projects" className="homeContent">
        <Projects />
      </section> */}
    </div>
  );
}

export default LandingPage;