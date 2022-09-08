import React from 'react';
import '../style.css';
import MainCard from './MainCard';
import mainProjects from '../assets/data/mainProjects';

//createCard is moved down and mapped by MainList as anonymous arrow function (ES6)
// function createCard(project) {
//   return (
//     <Main Card
//       key={project.id}
//       title={project.title}
//       image={project.image}
//       netlify={project.netlify}
//       heading={project.heading}
//       description={project.description}
//       github={project.github}
//       tools={project.tools}
//     />
//   );
// }

const MainList = () => {
  return (
    <div className="portfolio-section">
      <div className="heading-container">
        <h2>Featured Projects</h2>
      </div>
      <div className="grid-container">
        {' '}
        {mainProjects.map((project) => (
          <MainCard
            key={project.id}
            title={project.title}
            image={project.image}
            netlify={project.netlify}
            heading={project.heading}
            description={project.description}
            github={project.github}
            tools={project.tools}
          />
        ))}{' '}
      </div>
    </div>
  );
};

export default MainList;
