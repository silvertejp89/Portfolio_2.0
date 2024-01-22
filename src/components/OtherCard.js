import React from "react";
import "../style.css";

// create tag is moved and mapped in MainCard as anonymys arrow function)
// function createTag(tag) {
//   return <span className="tag-span">{tag}</span>;
// }

const OtherCard = (props) => {
  return (
    <div className="otherCard">
      {/* ------------------------------------------------- */}
      <article>
        <a
          aria-label="Link to project"
          class="project-link"
          href={props.netlify}
          target="_blank"
          rel="noopener noreferrer"
        >
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
          <span>
            {props.tools.map((tag) => (
              <span className="tag-span">{tag}</span>
            ))}
          </span>
        </div>
      </article>
    </div>
  );
};

export default OtherCard;
