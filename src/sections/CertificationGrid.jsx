import PropTypes from 'prop-types';
import Section from '../ui/Section/Section';
import Card from '../ui/Card/Card';
import Typography from '../ui/Typography/Typography';
import { useScrollAnimation } from '../hooks';

const CertCard = ({ children, delay }) => {
  const { ref } = useScrollAnimation('animate-fade-in', [delay]);
  return (
    <Card ref={ref} data-animate="true" style={{ transitionDelay: `${delay}ms` }} variant="bordered" className="cert-card">
      <Typography variant="body">{children}</Typography>
    </Card>
  );
};

CertCard.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
};

const CertificationGrid = ({ certifications = [], accomplishments = [] }) => (
  <Section id="certifications" bgVariant="alternate" title="Certifications & Accomplishments">
    <div className="cert-grid">
      {accomplishments.map((acc, i) => (
        <CertCard key={`acc${i}`} delay={i * 110}>{acc}</CertCard>
      ))}
      {certifications.map((cert, i) => (
        <CertCard key={`cert${i}`} delay={(i + accomplishments.length) * 110}>{cert}</CertCard>
      ))}
    </div>
  </Section>
);

CertificationGrid.propTypes = {
  certifications: PropTypes.array,
  accomplishments: PropTypes.array,
};

export default CertificationGrid;
