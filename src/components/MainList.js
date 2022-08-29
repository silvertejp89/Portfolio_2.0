import React from 'react';
import '../style.css';
import ProjectCard from './ProjectCard';
import mainProjects from '../assets/data/mainProjects';

function createCard(project) {
  return (
    <ProjectCard
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

function MainList() {
  return (
    <div className="portfolio-section">
      <div className="heading-container">
        <h2>Featured Projects</h2>
      </div>
      <div className="grid-container"> {mainProjects.map(createCard)} </div>
    </div>
  );
}

export default MainList;
