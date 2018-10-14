import React from "react";
import PropTypes from "prop-types";
import "./components.css";
import github from "../icons/github.png";
import githubHover from "../icons/github-hover.png";

const ShowcaseCard = ({image, title, body, link}) => {
  return(
    <div className="container-fluid showcase-row">
      <div className="row">
        <div className="col-lg-7">
          <img src={image} className="img-fluid rounded" alt={title}/>
        </div>
        <div className="col-lg-5">
          <div className="showcase-title">
            {title}
          </div>
          <div className="showcase-body">
            {body}
          </div>
          {link && <div className="showcase-link icon-group">
            <a href={link}>
              <div>
                <img src={githubHover} alt="github-hover" style={{"margin": "10px 5px"}}/>
              </div>
              <div className="hover-group">
                <img src={github} alt="github" className="icon-base" style={{"margin": "10px 5px"}}/>
              </div>
            </a>
          </div>}
        </div>
      </div>
    </div>
  )
}

ShowcaseCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

export default ShowcaseCard;
