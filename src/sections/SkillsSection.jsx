import PropTypes from 'prop-types';
import Section from '../ui/Section/Section';
import Badge from '../ui/Badge/Badge';
import Card from '../ui/Card/Card';
import Typography from '../ui/Typography/Typography';
import { useScrollAnimation } from '../hooks';

const SkillCard = ({ name, badge, delay }) => {
  const { ref } = useScrollAnimation('animate-fade-in', [delay]);
  return (
    <Card ref={ref} data-animate="true" style={{ transitionDelay: `${delay}ms` }} variant="elevated" className="skill-card">
      <Badge size="large" image={badge} alt={name}>{name}</Badge>
      <Typography variant="body" align="center" className="skill-name">{name}</Typography>
    </Card>
  );
};

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  badge: PropTypes.string,
  delay: PropTypes.number,
};

const SkillsSection = ({ skills = [] }) => (
  <Section id="skills" bgVariant="default" title="Skills">
    <div className="skills-grid">
      {skills.map((skill, i) => (
        <SkillCard key={skill.name} name={skill.name} badge={skill.badge} delay={i * 120} />
      ))}
    </div>
  </Section>
);

SkillsSection.propTypes = {
  skills: PropTypes.array,
};

export default SkillsSection;
