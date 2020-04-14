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
    <div className="App">
    <a href="#home"><IoIosArrowDropup color="#5F4B8BFF" size="50px" id="up"/></a>
      <div className="home" id="home">
      <Header />
        <div className="landing">
          <div className="text">
            <h1>Hi, I'm Rahime Tayfun.</h1>
            <p>A Full Stack Developer in Dallas, Texas</p>
          </div>
        <div className="options">
            <a href="mailto:suheyladurna@gmail.com" rel="noopener noreferrer" title="email"><Icon icon={googleGmail} width="50"/></a>
            <a href="https://www.linkedin.com/in/rahimetayfun/" target="_blank" rel="noopener noreferrer" title="linkedin"><FaLinkedin size="50" color="#0077B7"/></a>
            <a href="https://github.com/rahimestayfun" target="_blank" rel="noopener noreferrer" title="github"><Icon icon={githubIcon} width="50"/></a>
            <a href="https://docs.google.com/document/d/11wrJUvc53ezXM6nzFYduEEvGEhqyrmbBSuhBoSrTf2E/edit?usp=sharing" target="_blank" rel="noopener noreferrer" title="resume"><FaRegFile size="45" color="#5F4B8BFF"/></a>
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
