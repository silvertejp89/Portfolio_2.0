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
// import Card from './components/Card';
// import contacts from './assets/contacts';
import ProjectCard from './components/ProjectCard';
import mainProjects from './assets/mainProjects';

function createCard(project) {
  return (
    // <Card
    //   key={contact.id}
    //   name={contact.name}
    //   img={contact.imgURL}
    //   tel={contact.phone}
    //   email={contact.email}
    // />
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

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <Tech />
      <div className="portfolio-section">
        <div className="grid-container">{mainProjects.map(createCard)}</div>
      </div>
      <OtherProjects />
      <Thoughts />
      <Skills />
      <More />
      <Footer />
    </div>
  );
}
export default App;

