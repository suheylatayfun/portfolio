import React from "react";
import "./App.scss";
import Header from "./components/Header";
import About from './components/About';
import Projects from './components/Projects';
import Icon from '@iconify/react';
import googleGmail from '@iconify/icons-logos/google-gmail';
import githubIcon from '@iconify/icons-logos/github-icon';
import {FaLinkedin,FaRegFile} from "react-icons/fa";
import {IoIosArrowDropup} from "react-icons/io";

function App() {
  let currentTime = new Date();
  let currentYear = currentTime.getFullYear();
  return (
    <div className="App" id="home">
    <a href="#home"><IoIosArrowDropup color="#525252" size="50px" id="up"/></a>
      <div className="home">
      <Header />
        <div className="landing">
          <div className="text">
            <h1>Hi, I'm Rahime Tayfun.</h1>
            <p>A Full Stack Developer living in Dallas, Texas</p>
          </div>
        <div className="options">
            <a href="mailto:suheyladurna@gmail.com" rel="noopener noreferrer"><Icon icon={googleGmail} width="50"/></a>
            <a href="https://www.linkedin.com/in/rahimetayfun/" target="_blank" rel="noopener noreferrer"><FaLinkedin size="50" color="#0077B7"/></a>
            <a href="https://github.com/rahimestayfun" target="_blank" rel="noopener noreferrer"><Icon icon={githubIcon} width="50"/></a>
            <a href="https://docs.google.com/document/d/1LTe181eFBUgfV0ceVz12o9L4UMco6aoS1TStulTfnnE/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><FaRegFile size="45" color="#D25565"/></a>
        </div>
        </div>
        <hr/>
      </div>
      <About/>
      <Projects/> 
      <footer>
        <p>&copy;{currentYear} Rahime Tayfun</p>
      </footer>
    </div>
  );
}
export default App;
