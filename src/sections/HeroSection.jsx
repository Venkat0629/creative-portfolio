import PropTypes from 'prop-types';
import Section from '../ui/Section/Section';
import Typography from '../ui/Typography/Typography';

const HeroSection = ({ profile, links, loading }) => {
  return (
    <Section id="hero" bgVariant="default">
      {loading ? (
        <Typography variant="h1" align="center">Loading Portfolio...</Typography>
      ) : (
        <>
          <Typography variant="h1" align="center" color="primary">
            {profile?.name}
          </Typography>
          <Typography variant="h2" align="center" color="secondary">
            {profile?.title}
          </Typography>
          <Typography variant="body" align="center">
            {profile?.location}
          </Typography>
          <div style={{ textAlign: 'center', margin: '2rem 0' }}>
            {links?.resume && (
              <a href={links.resume} download rel="noopener noreferrer">
                <button className="btn btn-primary">Download Resume</button>
              </a>
            )}
          </div>
        </>
      )}
    </Section>
  );
};

HeroSection.propTypes = {
  profile: PropTypes.object,
  links: PropTypes.object,
  loading: PropTypes.bool,
};

export default HeroSection;
