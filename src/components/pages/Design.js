import React from 'react';
import '../../App.css';
import './../components.css';
import './pages.css';
import ShowcaseCard from '../ShowcaseCard';
import cubs from '../../images/cubs-wallpaper.png';
import pirates from '../../images/pirates-wallpaper.png';
import ig_poster from '../../images/imitation-game-poster.jpg';
import em_poster from '../../images/ex-machina-poster.png';
import fly_the_w from '../../images/fly-the-w.png';
import cb_logo from '../../images/cb-logo.png';
import r_logo from '../../images/r-logo.png';
import oq_logo from '../../images/oq-logo.png';

const Design = () => {
  const cards = [
    {'image': cubs, 'text': 'Test text'},
    {'image': pirates, 'text': 'Test text'},
    {'image': ig_poster, 'text': 'Test text'},
    {'image': em_poster, 'text': 'Test text'},
    {'image': fly_the_w, 'text': 'Test text'},
    {'image': cb_logo, 'text': 'Test text'},
    {'image': r_logo, 'text': 'Test text'},
    {'image': oq_logo, 'text': 'Test text'}
  ];

  return (
    <div>
      <h1 className='title'>Design</h1>
      <div className='card-deck'>
        {cards.map(card => <ShowcaseCard image={card.image} text={card.text}/>)}
      </div>
    </div>
  );
}

export default Design;
