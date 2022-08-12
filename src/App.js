import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Presentation from './components/Presentation';
import Tech from './components/Tech';
import Projects from './components/Projects';
import OtherProjects from './components/OtherProjects';
import Thoughts from './components/Thoughts';
import Skills from './components/Skills';
import More from './components/More';

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <Tech />
      <Projects />
      <OtherProjects />
      <Thoughts />
      <Skills />
      <More />
      <Footer />
    </div>
  );
}
export default App;

