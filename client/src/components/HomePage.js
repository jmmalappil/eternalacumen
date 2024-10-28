// client/src/components/HomePage.js

import React from 'react';
import './HomePage.css';
import Header from './Header';
import profileImage from '../assets/profile.jpg'; // Replace with your own image path

function HomePage() {
  return (
    <div className="homepage">
      <Header />

      <section className="hero">
        <div className="hero-content">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <h2>Hi, I'm Jagadeesh</h2>
          <h3>Aspiring AI/ML Engineer</h3>
          <p>
            I specialize in building intelligent systems that make data-driven insights accessible and impactful. 
            Passionate about turning complex challenges into scalable solutions.
          </p>
          <div className="cta-buttons">
            <button className="cta-button">
              <a href="#projects">View Projects</a>
            </button>
            <button className="cta-button download-button">
              <a href="https://drive.google.com/file/d/1XnU9EHX7E6kDm12hjR0MK9ratUc0b3XY/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
