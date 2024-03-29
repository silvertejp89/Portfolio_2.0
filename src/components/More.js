import React from "react";
import "../style.css";
import linked from "../assets/linked.svg";
import git from "../assets/git.svg";
import iPort2 from "../assets/iPort-02.svg";

const More = () => {
  const handleSymbolClick = () => {
    alert(
      "Hello! Unfortunately my illustration portfolio site is currently moving, please try another time!"
    );
  };

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
          <span onClick={handleSymbolClick}>
            <img
              className="logo-image"
              alt="Kriss illustrations portfolio link"
              src={iPort2}
            />
            <p className="logo-text">Illustrations</p>
          </span>
        </div>
      </nav>
    </section>
  );
};

export default More;
