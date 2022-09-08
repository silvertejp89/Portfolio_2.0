import React from 'react';
import '../style.css';
import OtherCard from './OtherCard';
import otherProjects from '../assets/data/otherProjects';

// function createOther(project) {
//   return (
//     <OtherCard
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

const OtherList = () => {
  return (
    <div className="portfolio-section">
      <div className="heading-container">
        <h3>Other Projects</h3>
      </div>
      <div className="container">
        {otherProjects.map((project) => (
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
        ))}
      </div>
    </div>
  );
};

export default OtherList;
