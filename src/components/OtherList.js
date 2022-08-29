import React from 'react';
import '../style.css';
import OtherCard from './OtherCard';
import otherProjects from '../assets/data/otherProjects';

function createOther(project) {
  return (
    <OtherCard
      key={project.id}
      title={project.title}
      image={project.image}
      netlify={project.netlify}
      heading={project.heading}
      description={project.description}
      github={project.github}
      tools={project.tools}
    />
  );
}

function OtherList() {
  return (
    <div className="portfolio-section">
      <div className="heading-container">
        <h2>Other Projects</h2>
      </div>
      {otherProjects.map(createOther)}
    </div>
  );
}

export default OtherList;
