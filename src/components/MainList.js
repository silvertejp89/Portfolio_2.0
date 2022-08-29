import React from 'react';
import '../style.css';
import ProjectCard from './ProjectCard';
import mainProjects from '../assets/mainProjects';

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
    <div className="portfolio-section">{mainProjects.map(createCard)}</div>
  );
}

export default MainList;
