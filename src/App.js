import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Presentation from './components/Presentation';

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
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

