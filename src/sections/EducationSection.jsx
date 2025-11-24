import PropTypes from 'prop-types';
import Section from '../ui/Section/Section';
import Card from '../ui/Card/Card';
import Typography from '../ui/Typography/Typography';
import { useScrollAnimation } from '../hooks';

const EduCard = ({ item, delay }) => {
  const { ref } = useScrollAnimation('animate-fade-in', [delay]);
  return (
    <Card ref={ref} data-animate="true" style={{ transitionDelay: `${delay}ms` }} className="edu-card">
      <Typography variant="h5">{item.title}</Typography>
      <Typography variant="body">{item.institution}</Typography>
      <Typography variant="caption">{item.year} ({item.grade})</Typography>
    </Card>
  );
};

EduCard.propTypes = {
  item: PropTypes.object.isRequired,
  delay: PropTypes.number,
};

const EducationSection = ({ education = {}, educationItems = [] }) => (
  <Section id="education" bgVariant="default" title="Education">
    <Card variant="default" className="edu-main">
      <Typography variant="h4" color="primary">{education.degree}</Typography>
      <Typography variant="body">{education.college}, {education.location}</Typography>
      <Typography variant="caption" color="secondary">{education.year}, {education.cgpa}</Typography>
    </Card>
    <div className="edu-grid">
      {educationItems.map((item, i) => (
        <EduCard key={item.id} item={item} delay={i * 120} />
      ))}
    </div>
  </Section>
);

EducationSection.propTypes = {
  education: PropTypes.object,
  educationItems: PropTypes.array,
};

export default EducationSection;
