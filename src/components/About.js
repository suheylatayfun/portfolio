import React from "react";
import { Icon } from "@iconify/react";
import html5 from "@iconify/icons-logos/html-5";
import css3 from "@iconify/icons-logos/css-3";
import sassIcon from "@iconify/icons-logos/sass";
import javascriptIcon from "@iconify/icons-logos/javascript";
import reactIcon from "@iconify/icons-logos/react";
import reduxIcon from "@iconify/icons-logos/redux";
import nodejsIcon from "@iconify/icons-logos/nodejs";
import postgresqlIcon from "@iconify/icons-logos/postgresql";
import expressIcon from "@iconify/icons-logos/express";
// import npmIcon from "@iconify/icons-logos/npm";
// import postmanIcon from "@iconify/icons-logos/postman";
// import sendgridIcon from "@iconify/icons-logos/sendgrid";
// import cloudinaryIcon from "@iconify/icons-logos/cloudinary";

function About() {
  return (
    <div className="about-container" id="about">
      <div className="about">
        <br />
        <h1>About me</h1>
        <br />
        <p>
         In 2020, I found my passion for learning to build from scratch, making it work how I want by coding, and using it to improve the lives of people, so I made a career transition from being a teacher to a web developer. 
        </p>
        <p>
         I'm a web developer employed with skills in Javascript, React, Redux-Saga, HTML/CSS, Node.js, Express.js and emerging technologies to build full stack, full crud applications from design into deployment. 
        </p>
        <br />
        <p>
         I love spending time with my beloved one in nature, walking, doing outdoor activities and tasting my husband's delicious foods.
        </p>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ul className="skills-list">
          <li title="javascript">
            <Icon
              icon={javascriptIcon}
              style={{ width: "50px", height: "55px" }}
            />
            <h4>JAVASCRIPT</h4>
          </li>
          <li title="react">
            <Icon icon={reactIcon} style={{ width: "55px", height: "55px" }} />
            <h4>REACT</h4>
          </li>
          <li title="redux">
            <Icon icon={reduxIcon} style={{ width: "50px", height: "55px" }} />
            <h4>REDUX</h4>
          </li>
          <li title="node">
            <Icon icon={nodejsIcon} style={{ width: "65px", height: "55px" }} />
            <h4>NODE.JS</h4>
          </li>
          <li title="postgresql">
            <Icon
              icon={postgresqlIcon}
              style={{ width: "50px", height: "55px" }}
            />
            <h4>POSTGRESQL</h4>
          </li>
          <li title="html">
            <Icon icon={html5} style={{ width: "40px", height: "55px" }} />
            <h4>HTML5</h4>
          </li>
          <li title="css">
            <Icon icon={css3} style={{ width: "40px", height: "55px" }} />
            <h4>CSS3</h4>
          </li>
          <li title="express">
            <Icon
              icon={expressIcon}
              style={{
                width: "60px",
                height: "55px",
                backgroundColor: "a2a2a2",
              }}
            />
            <h4>EXPRESS.JS</h4>
          </li>
          <li title="sass">
            <Icon icon={sassIcon} style={{ width: "55px", height: "55px" }} />
            <h4>SASS</h4>
          </li>
          {/* <li title="npm">
            <Icon icon={npmIcon} width="45px" />
            <h4>NPM</h4>
          </li> */}
          {/* <li title="postman">
            <Icon icon={postmanIcon} width="40px" />
            <h4>POSTMAN</h4>
          </li>
          <li title="sendgrid">
            <Icon icon={sendgridIcon} width="30px" />
            <h4>SENDGRID</h4>
          </li>
          <li title="cloudinary">
            <Icon icon={cloudinaryIcon} width="45px" />
            <h4>CLOUDINARY</h4>
          </li> */}
        </ul>
      </div>
      {/* <hr/> */}
    </div>
  );
}
export default About;
