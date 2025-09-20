import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import About from "./components/About";
import { Toaster } from "react-hot-toast";
import CookieConsent from "./components/CookieConsent";

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
      <CookieConsent />
    </>
  );
};

export default App;
