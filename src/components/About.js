import React from 'react';
import { Icon} from '@iconify/react';
import html5 from '@iconify/icons-logos/html-5';
import css3 from '@iconify/icons-logos/css-3';
import sassIcon from '@iconify/icons-logos/sass';
import javascriptIcon from '@iconify/icons-logos/javascript';
import reactIcon from '@iconify/icons-logos/react';
import reduxIcon from '@iconify/icons-logos/redux';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import postgresqlIcon from '@iconify/icons-logos/postgresql';
import npmIcon from '@iconify/icons-logos/npm';
import postmanIcon from '@iconify/icons-logos/postman';
import sendgridIcon from '@iconify/icons-logos/sendgrid';
import cloudinaryIcon from '@iconify/icons-logos/cloudinary';


function About(){
  return(
    <div className="about-container" id="about">
    <div className="about">
      <h1>About me</h1>
      <p>
        I am a highly motivated web developer with a background in
        education. My coding journey started by teaching myself the core
        principles of HTML, CSS, and Javascript through online courses,
        YouTube videos, and medium blogs. After learning the fundamentals, I
        have attended into Devmountain immersive Web development program
        where I spent hours of coding to learn how to build the front-end
        user interfaces with React/Redux, full CRUD operations on a
        PostgreSQL database through a Node server and to deploy my full
        stack application with popular technologies. I also solidified my
        HTML, CSS/Sass, and Javascript skills.
      </p>
      <p>
        My career goal is to do my best at web development field and keep my
        motivation high all the time.
      </p>
    </div>
    <div className="skills">
      <h1>Skills</h1>
      <ul className="skills-list">    
        <li title="html"><Icon icon={html5} width="30px"/></li>
        <li title="css"><Icon icon={css3} width="30px" /></li>
        <li title="javascript"><Icon icon={javascriptIcon} width="40px" /></li>
        <li title="react"><Icon icon={reactIcon} width="45px"/></li>
        <li title="redux"><Icon icon={reduxIcon} width="40px"/></li>
        <li title="node"><Icon icon={nodejsIcon} width="50px"/></li>
        <li title="postgresql"><Icon icon={postgresqlIcon} width="40px"/></li>
        <li title="npm"><Icon icon={npmIcon} width="45px"/></li>
        <li title="sass"><Icon icon={sassIcon} width="40px" /></li>
        <li title="postman"><Icon icon={postmanIcon} width="40px"/></li>
        <li title="sendgrid"><Icon icon={sendgridIcon} width="30px"/></li>
        <li title="cloudinary"><Icon icon={cloudinaryIcon} width="45px"/></li>
      </ul>
    </div>
    <hr/>
   
  </div>

  )
}
export default About;