import React from "react";
import ContactCard from "../ContactCard";
import "../../App.css";
import "./../components.css";
import profile_pic from "../../images/profile-pic.jpg";
import github from "../../icons/github.png";
import githubHover from "../../icons/github-hover.png";
import linkedin from "../../icons/linkedin.png";
import linkedinHover from "../../icons/linkedin-hover.png";
import twitter from "../../icons/twitter.png";
import twitterHover from "../../icons/twitter-hover.png";

const Contact = () => {
  const links = [
    {"image": github, "image_hover": githubHover, "text": "GitHub", "url": "https://github.com/BensonCasey7"},
    {"image": linkedin, "image_hover": linkedinHover, "text": "LinkedIn", "url": "https://www.linkedin.com/in/casey-benson7/"},
    {"image": twitter, "image_hover": twitterHover, "text": "Twitter", "url": "https://twitter.com/Bensoncasey7"}
  ]

  return (
    <div>
      <div style={{"textAlign": "center"}}>
        <h1 className="title">Contact Me!</h1>
        <img src={profile_pic} className="img-fluid profile-pic" alt="Profile"/>
      </div>
      <h1 className="contact-info">bensoncasey7@gmail.com</h1>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="row justify-content-around">
            {links.map(link => <ContactCard image={link.image} image_hover={link.image_hover} text={link.text} url={link.url}/>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
