import React from "react";
import "../../App.css";
import "./../components.css";
import "./pages.css";
import ShowcaseCard from "../ShowcaseCard";
import arcade_blackjack from "../../images/arcade-blackjack.png";
import baseball_ranker from "../../images/baseball-ranker.png";
import portfolio from "../../images/portfolio.png";
import alpha_blog from "../../images/alpha-blog.png";
import fly_the_w from "../../images/fly-the-w.jpg";

const Projects = () => {
  const cards = [
    {"image": portfolio, "title": "Personal Portfolio", "body": "This React site serves as one example of the work that I do. Please take a look through the source code to see the how I've built this.", "link":"https://github.com/BensonCasey7/portfolio"},
    {"image": arcade_blackjack, "title": "Arcade Machine", "body": "Built with the Lake Forest College Computer Science Club, this arcade machine was made to help raise money for Relay for Life. Each member of the club built a game in Java and they were all brought together to create this final product.", "link":"https://github.com/BensonCasey7/MultiGame"},
    {"image": alpha_blog, "title": "Alpha Blog", "body": "Built based on the Udemy Complete Ruby on Rails Developer Course. A simple blog app that allows users to create accounts and create articles. Supports basic CRUD operations and user authentication.", "link":"https://github.com/BensonCasey7/alpha-blog"},
    {"image": arcade_blackjack, "title": "Blackjack AI", "body": "Java program that simulates thousands of games of blackjack. It uses AI to demonstrate the effectiveness of advanced strategies and counting cards.", "link":"https://github.com/BensonCasey7/BlackjackAI"},
    {"image": baseball_ranker, "title": "Baseball Ranker", "body": "Communicating with the Sportradar API, this app has functionality to retrieve up to date baseball stats and use sabermetics to rank MLB players and find those that are undervalued and overvalued."}
  ];

  return (
    <div>
      <h1 className="title">Project Showcase</h1>
      <div className="card-deck">
        {cards.map(card => <ShowcaseCard image={card.image} title={card.title} body={card.body}/>)}
      </div>
    </div>
  );
}

export default Projects;
