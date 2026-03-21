import { useState } from "react";
import "../styles/Experience.css";
import shape from "../assets/Shape_1.png";

const experiences = [
  {
    company: "Lockheed Martin Skunk Works",
    role: "Software Engineer",
    date: "June 2023 — Present",
    bullets: [
      "Led the optimization of C++ development workflows using Docker containers, integrating a custom-configured extension that enabled breakpoint debugging and live code changes without requiring container rebuilds, improving build/test workflows by 65% and saving 60+ engineering hours per month.",
      "Led the development of data flow operations within a module, efficiently receiving and routing incoming data from external subsystems to internal components for processing.",
      "Designed and created message structures that optimized data transmission efficiency, achieving a 45% reduction in message count by consolidating related data and minimizing overhead.",
      "Refactored 200+ files of legacy Ada code for the F-16 into C++ using Object-Oriented Programming principles, modernizing mission software, reducing latency, and improving future scalability.",
      "Optimized a module to determine and report communication statuses across an extensive subsystem architecture, ensuring reliable operation amid frequent updates.",
      "Reviewed and merged code using GitLab, performing difference analysis with Beyond Compare, while mentoring team members on coding standards and workflows to improve integration speed and reduce bugs.",
    ],
  },
  {
    company: "UPR Climatology Office",
    role: "Software Developer",
    date: "April 2022 — August 2022",
    bullets: [
      "Developed a user-friendly climatology web application using React and TypeScript, enhancing accessibility and user experience.",
      "Extracted and dynamically integrated climate data from NOAA and USGS official sources into the web application, ensuring up-to-date information.",
      "Revamped front-end development to resolve issues with data display logic, ensuring accurate presentation of climate data from stations across Puerto Rico.",
    ],
  },
  {
    company: "National Weather Service",
    role: "Computer Science Intern",
    date: "June 2022 — July 2022",
    bullets: [
      "Managed and analyzed large datasets from NOAA to classify and rank weather hazards for each municipality in Puerto Rico, providing critical information for disaster preparedness efforts.",
      "Utilized QGIS to create comprehensive threat and vulnerability maps for the Storm Ready program, enabling San Juan forecasters to seamlessly integrate them into their warning operations and developed a geo-referenced database for end-users.",
      "Presented threat and vulnerability map results to the Mayagüez community in Puerto Rico and the University of the Incarnate Word of Texas, emphasizing the importance of geo-reference data in disaster preparation and response.",
    ],
  },
  {
    company: "UPR Research",
    role: "Undergraduate Researcher",
    date: "January 2022 — May 2022",
    bullets: [
      "Investigated the application of evolutionary algorithms, including genetic algorithms, to optimize solutions for predicting eye pigmentation based on genetic markers and evolutionary principles.",
      "Proposed a methodology integrating genetic insights from OCA2 and HERC2 genes with evolutionary algorithms to enhance predictive models for newborn eye pigmentation.",
    ],
  },
];

export default function Experience() {
  const [selected, setSelected] = useState(0);
  const current = experiences[selected];

  return (
    <div className="experience">
      <img src={shape} alt="" className="experience-shape" />
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
