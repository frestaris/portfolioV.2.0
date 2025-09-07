import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import About from "./About";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="top-center" />
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <About />
    </>
  );
};

export default App;
