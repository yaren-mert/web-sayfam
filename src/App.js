import React from "react";
import Introduction from "./components/Introduction";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <a href="#">YM</a>
        </div>
        <nav className="headerLink">
          <a href="#skills" className="hover">
            Skills
          </a>
          <a href="#projects" className="hover">
            Projects
          </a>
          <a href="#profile" className="hover">
            Profile
          </a>
          <a href="#contact" id="contactLink" className="hover">
            Contact Me!
          </a>
        </nav>
      </header>
      <Introduction />
      <Skills />
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
