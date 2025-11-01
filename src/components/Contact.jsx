import React, { useState } from 'react';

const Contact = ({ email }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate form submission (replace with actual API call)
    try {
      // In a real app, you'd send this to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        <form className="form" onSubmit={handleSubmit} aria-label="Contact form">
          <input
            className="input"
            name="name"
            placeholder="Name"
            aria-label="Name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
          <input
            className="input"
            name="email"
            type="email"
            placeholder="Email"
            aria-label="Email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
          <textarea
            className="textarea"
            name="message"
            placeholder="Message"
            aria-label="Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
          />
          <div className="actions">
            <button className="btn primary" type="submit" disabled={isSubmitting} aria-busy={isSubmitting} aria-live="polite">
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
            <a className="btn" href={`mailto:${email || 'someone@example.com'}`} aria-label="Send email via your email client">Email</a>
          </div>
          {submitMessage && <p style={{ marginTop: '1rem', color: submitMessage.includes('Thank you') ? 'green' : 'red' }}>{submitMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;