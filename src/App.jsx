import React from "react"
import Navbar from "./components/layout/Navbar"
import Hero from "./components/section/Hero";
import About from "./components/section/About";
import Skills from "./components/section/Skills";
import Projects from "./components/section/Projects";

const App = () => {
  return (
    <div className='min-h-screen bg-black pb-[100vh]'>
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
        </main>
      </div>
    
  );
};

export default App