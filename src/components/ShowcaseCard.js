import React from 'react';
import PropTypes from 'prop-types';
import './components.css'

const ShowcaseCard = ({image, text}) => {
  return(
    <div>
      <div className='container-fluid showcase-row'>
        <div className='row'>
          <div className='col-lg-7'>
            <img src={image} className='img-fluid rounded' alt={text}/>
          </div>
          <div className='col-md-auto showcase-text'>
            {text}
          </div>
        </div>
      </div>
    </div>
  )
}

ShowcaseCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default ShowcaseCard;
