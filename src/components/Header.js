import React from 'react';
import '../style.css';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
// import ill01 from '../assets/ill01.svg';
import iPort from '../assets/iPort-01.svg';

const Header = () => {
  return (
    <header className="header-container">
      <nav className="navbar-links">
        <a
          href="https://www.linkedin.com/in/krissstockhaus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo" src={linkedin} alt=" Kriss LinkedIn link" />
        </a>
        <a
          href="https://github.com/silvertejp89"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo" alt="Kriss GitHub link" src={github} />
        </a>
        <a
          href="https://www.krissstockhaus.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="logo" alt="Kriss Portfolio link" src={iPort} />
        </a>
      </nav>

      <section className="header-text">
        <p className="portfolio-name">
          Portfolio: <span class="header-span">Kriss Stockhaus</span>
        </p>
        <h1 className="frontend-developer">frontend developer</h1>
        <h1 className="information-designer">+ information designer</h1>
      </section>

      <img
        className="profile-image"
        src="https://i.ibb.co/SxjFhKj/Kriss-Square-01.png"
        alt="Kriss"
      />
    </header>
  );
};

export default Header;
