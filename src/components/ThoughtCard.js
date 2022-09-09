import React from 'react';
import '../style.css';

const ThoughtCard = (props) => {
  return (
    <>
      <div className="thoughtCard">
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
              <span className="colored-span">>></span>{' '}
            </a>
          </p>
        </article>
      </div>
    </>
  );
};

export default ThoughtCard;
