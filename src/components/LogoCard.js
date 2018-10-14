import React from "react";
import PropTypes from "prop-types";
import "./components.css"

const LogoCard = ({image}) => {
  return(
    <div className="col-lg-3">
      <img src={image} className="img-fluid rounded" alt="logo"/>
    </div>
  )
}

LogoCard.propTypes = {
  image: PropTypes.string.isRequired
}

export default LogoCard;
