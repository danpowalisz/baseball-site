import { useState } from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo - no backend connected)');
  };

  return (
    <section className="hero-section hero-page">
      <div className="hero-content">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>
      </div>
    </section>

    <section className="contact-section">
      <div className="container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
