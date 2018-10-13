import React from "react";
import "../../App.css";
import "./../components.css";
import "./pages.css";
import SkillCard from "../SkillCard"
import bootstrap from "../../images/skills/bootstrap.png";
import css from "../../images/skills/css.png";
import git from "../../images/skills/git.png";
import html from "../../images/skills/html.png";
import firebase from "../../images/skills/firebase.png";
import heroku from "../../images/skills/heroku.png";
import illustrator from "../../images/skills/illustrator.png";
import indesign from "../../images/skills/indesign.png";
import java from "../../images/skills/java.png";
import jquery from "../../images/skills/jquery.png";
import js from "../../images/skills/js.png";
import nodejs from "../../images/skills/nodejs.png";
import photoshop from "../../images/skills/photoshop.jpg";
import php from "../../images/skills/php.png";
import python from "../../images/skills/python.png";
import rails from "../../images/skills/rails.png";
import react from "../../images/skills/react.png";
import sql from "../../images/skills/sql.png";
import swift from "../../images/skills/swift.png";


const Skills = () => {
  const devSkills = [
    {"image": js, "text": "JavaScript"},
    {"image": nodejs, "text": "Node.js"},
    {"image": react, "text": "React"},
    {"image": rails, "text": "Ruby on Rails"},
    {"image": html, "text": "HTML"},
    {"image": css, "text": "CSS"},
    {"image": java, "text": "Java"},
    {"image": git, "text": "Git"},
    {"image": bootstrap, "text": "Bootstrap"},
    {"image": firebase, "text": "Firebase"},
    {"image": heroku, "text": "Heroku"},
    {"image": sql, "text": "SQL"},
    {"image": php, "text": "PHP"},
    {"image": jquery, "text": "jQuery"},
    {"image": python, "text": "Python"},
    {"image": swift, "text": "Swift"}
  ]

  const designSkills = [
    {"image": illustrator, "text": "Illustrator"},
    {"image": photoshop, "text": "Photoshop"},
    {"image": indesign, "text": "InDesign"}
  ]

  return (
    <div>
      <h1 className="title">Development Skills</h1>
      <div className="row justify-content-around">
        {devSkills.map(skill => <SkillCard image={skill.image} text={skill.text}/>)}
      </div>
      <h1 className="title">Design Skills</h1>
      <div className="row justify-content-around">
        {designSkills.map(skill => <SkillCard image={skill.image} text={skill.text}/>)}
      </div>
    </div>
  );
}

export default Skills;
