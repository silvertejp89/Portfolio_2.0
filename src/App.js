import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Presentation from './components/Presentation';
import Tech from './components/Tech';
import Skills from './components/Skills';
import More from './components/More';
// import Card from './components/Card';
// import contacts from './assets/contacts';
import ProjectCard from './components/ProjectCard';
import mainProjects from './assets/mainProjects';

import OtherCard from './components/OtherCard';
import otherProjects from './assets/otherProjects';

import ThoughtCard from './components/ThoughtCard';
import thoughts from './assets/thoughts';

function createCard(project) {
  return (
    <ProjectCard
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
      <div className="portfolio-section">{mainProjects.map(createCard)}</div>

      <div className="portfolio-section">{otherProjects.map(createOther)}</div>

      <div className="portfolio-section">{thoughts.map(createThought)}</div>
      <Skills />
      <More />
      <Footer />
    </div>
  );
}
export default App;

