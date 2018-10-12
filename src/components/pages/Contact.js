import React, { Component } from 'react';
import '../../App.css';
import './../components.css';
import profile_pic from '../../images/profile-pic.jpg'

class Contact extends Component {
  render() {
    return (
      <div style={{"textAlign": "center"}}>
        <h1 className="title">Contact Me!</h1>
        <img src={profile_pic} className="img-fluid profile-pic" alt="Profile"/>
      </div>
    );
  }
}

export default Contact;
