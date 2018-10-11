import React, { Component } from 'react';
import '../../App.css';
import './../components.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="hero-image">
          <div className="hero-text">
            <h1>Hi, I'm Casey Benson.</h1>
            <h4>I am a Chicago based developer with a variety of skills ranging from React to Ruby on Rails to Java. Check out the different projects I have been a part of as well as a full list of my skills and design portfolio.</h4>
            <br/>
            <h4>Have a look around and don't hesitate to contact me! I am actively looking for full-time developer positions in the Chicagoland area.</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
