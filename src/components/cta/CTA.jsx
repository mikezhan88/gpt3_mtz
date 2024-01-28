import React from 'react';
import './cta.css';
const CTA = () => {
  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>Embrace the future</p>
        <h3>Register Today & start exploring the endless possibilities.</h3>
      </div>
      <div className="gpt3__cta-btn">
        <a href='https://chat.openai.com/auth/login'>
          <button type="button" link>Get Started</button>
        </a>
      </div>
    </div>
  )
}

export default CTA