import React from "react";
import PropTypes from "prop-types";
import "./components.css";

const SkillCard = ({image, text}) => {
  return(
    <div className="col-md-3">
      <div className="card skill-card">
        <div className="skill-img-container" style={{backgroundImage: `url(${image})`}}>
        </div>
        <div className="card-body skill-card-text">
          {text}
        </div>
      </div>
    </div>
  )
}

SkillCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default SkillCard;
