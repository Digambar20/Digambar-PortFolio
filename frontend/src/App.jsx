import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Projects from "./components/projects/Projects.jsx";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contactt";
import Footer from "./components/footer/Footer.jsx";
import Summary from "./components/summary/Summary";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <ToastContainer />
      <Navbar theme={theme} setTheme={setTheme} />
      <Summary />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
