import React, { useRef } from 'react';
import './Contact.scss';

function Contact() {
  const messageRef = useRef();

  const submitForm = (event) => {
    event.preventDefault();
    const message = {
      content: messageRef.current.value,
    };
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    };
    const url = 'http://localhost:5000/message';
    fetch(url, config); 
  };
  return (
    <div className="contact-content">
      <h1>Contact the Royal Kingdom</h1>
      <section className="contact">
        <form className="contactForm" onSubmit={submitForm}>
          <label htmlFor="name">Name:</label><br />
          <input type="text" className="name" name="name" value="" /><br />
          <label htmlFor="email">E-mail:</label><br />
          <input type="email" className="email" name="email" value="" /><br />
          <label htmlFor="message">Message:</label><br />
          <textarea ref={messageRef} className="message" name="message"></textarea><br />
          <input className="submit-button" type="submit" value="Submit" />
        </form>
    </section>
    </div>
  );
}

export default Contact;
