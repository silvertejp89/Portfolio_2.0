import React from 'react';
import lineDot from '../assets/lineDot.png';

const Presentation = () => {
  return (
    <section className="intro-section">
      <div className="container">
        <p className="intro-text">
          <img className="line-dot-icon" src={lineDot} alt="line and dot" />
          Hello! I'm a frontend developer with a passion code and usability! I
          Love to create products and user experiences that is easy to
          understand and fun to use. My background consists of many years of
          experience in information design such as technical information with
          focus on illustration. Key competence: Javascript, React, Redux &
          Illustrator.
        </p>
      </div>
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
};

export default Presentation;
