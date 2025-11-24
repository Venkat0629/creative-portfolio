import PropTypes from 'prop-types';
import Section from '../ui/Section/Section';
import Card from '../ui/Card/Card';
import Typography from '../ui/Typography/Typography';

const ExperienceTimeline = ({ experience }) => (
  <Section id="experience" title="Experience" bgVariant="default">
    <div className="timeline">
      {experience?.map((exp, idx) => (
        <Card key={idx} variant="elevated" className="timeline-card">
          <Typography variant="h4" color="primary">{exp.company}</Typography>
          <Typography variant="h6">
            {exp.role} ({exp.period})
          </Typography>
          <Typography variant="body">{exp.impact}</Typography>
        </Card>
      ))}
    </div>
  </Section>
);

ExperienceTimeline.propTypes = {
  experience: PropTypes.array,
};

export default ExperienceTimeline;
