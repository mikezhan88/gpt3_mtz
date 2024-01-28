import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="GPT-3, short for Generative Pre-trained Transformer 3, is a state-of-the-art language model developed by OpenAI. With a staggering 175 billion parameters, GPT-3 possesses unparalleled natural language processing capabilities. It can understand and generate human-like text across a wide range of contexts, making it a powerful tool for various applications, including content creation, language translation, question answering, and much more." />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The Possibilities will Change the World</h1>
        
        <p><a href='#blog'>Explore the Library</a></p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="GPT-3 can power conversational agents and chatbots to handle customer inquiries, troubleshoot problems, and provide personalized assistance across various platforms. By analyzing and understanding user queries in natural language, GPT-3 can generate relevant and helpful responses, enhancing the efficiency and effectiveness of customer support services." />
        <Feature title="Content Generation" text="PT-3 can be utilized to generate high-quality content for blogs, articles, marketing materials, and social media posts. Writers and content creators can leverage its natural language generation capabilities to draft engaging and informative content efficiently." />
        <Feature title="Education" text="GPT-3 can support education by serving as a virtual tutor or language learning companion. It can generate explanations, examples, and practice questions across a wide range of subjects, helping students understand complex concepts and improve their language skills. " />
      </div>
    </div>
  )
}

export default WhatGPT3