import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import home from "../icons/home.png";
import homeHover from "../icons/home-hover.png";
import html5 from "../icons/html5.png";
import html5Hover from "../icons/html5-hover.png";
import brackets from "../icons/brackets.png";
import bracketsHover from "../icons/brackets-hover.png";
import design from "../icons/design.png";
import designHover from "../icons/design-hover.png";
import contact from "../icons/contact.png";
import contactHover from "../icons/contact-hover.png";
import github from "../icons/github.png";
import githubHover from "../icons/github-hover.png";
import "../App.css";
import "./components.css";

const Navbar = () => {
  return (
    <div>
      <div className="custom-nav">
        <div>
          <Link to="./">
            <img src={logo} height="60" alt="logo"/>
          </Link>
        </div>
        <div className="icon-group">
          <div>
            <Link to="./">
              <div className="hover-group">
                <img src={home} alt="home" className="icon-base"/>
              </div>
              <div>
                <img src={homeHover} alt="home-hover"/>
              </div>
            </Link>
          </div>
          <div>
            <Link to="./skills">
              <div className="hover-group">
                <img src={html5} alt="html5" className="icon-base" />
              </div>
              <div>
                <img src={html5Hover} alt="html5-hover"/>
              </div>
            </Link>
          </div>
          <div>
            <Link to="./projects">
              <div className="hover-group">
                <img src={brackets} alt="brackets" className="icon-base" />
              </div>
              <div>
                <img src={bracketsHover} alt="brackets-hover"/>
              </div>
            </Link>
          </div>
          <div>
            <Link to="./design">
              <div className="hover-group">
                <img src={design} alt="design" className="icon-base" />
              </div>
              <div>
                <img src={designHover} alt="design-hover"/>
              </div>
            </Link>
          </div>
          <div>
            <Link to="./contact">
              <div className="hover-group">
                <img src={contact} alt="contact" className="icon-base" />
              </div>
              <div>
                <img src={contactHover} alt="contact-hover"/>
              </div>
            </Link>
          </div>
        </div>
        <div className="icon-group">
          <a href="https://github.com/BensonCasey7">
            <div className="hover-group">
              <img src={github} alt="github" className="icon-base" style={{"margin": "10px 5px"}}/>
            </div>
            <div>
              <img src={githubHover} alt="github-hover" style={{"margin": "10px 5px"}}/>
            </div>
          </a>
        </div>
      </div>
      <div className="gradient"></div>
    </div>
  );
}

export default Navbar;
