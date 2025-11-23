import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { CONTACT_FORM_STATES } from '../config/constants';

const Contact = React.memo(({ email }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState(CONTACT_FORM_STATES.IDLE);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState(CONTACT_FORM_STATES.SUBMITTING);
    setSubmitMessage('');

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormState(CONTACT_FORM_STATES.SUCCESS);
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setFormState(CONTACT_FORM_STATES.ERROR);
      setSubmitMessage('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>
        <motion.form
          className="form"
          onSubmit={handleSubmit}
          aria-label="Contact form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.input
            className="input"
            name="name"
            placeholder="Name"
            aria-label="Name"
            value={formData.name}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.input
            className="input"
            name="email"
            type="email"
            placeholder="Email"
            aria-label="Email"
            value={formData.email}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.textarea
            className="textarea"
            name="message"
            placeholder="Message"
            aria-label="Message"
            value={formData.message}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.div
            className="actions"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className="btn primary"
              type="submit"
              disabled={formState === CONTACT_FORM_STATES.SUBMITTING}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {formState === CONTACT_FORM_STATES.SUBMITTING ? 'Sending...' : 'Send'}
            </motion.button>
            <motion.a
              className="btn"
              href={`mailto:${email || 'someone@example.com'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Email
            </motion.a>
          </motion.div>
          {submitMessage && (
            <motion.p
              className={`contact-message ${formState === CONTACT_FORM_STATES.ERROR ? 'error' : ''}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {submitMessage}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
});

Contact.propTypes = {
  email: PropTypes.string
};

export default Contact;
