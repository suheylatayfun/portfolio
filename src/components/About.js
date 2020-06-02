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
        <h1>About me</h1>
        <p>
          I am a highly motivated Web Developer with a background in education.
        </p>
        <p>
          My coding journey started by studying the core principles of HTML,
          CSS, and JavaScript. I taught myself through the use of online
          courses, YouTube videos, and Medium blogs. After learning the
          fundamentals, I enrolled in Devmountain's 13 weeks Immersive Web
          Development Program.
        </p>
        <p>
          Through Devmountain's project-based curriculum, I gained and employed
          the skills necessary to build front-end user interfaces using React
          and Redux, the skills to build back-ends in Node and connect front
          with back using full CRUD operations, and the skills to create and
          connect a manageable PostgreSQL database. While enrolled, I taught
          myself a few non-curriculum technologies and gained team experience by
          working with a group tasked with deploying a site from scratch.
        </p>
        <p>
          My passion for Web Development drives me to do my best in the field,
          and my background in education empowers my learning.
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
