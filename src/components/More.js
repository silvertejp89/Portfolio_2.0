import React from 'react';
import '../style.css';
import linked from '../assets/linked.svg';
import git from '../assets/git.svg';
import stack from '../assets/stack.svg';

function More() {
  return (
    <section className="portfolio-section">
      <div className="heading-container">
        <h2>For more</h2>
      </div>

      <nav className="more-links">
        <div className="logo-links">
          <a
            href="https://www.linkedin.com/in/krissstockhaus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="logo-image"
              src={linked}
              alt=" Kriss LinkedIn link"
            />
            <p className="logo-text">LikedIn</p>
          </a>
        </div>
        <div className="logo-links">
          <a
            href="https://github.com/silvertejp89"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="logo-image" alt="Kriss GitHub link" src={git} />
            <p className="logo-text">Github</p>
          </a>
        </div>
        <div className="logo-links">
          <a
            href="https://stackoverflow.com/c/technigo/users/276"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="logo-image"
              alt="Kriss stackoverflow link"
              src={stack}
            />
            <p className="logo-text">Stackoverflow</p>
          </a>
        </div>
      </nav>
      <a
        href="https://www.krissstockhaus.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p class="illustration-link">
          Curious about my illustrations? Check them out here!
        </p>
      </a>
    </section>
  );
}

export default More;