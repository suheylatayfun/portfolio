import React from "react";
import volevent1 from "./../asset/volevent-1.png";
import volevent2 from "./../asset/volevent-2.png";
import volevent3 from "./../asset/volevent-3.png";
import volevent4 from "./../asset/volevent-4.png";
import volevent5 from "./../asset/volevent-5.png";
import volevent6 from "./../asset/volevent-6.png";
import volevent7 from "./../asset/volevent-7.png";
import volevent8 from "./../asset/volevent-8.png";
import volevent9 from "./../asset/volevent-9.png";
import volevent10 from "./../asset/volevent-10.png";
import volevent11 from "./../asset/volevent-11.png";
import volevent12 from "./../asset/volevent-12.png";
import typing from "../asset/typing.gif";
// import typing1 from "../asset/typing-1.png";
import storepo from "./../asset/storepo.gif";
import storepo1 from "./../asset/storepo-1.png";
// import storepo2 from "./../asset/storepo-2.png";
import storepo3 from "./../asset/storepo-3.png";
// import storepo4 from "./../asset/storepo-4.png";
// import storepo5 from "./../asset/storepo-5.png";
// import storepo6 from "./../asset/storepo-6.png";
// import storepo7 from "./../asset/storepo-7.png";
import snake from "./../asset/snake.gif";
import recipe from "./../asset/recipe.gif";
import recipe1 from "./../asset/recipe-book-1.png";
// import recipe2 from "./../asset/recipe-book-2.png";
import recipe3 from "./../asset/recipe-book-3.png";
// import recipe4 from "./../asset/recipe-book-4.png";
// import recipe5 from "./../asset/recipe-book-5.png";
import giftAway1 from "./../asset/gift-away-1.png";
import giftAway2 from "./../asset/gift-away-2.png";
import us_arms_sales from "../asset/us_arms_sales.png";
import Icon from "@iconify/react";
import githubIcon from "@iconify/icons-logos/github-icon";
import { GoGlobe } from "react-icons/go";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Projects() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1100 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1100, min: 930 },
      items: 1,
    },
    phone: {
      breakpoint: { max: 930, min: 585 },
      items: 1,
    },
    sphone: {
      breakpoint: { max: 585, min: 390 },
      items: 1,
    },
  };
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="project">
        <Carousel responsive={responsive} className="project-image">
          <img src={volevent1} alt="volunteer" id="image" />
          <img src={volevent2} alt="volunteer" id="image" />
          <img src={volevent3} alt="volunteer" id="image" />
          <img src={volevent4} alt="volunteer" id="image" />
          <img src={volevent5} alt="volunteer" id="image" />
          <img src={volevent6} alt="volunteer" id="image" />
          <img src={volevent7} alt="volunteer" id="image" />
          <img src={volevent8} alt="volunteer" id="image" />
          <img src={volevent9} alt="volunteer" id="image" />
          <img src={volevent10} alt="volunteer" id="image" />
          <img src={volevent11} alt="volunteer" id="image" />
          <img src={volevent12} alt="volunteer" id="image" />
        </Carousel>
        <div className="project-info">
          <div>
            <p>
              <strong>Volevent</strong>, personal project, is a fully responsive
              volunteering platform that brings volunteers and organizations
              together on volunteering events. While organizations can share
              their events which is serving the community and in need of
              volunteer(s), volunteers can check upcoming events and can be a
              volunteer for them.
            </p>
            <p>
              <strong>Technologies:</strong> React, Redux, Node, Express,
              PostgreSQL, Massive, Sass, Bcrypt.js, Cloudinary, Sendgrid
            </p>
          </div>
          <div className="external-links">
            <a
              href="https://github.com/rahimestayfun/dallas-volunteer-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={githubIcon} width="45" />
            </a>
            <a
              href="http://www.volevent.xyz/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoGlobe size="50" color="#5F4B8BFF" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="project">
        <Carousel responsive={responsive} className="project-image">
          <img src={giftAway1} alt="giftaway" id="image" />
          <img src={giftAway2} alt="giftaway" id="image" />
        </Carousel>
        <div className="project-info">
          <div>
            <p>
              <strong>Gift Away</strong>, group project, is a fully responsive
              donation website that helps users to give away his/her unused or
              unwanted items at home. Donators can easily share their stuff.
              Donation takers can view donations they wish and chat with
              donators to schedule a time for picking up donation/s.
            </p>
            <p>
              <strong>Technologies:</strong> React, Redux, Node, Express,
              PostgreSQL, Massive, Bcrypt.js, Sass, Cloudinary, Bootstrap,
              Socket.io
            </p>
          </div>
          <div className="external-links">
            <a
              href="https://github.com/wdl28-group-project/donationizer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={githubIcon} width="45" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="project">
        <Carousel responsive={responsive} className="project-image">
          <img src={us_arms_sales} alt="map" id="image" />
        </Carousel>
        <div className="project-info">
          <div>
            <p>
              <strong>US Arms Sales</strong> is a Mintbean hackathon for Social
              Justice Hack Week built with two other team members. It is data
              visualization project for global US arms trade data. You can see
              US arms sales deliveries/authorizations data on a world choropleth
              and filter them by year and regional sales data on doughnut chart.{" "}
            </p>
            <p>
              <strong>Technologies:</strong> React, d3.js, chart.js
            </p>
          </div>
          <div className="external-links">
            <a
              href="https://github.com/yhafez/USArmsTrade"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={githubIcon} width="45" />
            </a>
            <a
              href="https://usarmstrade.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoGlobe size="50" color="#5F4B8BFF" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="project">
        <Carousel responsive={responsive} className="project-image">
          <img src={typing} alt="recipe" id="image" />
        </Carousel>
        <div className="project-info">
          <div>
            <p>
              <strong>Typing practice</strong> is a simple Javascript typing
              playground for anyone who wants to practice typing with a relaxing
              music. User can realize his/her typos easily with an indicator on
              the text and a lowering music volume. It also offers a dark mode
              selection.
            </p>
            <p>
              <strong>Technologies:</strong> Javascript
            </p>
          </div>
          <div className="external-links">
            <a
              href="https://github.com/rahimestayfun/typing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={githubIcon} width="45" />
            </a>
            <a
              href="https://rahimestayfun.github.io/typing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoGlobe size="50" color="#5F4B8BFF" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="project">
        <Carousel responsive={responsive} className="project-image">
          <img src={snake} alt="recipe" id="image" />
        </Carousel>
        <div className="project-info">
          <div>
            <p>
              <strong>Snake</strong> is a simple Javascript game built with
              HTML5 canvas.
            </p>
            <p>
              <strong>Technologies:</strong> Javascript, HTML5 canvas
            </p>
          </div>
          <div className="external-links">
            <a
              href="https://github.com/rahimestayfun/snake"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={githubIcon} width="45" />
            </a>
            <a
              href="https://rahimestayfun.github.io/snake/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoGlobe size="50" color="#5F4B8BFF" />
            </a>
          </div>
        </div>
      </div>
      <hr />

      <div className="project">
        <Carousel responsive={responsive} className="project-image">
          <img src={storepo} alt="story-blog" id="image" />
          <img src={storepo1} alt="story-blog" id="image" />
          {/* <img src={storepo2} alt="story-blog" id="image" /> */}
          <img src={storepo3} alt="story-blog" id="image" />
          {/* <img src={storepo4} alt="story-blog" id="image" />
          <img src={storepo5} alt="story-blog" id="image" />
          <img src={storepo6} alt="story-blog" id="image" />
          <img src={storepo7} alt="story-blog" id="image" /> */}
        </Carousel>
        <div className="project-info">
          <div>
            <p>
              <strong>Storepo</strong> is a blog hosting platform for users to
              share their first day experiences at work with others. Users also
              can view others' experiences and search for blogs under different
              categories.
            </p>
            <p>
              <strong>Technologies:</strong> React, Html, Css, Recaptcha
            </p>
          </div>
          <div className="external-links">
            <a
              href="https://github.com/rahimestayfun/storepory"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={githubIcon} width="45" />
            </a>
          </div>
        </div>
      </div>
      <hr />

      <div className="project">
        <Carousel responsive={responsive} className="project-image">
          <img src={recipe} alt="recipe" id="image" />
          <img src={recipe1} alt="recipe" id="image" />
          {/* <img src={recipe2} alt="recipe" id="image" /> */}
          <img src={recipe3} alt="recipe" id="image" />
          {/* <img src={recipe4} alt="recipe" id="image" />
          <img src={recipe5} alt="recipe" id="image" /> */}
        </Carousel>
        <div className="project-info">
          <div>
            <p>
              <strong>My recipe book</strong> is a simple react app that helps
              you to keep your recipes organized easily. It was built with React
              with user's adding, viewing, updating, and deleting his/her recipe
              functionalities. All recipe data was stored in postgreSQL
              database.
            </p>
            <p>
              <strong>Technologies:</strong> React, Massive, PostgreSQL, Html,
              Css
            </p>
          </div>
          <div className="external-links">
            <a
              href="https://github.com/rahimestayfun/recipe_book"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={githubIcon} width="45" />
            </a>
            {/* <a href="http://www.volevent.xyz/#/" target="_blank" rel="noopener noreferrer"><GoGlobe size="50"/></a>  */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
