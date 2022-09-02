import React from 'react';
import '../style.css';

function createTag(tag) {
  return <span className="tag-span">{tag}</span>;
}

function ProjectCard(props) {
  return (
    <div>
      {/* ------------------------------------------------- */}
      <article>
        <a
          aria-label="Link to Happy Thoughts"
          class="project-link"
          href={props.netlify}
        >
          <div className="image-container">
            <div className="overlay"></div>
            <img className="image" src={props.image} alt="project" />
            <div aria-hidden="true" className="img-overlay">
              <p className="img-overlay-text">{props.title}</p>
            </div>
          </div>
          <div className="project-texts">
            <h4> {props.heading} </h4>
          </div>
        </a>
        {/* ------------------------------------------------ */}
        <p className="project-description"> {props.description} </p>
        <div className="link-github-project">
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <p class="github-link">View it on GitHub</p>
          </a>
        </div>

        <div className="tags">
          <span>{props.tools.map(createTag)}</span>
        </div>
      </article>
    </div>
  );
}

export default ProjectCard;
