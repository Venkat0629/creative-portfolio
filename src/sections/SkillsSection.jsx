import PropTypes from 'prop-types';
import Section from '../ui/Section/Section';
import Badge from '../ui/Badge/Badge';
import Card from '../ui/Card/Card';
import Typography from '../ui/Typography/Typography';

const SkillCard = ({ name, badge }) => (
  <Card variant="elevated" className="skill-card">
    <Badge size="large" image={badge} alt={name}>{name}</Badge>
    <Typography variant="body" align="center" className="skill-name">{name}</Typography>
  </Card>
);

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  badge: PropTypes.string,
};

const SkillsSection = ({ skills = [] }) => (
  <Section id="skills" bgVariant="default" title="Skills">
    <div className="skills-grid">
      {skills.map((skill) => (
        <SkillCard key={skill.name} name={skill.name} badge={skill.badge} />
      ))}
    </div>
  </Section>
);

SkillsSection.propTypes = {
  skills: PropTypes.array,
};

export default SkillsSection;
