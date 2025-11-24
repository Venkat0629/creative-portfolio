import PropTypes from 'prop-types';
import Section from '../ui/Section/Section';
import Card from '../ui/Card/Card';
import Typography from '../ui/Typography/Typography';
import { useScrollAnimation } from '../hooks';

const TimelineCard = ({ exp, delay }) => {
  const { ref } = useScrollAnimation('animate-fade-in', [delay]);
  return (
    <Card ref={ref} data-animate="true" style={{ transitionDelay: `${delay}ms` }} variant="elevated" className="timeline-card">
      <Typography variant="h4" color="primary">{exp.company}</Typography>
      <Typography variant="h6">{exp.role} ({exp.period})</Typography>
      <Typography variant="body">{exp.impact}</Typography>
    </Card>
  );
};

TimelineCard.propTypes = {
  exp: PropTypes.object.isRequired,
  delay: PropTypes.number,
};

const ExperienceTimeline = ({ experience }) => (
  <Section id="experience" title="Experience" bgVariant="default">
    <div className="timeline">
      {experience?.map((exp, i) => (
        <TimelineCard key={i} exp={exp} delay={i * 140} />
      ))}
    </div>
  </Section>
);

ExperienceTimeline.propTypes = {
  experience: PropTypes.array,
};

export default ExperienceTimeline;
