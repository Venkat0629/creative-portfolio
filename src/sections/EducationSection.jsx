import PropTypes from 'prop-types';
import Section from '../ui/Section/Section';
import Card from '../ui/Card/Card';
import Typography from '../ui/Typography/Typography';

const EducationSection = ({ education = {}, educationItems = [] }) => (
  <Section id="education" bgVariant="default" title="Education">
    <Card variant="default" className="edu-main">
      <Typography variant="h4" color="primary">{education.degree}</Typography>
      <Typography variant="body">{education.college}, {education.location}</Typography>
      <Typography variant="caption" color="secondary">{education.year}, {education.cgpa}</Typography>
    </Card>
    <div className="edu-grid">
      {educationItems.map((item) => (
        <Card key={item.id} className="edu-card">
          <Typography variant="h5">{item.title}</Typography>
          <Typography variant="body">{item.institution}</Typography>
          <Typography variant="caption">{item.year} ({item.grade})</Typography>
        </Card>
      ))}
    </div>
  </Section>
);

EducationSection.propTypes = {
  education: PropTypes.object,
  educationItems: PropTypes.array,
};

export default EducationSection;
