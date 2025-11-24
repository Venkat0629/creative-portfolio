import PropTypes from 'prop-types';
import Section from '../ui/Section/Section';
import Typography from '../ui/Typography/Typography';
import Button from '../ui/Button/Button';

const ContactForm = ({ email }) => (
  <form className="contact-form" action={`mailto:${email}`} method="POST" encType="text/plain">
    <Typography variant="h4">Contact Me</Typography>
    <label htmlFor="name">Name</label>
    <input id="name" name="name" type="text" required aria-required="true" placeholder="Your Name" />
    <label htmlFor="email">Email</label>
    <input id="email" name="email" type="email" required aria-required="true" placeholder="Your Email" />
    <label htmlFor="message">Message</label>
    <textarea id="message" name="message" rows="4" required aria-required="true" placeholder="Your Message" />
    <Button type="submit">Send</Button>
  </form>
);

ContactForm.propTypes = {
  email: PropTypes.string.isRequired,
};

const ContactSection = ({ email }) => (
  <Section id="contact" bgVariant="alternate">
    <ContactForm email={email} />
  </Section>
);

ContactSection.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ContactSection;
