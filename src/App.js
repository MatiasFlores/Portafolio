import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Experiencia from "./components/Experiencia";
import SocialLinks from "./components/SocialLinks";
import Languages from "./components/Languages";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Experiencia />
      <Skills />
      <Languages />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
