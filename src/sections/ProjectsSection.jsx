import PropTypes from 'prop-types';
import Section from '../ui/Section/Section';
import Card from '../ui/Card/Card';
import Typography from '../ui/Typography/Typography';
import { useScrollAnimation } from '../hooks';

const ProjectCard = ({ title, desc, stack, link, delay }) => {
  const { ref } = useScrollAnimation('animate-fade-in', [delay]);
  return (
    <Card ref={ref} data-animate="true" style={{ transitionDelay: `${delay}ms` }} variant="bordered" hoverable className="project-card">
      <Typography variant="h4" color="primary">{title}</Typography>
      <Typography variant="body">{desc}</Typography>
      <Typography variant="caption" color="muted">{stack}</Typography>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>}
    </Card>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  stack: PropTypes.string,
  link: PropTypes.string,
  delay: PropTypes.number,
};

const ProjectsSection = ({ projects = [] }) => (
  <Section id="projects" bgVariant="alternate" title="Projects">
    <div className="projects-grid">
      {projects.map((proj, i) => (
        <ProjectCard key={proj.title} {...proj} delay={i * 120} />
      ))}
    </div>
  </Section>
);

ProjectsSection.propTypes = {
  projects: PropTypes.array,
};

export default ProjectsSection;
