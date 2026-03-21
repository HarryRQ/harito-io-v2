import "../styles/Intro.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import mePic from "../assets/me.png";
import arcbeanie from "../assets/arc_beanie.jpg";
import burst from "../assets/Shape_1.png";
import flower from "../assets/Shape_2.png";
import softBurst from "../assets/Shape_3.png";

export default function Intro() {
  return (
    <div className="intro">
      <div className="intro-shapes">
        <div className="soft-burst">
          <img src={softBurst} alt="soft burst shape" />
        </div>
        <div className="burst">
          <img src={burst} alt="burst shape" />
          <img src={mePic} alt="pic of myself" />
        </div>
      </div>
      <div>
        <h1>Hi! I'm Harry</h1>
        <p>
          I'm a Software Engineer based in Puerto Rico. I’m fascinated by large
          scale applications and building performance-critical, low latency
          systems that hold up under real world constraints.
        </p>
      </div>
      <div>
        <h2>Say hi!</h2>
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
            <a
              href="https://www.instagram.com/coralito.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
      <div className="flower">
        <img src={flower} />
      </div>
    </div>
  );
}
