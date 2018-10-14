import React from "react";
import "../../App.css";
import "./../components.css";
import "./pages.css";
import ShowcaseCard from "../ShowcaseCard";
import LogoCard from "../LogoCard";
import cubs from "../../images/cubs-wallpaper.jpg";
import pirates from "../../images/pirates-wallpaper.jpg";
import ig_poster from "../../images/imitation-game-poster.jpg";
import em_poster from "../../images/ex-machina-poster.jpg";
import fly_the_w from "../../images/fly-the-w.jpg";
import cb_logo from "../../images/cb-logo.png";
import r_logo from "../../images/r-logo.png";
import oq_logo from "../../images/oq-logo.png";

const Design = () => {
  const cards = [
    {"image": fly_the_w, "title": "Fly the W", "body": "Test body"},
    {"image": ig_poster, "title": "Test title", "body": "Test body"},
    {"image": em_poster, "title": "Test title", "body": "Test body"},
    {"image": cubs, "title": "Test title", "body": "Test body"},
    {"image": pirates, "title": "Test title", "body": "Test body"}
  ];

  const logos = [
    {"image": cb_logo},
    {"image": r_logo},
    {"image": oq_logo}
  ];

  return (
    <div>
      <h1 className="title">Design Showcase</h1>
      <div className="card-deck">
        {cards.map(card => <ShowcaseCard image={card.image} title={card.title} body={card.body}/>)}
      </div>
      <h1 className="subtitle">Logo Design</h1>
      <div className="container-fluid showcase-row">
        <div className="row justify-content-around">
        {logos.map(logo => <LogoCard image={logo.image}/>)}
        </div>
      </div>
    </div>
  );
}

export default Design;
