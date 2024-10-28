// client/src/components/ContactPage.js

import React, { useRef, useState } from 'react';
import Header from './Header';
import './ContactPage.css';
import emailjs from '@emailjs/browser';

function ContactPage() {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('ETERNALACUMEN', 'eternal_template', form.current, 'V1rruRrXcZtgSeFp1')
      .then(
        (result) => {
          console.log(result.text);
          setMessageStatus('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setMessageStatus('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <div className="contact-page">
      <Header /> {/* Include the Header */}
      <h1>Contact Me</h1>
      <p className="contact-intro">Feel free to reach out using the form below!</p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="user_name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="user_email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit" className="send-button">Send Message</button>
        {messageStatus && <p className="message-status">{messageStatus}</p>}
      </form>
    </div>
  );
}

export default ContactPage;
