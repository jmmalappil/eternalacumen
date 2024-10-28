# Portfolio Website

This portfolio website is built using the MERN (MongoDB, Express, React, Node.js) stack and is designed to showcase projects, skills, and contact information. The project includes a React frontend and an Express backend, with MongoDB as the database.

## Features

- **Responsive Design**: Adaptable layout for both desktop and mobile screens.
- **Projects Page**: Display your projects with descriptions, YouTube demo videos, GitHub links, and live demo requests.
- **Skills Page**: Highlight your proficiency in AI/ML and other technical skills.
- **Contact Page**: Users can send messages directly through the contact form, which are emailed using EmailJS.
- **Deployment**: Hosted on Heroku.

## Tech Stack

- **Frontend**: React, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB (via MongoDB Atlas)
- **Email Service**: EmailJS

## Project Structure

```plaintext
project-root
│
├── client             # React frontend
│   ├── public         # Static files
│   └── src            # React components and assets
│
├── server             # Express backend
│   ├── models         # Database models
│   ├── routes         # API routes
│   └── server.js      # Main server file
│
└── .env               # Environment variables
└── README.md          # Project documentation
