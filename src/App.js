import KrissLogo from './KrissLogo.PNG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={KrissLogo} className="App-logo" alt="logo" />
        <p>I'm happy to see you!</p>
        <a
          className="App-link"
          href="https://www.google.se/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Something now!
        </a>
      </header>
    </div>
  );
}

export default App;

