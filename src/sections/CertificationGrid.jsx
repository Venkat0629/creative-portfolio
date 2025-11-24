import PropTypes from 'prop-types';
import Section from '../ui/Section/Section';
import Card from '../ui/Card/Card';
import Typography from '../ui/Typography/Typography';

const CertificationGrid = ({ certifications = [], accomplishments = [] }) => (
  <Section id="certifications" bgVariant="alternate" title="Certifications & Accomplishments">
    <div className="cert-grid">
      {accomplishments.map((acc, idx) => (
        <Card key={idx} variant="elevated" className="cert-card">
          <Typography variant="h6" color="primary">{acc}</Typography>
        </Card>
      ))}
      {certifications.map((cert, idx) => (
        <Card key={cert + idx} variant="bordered" className="cert-card">
          <Typography variant="body">{cert}</Typography>
        </Card>
      ))}
    </div>
  </Section>
);

CertificationGrid.propTypes = {
  certifications: PropTypes.array,
  accomplishments: PropTypes.array,
};

export default CertificationGrid;
