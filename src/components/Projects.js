import React from "react";
import volevent from './../asset/volevent.png';
import storepo from './../asset/storepo-1.png';
import recipe from './../asset/recipe-book-1.png';
import giftAway from './../asset/gift-away-1.png';
import Icon from '@iconify/react';
import githubIcon from '@iconify/icons-logos/github-icon';
import { GoGlobe } from "react-icons/go";

function Projects() {
  return (
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="project">
          <div className="project-image">
            <img src={volevent} alt="volunteer" id="image"/>
          </div>
          <div className="project-info">
            <p><strong>Volevent</strong>, personal project, is a fully responsive volunteering website where brings volunteers and organizations together volunteering events. Organizations can share their events in need of volunteers that are serving the community and volunteers can also check for upcoming events and be a volunteer in them.
            <p><strong>Technologies:</strong> React, Redux, Node, Express, PostgreSQL, Massive, Sass, Bcrypt.js, Cloudinary, Sendgrid</p>
            <div className="external-links">
            <a href="https://github.com/rahimestayfun/dallas-volunteer-app" target="_blank" rel="noopener noreferrer"><Icon icon={githubIcon} width="45"/></a>
            <a href="http://www.volevent.xyz/#/" target="_blank" rel="noopener noreferrer"><GoGlobe size="50" color="#5F4B8BFF"/></a> 
            </div>
            </p>
          </div>
        </div>
        <hr/>

        <div className="project">
          <div className="project-image">
            <img src={giftAway}  alt="giftaway" id="image"/>
          </div>
          <div className="project-info">
            <p><strong>Gift Away</strong>, group project, is a fully responsive donation website that helps users to give away his/her unused or unwanted items at home. Donators can easily share their stuff. Donation takers can view donations they wish and chat with donators to schedule a time for taking donation/s. 
            <p><strong>Technologies:</strong> React, Redux, Node, Express, PostgreSQL, Massive, Bcrypt.js, Sass, Cloudinary, Bootstrap, Socket.io</p>
            <div className="external-links">
            <a href="https://github.com/wdl28-group-project/donationizer" target="_blank" rel="noopener noreferrer"><Icon icon={githubIcon} width="45"/></a>
            {/* <a href="http://www.volevent.xyz/#/" target="_blank" rel="noopener noreferrer"><GoGlobe size="50"/></a>  */}
            </div>
            </p>
          </div>
        </div>
        <hr/>

        <div className="project">
          <div className="project-image">
            <img src={storepo} alt="story-blog" id="image"/>
          </div> 
          <div className="project-info">
            <p><strong>Storepo</strong> is a blog hosting website for user to share their first day experience at work. Storepo allows user to view other's experience and search blogs under different categories.
            < p><strong>Technologies:</strong> React, Html, Css, Recaptcha</p>
            <div className="external-links">
            <a href="https://github.com/rahimestayfun/storepory" target="_blank" rel="noopener noreferrer"><Icon icon={githubIcon} width="45"/></a>
            {/* <a href="http://www.volevent.xyz/#/" target="_blank" rel="noopener noreferrer"><GoGlobe size="50"/></a>  */}
            </div>
           </p>
          </div>
        </div>
        <hr/>

        <div className="project">
          <div className="project-image">
            <img src={recipe} alt="recipe" id="image"/>
          </div>
          <div className="project-info">
            <p><strong>My recipe book</strong> is a clean and simple react app that helps you to easily keep your recipes organized. It was built with React with users' adding, viewing, updating, and deleting his/her recipe functionalities. All recipe data was stored in postgresql database.
            <p><strong>Technologies:</strong> React, Massive, Postgresql, Html, Css</p>
            <div className="external-links">
            <a href="https://github.com/rahimestayfun/recipe_book" target="_blank" rel="noopener noreferrer"><Icon icon={githubIcon} width="45"/></a>
            {/* <a href="http://www.volevent.xyz/#/" target="_blank" rel="noopener noreferrer"><GoGlobe size="50"/></a>  */}
            </div>
            </p>
          </div>
        </div>        
    </div>
  );
}
export default Projects;
