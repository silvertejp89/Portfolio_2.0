import React from 'react';
import '../style.css';

function createTag(tag) {
  return <span className="tag-span">{tag}</span>;
}

function OtherCard(props) {
  return (
    <div>
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
          <span>{props.tools.map(createTag)}</span>
        </div>
      </article>
    </div>
  );
}

export default OtherCard;
