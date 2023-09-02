import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import GitCalender from "./Pages/GitCalender/GitCalender";
import Stats from "./Pages/GitCalender/Stats";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <GitCalender />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
