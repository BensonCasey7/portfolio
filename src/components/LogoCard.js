import React from "react";
import PropTypes from "prop-types";
import "./components.css"

const LogoCard = ({image, title, body}) => {
  return(
    <div className="col-lg-3">
      <img src={image} className="img-fluid rounded" alt={title}/>
      <div>
        {title}
      </div>
      <div className="showcase-body">
        {body}
      </div>
    </div>
  )
}

LogoCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

export default LogoCard;
