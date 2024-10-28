// client/src/components/AboutPage.js

import React from 'react';
import './AboutPage.css';
import Header from './Header';

function AboutPage() {
  return (
    <div className="about-page">
      <Header />
      <h1>About Me</h1>
      <p>
        I am an aspiring AI/ML Engineer with a passion for creating intelligent systems and solving complex problems.
        My journey in technology has been driven by a strong interest in data science, machine learning, and artificial intelligence.
      </p>
      <h2>My Background</h2>
      <p>
        With a background in data analysis and software engineering, I strive to leverage AI and ML to bring impactful insights to life.
        My goal is to design scalable solutions that contribute to industry advancements.
      </p>
      <h2>Skills and Expertise</h2>
      <ul>
        <li>Programming Languages: Python, JavaScript, SQL</li>
        <li>ML Frameworks: TensorFlow, PyTorch, scikit-learn</li>
        <li>Data Visualization: Matplotlib, Seaborn, Plotly</li>
        <li>Other Tools: Git, Docker, Jupyter Notebook</li>
      </ul>
    </div>
  );
}

export default AboutPage;
