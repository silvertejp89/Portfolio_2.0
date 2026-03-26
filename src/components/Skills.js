import React from "react";
import "../style.css";

//TODO: creating array and mapping instead?

const Skills = () => {
  return (
    <section className="portfolio-section">
      <div className="heading-container">
        <h2>Work Approach</h2>
      </div>
      <div className="container">
        <div className="skill-list">
          <ul className="toolbox-skills">
            <li>Maintainable code & continuous learning </li>
            <li>Clear communication & structured thinking</li>
            <li>Agile workflows & team collaboration</li>
            <li>UX & UI with accessibility focus</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
