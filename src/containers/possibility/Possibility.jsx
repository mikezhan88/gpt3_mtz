import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';
const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Click Below to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Experience the power of GPT-3 today. Start exploring endless possibilities and unlock the potential of AI-driven language models. Try GPT-3 now!</p>
      <h4>Click Below to Get Started</h4>
    </div>
  </div>
  )
}

export default Possibility