import React from 'react';
import './features.css';
import Feature from '../../components/feature/Feature';

const featuresData = [
  {
    title: 'GPTonline',
    text: "A revolutionary platform that offers AI chat technology for free to users worldwide. We provide unrivaled language processing and personalization features through our ChatGPT Online system, powered by OpenAI's API.",
  },
  {
    title: 'Califica',
    text: 'A platform designed with the primary goal of optimizing the time of school teachers in Peru while providing them access to new technologies. ',
  },
  {
    title: 'Meet Elcey',
    text: ' State of the art platform powered by artificial intelligence and ChatGPT that assists personal stylists and sales assistants with easy to use digital tools and training to provide shoppers with the perfect clothing recommendation size and fit.',
  },
  {
    title: 'Cleanlab',
    text: 'Company focused on data-centric AI (DCAI), providing innovative algorithms and interfaces designed to enhance the quality of datasets. Their primary goal is to diagnose and fix issues within datasets, enabling the production of more reliable machine learning (ML) models.',
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">OpenAI is already being Integrated into many Startup Companies</h1>
      <p>Over 200 companies already use OpenAI</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  )
}

export default Features