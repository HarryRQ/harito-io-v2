import { useState } from "react";
import "../styles/Experience.css";
import burst from "../assets/Shape_1.png";

const experiences = [
  {
    company: "Lockheed Martin",
    role: "Software Engineer",
    date: "June 2023 - Present",
    bullets: [
      "Building high-performance C++ systems and optimizing data messaging structures for performance-critical, resource-constrained environments.",
      "Improved build and test workflows by 65%, saving the team 60+ engineering hours per month.",
      "Refactored 200+ files of legacy Ada code for the F-16 into modern C++.",
    ],
  },
  {
    company: "UPR Climatology",
    role: "Software Developer",
    date: "April 2022 - August 2022",
    bullets: [
      "Built a user-friendly web application integrating real-time climate data from NOAA and USGS sources.",
      "Improved accessibility and data accuracy across weather stations in Puerto Rico.",
      "Revamped front-end development to resolve issues with data display logic.",
    ],
  },
  {
    company: "National Weather Service",
    role: "Computer Science Intern",
    date: "June 2022 - July 2022",
    bullets: [
      "Analyzed large NOAA datasets to classify and rank weather hazards across Puerto Rico's municipalities.",
      "Created geo-referenced threat and vulnerability maps for the Storm Ready program.",
      "Maps were used directly by San Juan forecasters in their warning operations.",
    ],
  },
  {
    company: "UPR Research",
    role: "Undergraduate Researcher",
    date: "January 2022 - May 2022",
    bullets: [
      "Investigated the use of genetic and evolutionary algorithms to predict newborn eye pigmentation.",
      "Proposed a methodology integrating genetic insights from OCA2 and HERC2 genes.",
    ],
  },
];

export default function Experience() {
  const [selected, setSelected] = useState(0);
  const current = experiences[selected];

  return (
    <div className="experience">
      <img src={burst} alt="" className="experience-shape" />
      <div className="experience-title">Experience</div>
      <div className="experience-content">
        <div className="experience-sidebar">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`sidebar-item ${selected === index ? "active" : ""}`}
              onClick={() => setSelected(index)}
            >
              {exp.company}
            </div>
          ))}
        </div>
        <div className="experience-details">
          <h2>
            {current.role} @{" "}
            <span className="highlight">{current.company}</span>
          </h2>
          <p className="experience-date">{current.date}</p>
          <ul className="experience-bullets">
            {current.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
