// client/src/components/ProjectsPage.js

import React from 'react';
import './ProjectsPage.css';
import Header from './Header';

function ProjectsPage() {
  const projects = [
    {
      title: 'Project 1',
      description: 'This project involves AI/ML for image recognition.',
      youtubeEmbed: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your video link
      githubLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      description: 'This project focuses on natural language processing.',
      youtubeEmbed: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      githubLink: 'https://github.com/yourusername/project2',
    },
    {
      title: 'Project 3',
      description: 'This project involves AI/ML for image recognition.',
      youtubeEmbed: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your video link
      githubLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 4',
      description: 'This project focuses on natural language processing.',
      youtubeEmbed: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      githubLink: 'https://github.com/yourusername/project2',
    },
    // Add more projects here
  ];

  return (
    <div className="projects-page">
    <Header />
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="video-container">
              <iframe
                width="100%"
                height="200"
                src={project.youtubeEmbed}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
