import React from 'react';
import '../style.css';

function OtherCard(props) {
  return (
    <div className="grid-container">
      {/* ------------------------------------------------- */}
      <article>
        <a
          aria-label="Link to Happy Thoughts"
          class="project-link"
          href={props.netlify}
        >
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

export default OtherCard;
