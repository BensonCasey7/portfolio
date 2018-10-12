import React from "react";
import PropTypes from "prop-types";
import "./components.css"

const ShowcaseCard = ({image, title, body}) => {
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
