import Header from './components/Header';
import Footer from './components/Footer';
import Presentation from './components/Presentation';
import Tech from './components/Tech';
import Skills from './components/Skills';
import More from './components/More';

import MainList from './components/MainList';

import OtherCard from './components/OtherCard';
import otherProjects from './assets/otherProjects';

import ThoughtCard from './components/ThoughtCard';
import thoughts from './assets/thoughts';

import './App.css';

function createOther(project) {
  return (
    <OtherCard
      key={project.id}
      title={project.title}
      image={project.image}
      netlify={project.netlify}
      heading={project.heading}
      description={project.description}
      github={project.github}
      tools={project.tools}
    />
  );
}

function createThought(thought) {
  return (
    <ThoughtCard
      key={thought.id}
      title={thought.title}
      date={thought.date}
      image={thought.image}
      description={thought.description}
      link={thought.link}
    />
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <Tech />

      {/* -----------------Main Projects--------------- */}
      <MainList />

      {/* -----------------Other Projects--------------- */}

      <div className="portfolio-section">
        <div className="heading-container">
          <h2>Other Projects</h2>
        </div>
        {otherProjects.map(createOther)}
      </div>

      {/* -----------------Thoughts section--------------- */}
      <div className="portfolio-section">
        <div class="heading-container">
          <h2>My Thoughts about Code</h2>
        </div>
        {thoughts.map(createThought)}
      </div>

      <Skills />
      <More />
      <Footer />
    </div>
  );
}
export default App;

