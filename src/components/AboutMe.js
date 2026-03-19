import "../styles/AboutMe.css";
import mePic from "../assets/me.png";

export default function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me-title">About Me</div>
      <div className="about-me-content">
        <div className="about-me-description">
          <p>
            I'm currently a <span className="highlight">Software Engineer</span>{" "}
            at <span className="highlight">Lockheed Martin Skunk Works</span>,
            where I've been building high-performance systems in C++ and
            optimizing data messaging structures for performance-critical
            applications.
          </p>
          <p>
            Here are some of the technologies I've been working with recently:
          </p>
          <div className="tech-stack">
            <div className="tech-item">
              <i className="devicon-cplusplus-plain colored"></i>
            </div>
            <div className="tech-item">
              <i className="devicon-python-plain-wordmark colored"></i>
            </div>
            <div className="tech-item">
              <i className="devicon-typescript-plain colored"></i>
            </div>
            <div className="tech-item">
              <i className="devicon-react-original-wordmark colored"></i>
            </div>
            <div className="tech-item">
              <i className="devicon-docker-plain-wordmark colored"></i>
            </div>
            <div className="tech-item">
              <i className="devicon-grpc-plain colored"></i>
            </div>
          </div>
          <p>
            Outside of work, I love being outdoors chasing the sun and traveling
            to high altitude hikes. I'm also into graphic design and
            photography.
          </p>
          <p>Here are some of my recent pictures!</p>
        </div>
        <div className="carousel-container">
          <div className="carousel">
            <div className="group">
              <div className="card">
                <img src={mePic} />
              </div>
              <div className="card">2</div>
              <div className="card">3</div>
              <div className="card">4</div>
              <div className="card">5</div>
              <div className="card">6</div>
            </div>
            <div aria-hidden className="group">
              <div className="card">1</div>
              <div className="card">2</div>
              <div className="card">3</div>
              <div className="card">4</div>
              <div className="card">5</div>
              <div className="card">6</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
