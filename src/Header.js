import React from 'react';
import KrissLogo from './KrissLogo.PNG';

function Header() {
  return (
    <header className="App-header">
      <h1>Welcome!</h1>
      <img src={KrissLogo} className="App-logo" alt="logo" />
    </header>
  );
}

export default Header;
