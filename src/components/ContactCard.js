import React from "react";
import PropTypes from "prop-types";
import "./components.css";

const ContactCard = ({image, image_hover, text, url}) => {
  console.log(image_hover);
  return(
    <div className="col-md-3 contact-card">
      <a href={url}>
        <div className="test">
          <div>
            <div className="contact-hover">
              <img src={image_hover} width="75" alt="contact-hover"/>
              <div className="contact-card-text">
                {text}
              </div>
            </div>
          </div>
          <div className="contact-hover-group">
            <div className="contact-icon-base">
              <img src={image} width="75" alt="contact"/>
              <div className="contact-card-text">
                {text}
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

ContactCard.propTypes = {
  image: PropTypes.string.isRequired,
  image_hover: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default ContactCard;
