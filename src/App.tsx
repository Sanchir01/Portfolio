import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import Projects from './components/projects/Projects';
import About from './components/About/About';
import Contacts from './components/contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Content />
      <About/>
      <Projects />
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
