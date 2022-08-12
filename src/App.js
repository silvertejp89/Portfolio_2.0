import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <a
        className="App-link"
        href="https://www.google.se/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Google Something now!
      </a>
      <Footer />
    </div>
  );
}

export default App;

