import React from 'react';
import '../style.css';

function ThoughtCard(props) {
  return (
    <>
      <div class="heading-container">
        <h2>{props.title}</h2>
      </div>

      <div className="grid-container">
        <article>
          <a
            aria-label="Link to article"
            className="article-link"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class="image" src={props.image} alt="blog" />
            <div className="blogDate">
              <p>{props.date}</p>
            </div>
            <h4 className="blog-heading"> {props.title} </h4>
          </a>

          <p>
            {props.description}
            <a
              aria-label="link to article"
              className="article-link"
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <span>>></span>{' '}
            </a>
          </p>
        </article>
      </div>
    </>
  );
}

export default ThoughtCard;
