import React from "react";
import "../style.css";

//TODO: creating array and mapping instead?

const Skills = () => {
  return (
    <section className="portfolio-section">
      <div className="heading-container">
        <h2>Skills</h2>
      </div>
      <div className="container">
        <div className="skill-list">
          <ul className="code-skills">
            {/* <li className="list-head">Code</li> */}
            <li>UX & UI with accessibility focus</li>
            <li>Agile workflows & team collaboration</li>
            <li>Clear communication & structured thinking</li>
            <li>Visual storytelling & fact-based design</li>
            <li>Maintainable code & continuous learning</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
