import PropTypes from 'prop-types';
import Section from '../ui/Section/Section';
import Typography from '../ui/Typography/Typography';

const AboutSection = ({ about }) => (
  <Section id="about" bgVariant="alternate">
    <Typography variant="h2" align="center">About Me</Typography>
    <Typography variant="body" align="center">{about}</Typography>
  </Section>
);

AboutSection.propTypes = {
  about: PropTypes.string,
};

export default AboutSection;
