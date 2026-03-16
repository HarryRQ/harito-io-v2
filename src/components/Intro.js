import "../styles/Intro.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/EmailOutlined";

export default function Intro() {
  return (
    <div className="intro">
      <div className="intro-shapes">
        <div className="circle"></div>
      </div>
      <div className="lines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <h1>Hi! I'm Harry ッ</h1>
        <p>
          I'm a software engineer from Puerto Rico with 2.6 years of
          professional experience building high-performance, low-latency
          systems. I am fascinated by large-scale applications and enjoy finding
          ways to optimize complex solutions.
        </p>
      </div>
      <div className="socials-container">
        <ul>
          <li className="LinkedIn">
            <a
              href="https://www.linkedin.com/in/harry-rivera/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li className="Instagram">
            <a href="https://www.instagram.com/coralito.io/">
              <InstagramIcon />
            </a>
          </li>
          <li className="Email">
            <a href="mailto:harry.riveraq@gmail.com">
              <EmailIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
