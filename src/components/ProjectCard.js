import React from 'react';
import '../style.css';

function ProjectCard(props) {
  return (
    <div className="grid-container">
      {/* ------------------------------------------------- */}
      <article>
        <a
          aria-label="Link to Happy Thoughts"
          class="project-link"
          href={props.netlify}
        >
          <div className="image-container">
            <div className="overlay"></div>
            <img
              className="image"
              src="https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"
              alt="project"
            />
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
          <a
            href="https://github.com/silvertejp89/project-happy-thoughts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p class="github-link">View it on GitHub</p>
          </a>
        </div>

        <div className="tags">
          <span className="tag-span">HTML5</span>
          <span className="tag-span">CSS</span>
          <span className="tag-span">JavaScript ES6</span>
          <span className="tag-span">React</span>
          <span className="tag-span">API</span>
          <span className="tag-span">MongoDB</span>
        </div>
      </article>
    </div>
  );
}

export default ProjectCard;