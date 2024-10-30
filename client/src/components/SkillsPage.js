// client/src/components/SkillsPage.js

import React from 'react';
import Header from './Header';
import './SkillsPage.css';

function SkillsPage() {
  const skills = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'SQL'],
    },
    {
      category: 'Machine Learning Frameworks',
      skills: ['TensorFlow', 'PyTorch', 'scikit-learn'],
    },
    {
      category: 'Data Analysis and Manipulation',
      skills: ['NumPy', 'Pandas'],
    },
    {
      category: 'Data Visualization',
      skills: ['Matplotlib', 'Seaborn', 'Plotly'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Jupyter Notebook', 'Git', 'Docker'],
    },
  ];

  return (
    <div className="skills-page">
      <Header /> {/* Include the Header */}
      <h1>My Skills</h1>
      <p className="skills-intro">
        Here are some of the tools and technologies I have experience with, focusing on AI, ML, and data-driven solutions.
      </p>
      <div className="skills-grid">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h2>{skillCategory.category}</h2>
            <ul>
              {skillCategory.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPage;
