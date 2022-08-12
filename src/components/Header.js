import React from 'react';
// import KrissLogo from './assets/KrissLogo.PNG';
import '../style.css';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import stackoverflow from '../assets/stackoverflow.svg';

function Header() {
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
          href="https://stackoverflow.com/c/technigo/users/276"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="logo"
            alt="Kriss Stack Overflow link"
            src={stackoverflow}
          />
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
        src="https://avatars.githubusercontent.com/u/80514864?v=4"
        alt="Kriss"
      />
    </header>
  );
}

export default Header;

// ----------------------first version------------------
// function Header() {
//   return (
//     <header className="App-header">
//       <h1>Welcome!</h1>
//       <img src={KrissLogo} className="App-logo" alt="logo" />
//     </header>
//   );
// }
