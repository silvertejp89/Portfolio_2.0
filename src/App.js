import Header from './components/Header';
import Footer from './components/Footer';
import Presentation from './components/Presentation';
import Tech from './components/Tech';
import Skills from './components/Skills';
import More from './components/More';
import MainList from './components/MainList';
import OtherList from './components/OtherList';
import ThoughtList from './components/ThoughtList';

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <Tech />
      <MainList />
      <OtherList />
      <ThoughtList />
      <Skills />
      <More />
      <Footer />
    </div>
  );
}
export default App;

