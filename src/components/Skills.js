import React from 'react';
import '../style.css';

//TODO: creating array and mapping instead?

function Skills() {
  return (
    <section className="portfolio-section">
      <div className="heading-container">
        <h2>Skills</h2>
      </div>
      <div className="container">
        <div className="skill-list">
          <ul className="code-skills">
            <li className="list-head">Code</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript ES6</li>
            <li>React</li>
            <li>Styled Components</li>
            <li>Github</li>
            <li>Redux</li>
            <li>Node.js</li>
          </ul>
          <ul className="toolbox-skills">
            <li className="list-head">Toolbox</li>
            <li>Postman</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobe XD</li>
            <li>IsoDraw</li>
            <li>Figma</li>
            <li>Slack</li>
          </ul>
          <ul className="upcoming-skills">
            <li className="list-head">Upcoming</li>
            <li>Bootstrap</li>
            <li>jQuery</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
