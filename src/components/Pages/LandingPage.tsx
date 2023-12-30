import React from 'react';
import { Link } from 'react-router-dom';
// import './Pages.css'
import './LandingPage.css'

const LandingPage: React.FC = () => {
  return (
    <div className="LandingPageContainer">
      <h1 className="LandingPageHead">Welcome to Genoshi</h1>
      <div className="buttons">
        <Link to="/profile" className="btn">Profile Page</Link>
        <Link to="/pricing" className="btn">Pricing Page</Link>
      </div>
      {Array.from({ length: 50 }).map((_, index) => (
        <div
          key={index}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `twinkle ${Math.random() * 2 + 1}s infinite alternate`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default LandingPage;
